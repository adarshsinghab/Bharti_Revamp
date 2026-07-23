import { NOTICES_DATA, NoticeItem } from "./noticesData";

const STORAGE_KEY = "bu_notices_data_v1";

export const getStoredNotices = (): NoticeItem[] => {
  if (typeof window === "undefined") return NOTICES_DATA;
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    if (item) {
      const parsed = JSON.parse(item);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error("Error reading notices from storage:", err);
  }
  return NOTICES_DATA;
};

export const saveNotices = (notices: NoticeItem[]): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notices));
    // Dispatch custom event for real-time updates across tabs/components
    window.dispatchEvent(new Event("bu_notices_updated"));
  } catch (err) {
    console.error("Error saving notices to storage:", err);
  }
};

export const addNoticeItem = (notice: Omit<NoticeItem, "id">): NoticeItem => {
  const current = getStoredNotices();
  const newNotice: NoticeItem = {
    ...notice,
    id: `notice-${Date.now()}`
  };
  const updated = [newNotice, ...current];
  saveNotices(updated);
  return newNotice;
};

export const updateNoticeItem = (id: string, updatedFields: Partial<NoticeItem>): NoticeItem[] => {
  const current = getStoredNotices();
  const updated = current.map((n) => (n.id === id ? { ...n, ...updatedFields } : n));
  saveNotices(updated);
  return updated;
};

export const deleteNoticeItem = (id: string): NoticeItem[] => {
  const current = getStoredNotices();
  const updated = current.filter((n) => n.id !== id);
  saveNotices(updated);
  return updated;
};

export const resetNoticesToDefault = (): NoticeItem[] => {
  saveNotices(NOTICES_DATA);
  return NOTICES_DATA;
};
