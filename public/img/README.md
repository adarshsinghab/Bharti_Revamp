# 🖼️ Image Placeholders & Asset Management Guide

All website images are stored in this directory (`public/img/`). To replace any image on the website, simply overwrite the corresponding file in this folder using the exact same filename.

---

## 📁 Placeholder Files Mapping

| Purpose | Filename | Description | Current File |
| :--- | :--- | :--- | :--- |
| **University Primary Logo** | `logo.webp` | Main university crest & logo used in Header, Hero & Footer | [logo.webp](file:///d:/Bharti%20university%20revamp/V1_backup/public/img/logo.webp) |
| **Secondary Logo Variant** | `logo_01.webp` | Secondary university emblem | [logo_01.webp](file:///d:/Bharti%20university%20revamp/V1_backup/public/img/logo_01.webp) |
| **Under Construction Graphic** | `under_construction.webp` | Modal graphic for unbuilt links | [under_construction.webp](file:///d:/Bharti%20university%20revamp/V1_backup/public/img/under_construction.webp) |
| **Hero Background Image** | `hero_bg_placeholder.png` | Main homepage hero backdrop image | [hero_bg_placeholder.png](file:///d:/Bharti%20university%20revamp/V1_backup/public/img/hero_bg_placeholder.png) |
| **Campus Gallery 1** | `gallery_1.png` | Main Quadrangle & Academic Wings | [gallery_1.png](file:///d:/Bharti%20university%20revamp/V1_backup/public/img/gallery_1.png) |
| **Campus Gallery 2** | `gallery_2.png` | Convocation Hall & Event Space | [gallery_2.png](file:///d:/Bharti%20university%20revamp/V1_backup/public/img/gallery_2.png) |
| **Campus Gallery 3** | `gallery_3.png` | Central Library & Archive | [gallery_3.png](file:///d:/Bharti%20university%20revamp/V1_backup/public/img/gallery_3.png) |
| **Campus Gallery 4** | `gallery_4.png` | Interactive Smart Classrooms | [gallery_4.png](file:///d:/Bharti%20university%20revamp/V1_backup/public/img/gallery_4.png) |
| **Recruiter Logo Placeholder** | `partner_logo_placeholder.png` | Template logo for corporate recruiters | [partner_logo_placeholder.png](file:///d:/Bharti%20university%20revamp/V1_backup/public/img/partner_logo_placeholder.png) |
| **Student Avatar Placeholder** | `student_avatar_placeholder.png` | Template photo for alumni testimonials | [student_avatar_placeholder.png](file:///d:/Bharti%20university%20revamp/V1_backup/public/img/student_avatar_placeholder.png) |

---

## ⚡ How to Replace an Image in 3 Simple Steps

1. Save your new image with the exact filename (e.g. `gallery_1.png` or `logo.webp`).
2. Paste and overwrite the file inside the `public/img/` folder.
3. Deploy your live update:
   ```bash
   git add .
   git commit -m "Replace image assets"
   git push origin master
   npx vercel --prod --yes
   ```
