# Gemini Consultants - Website

Official website and digital landing page for **Gemini Consultants** (Jeet Oza).

---

## 🚀 Quick Start (Previewing Locally)

1. **Direct Double-Click**:
   - Navigate to `D:\gemini consultants\website\` and double-click `index.html`. It opens directly in your default browser (Chrome, Edge, Firefox, Brave).

2. **Or via Local Server (Recommended for perfect asset loading)**:
   - Open PowerShell or Terminal in this folder:
     ```bash
     cd "D:\gemini consultants\website"
     python -m http.server 8000
     ```
   - Open your browser and go to: `http://localhost:8000`

---

## 🛠️ How to Customize or Add Services

All website details are centralized in **`services.js`**. You do **not** need to touch any HTML code!

### 1. Update Contact Info:
Open `services.js` and modify:
```javascript
const SITE_CONFIG = {
    phone: "8830634354",
    email: "jeetoza12@protonmail.com",
    location: "Nallasopara / Mumbai, Maharashtra",
    ...
};
```

### 2. Add or Edit Services:
In `services.js`, under `services: [...]`, edit existing cards or simply add a new object:
```javascript
{
    id: "trademark",
    title: "Trademark & Intellectual Property",
    badge: "IP Compliance",
    icon: "award",
    shortDesc: "Brand name & logo trademark search, filing, and objection clearance.",
    features: [
        "Comprehensive trademark search report",
        "TM Application filing in Class 35/42",
        "Replying to trademark examination reports"
    ],
    whatsappNote: "Hi Jeet, I need assistance with Trademark Registration."
}
```
Save the file and refresh your browser—the new service card appears automatically!

---

## 🌐 Free 1-Minute Hosting & Deployment

When you're ready to share this link with clients or put it on your WhatsApp business bio:

### Option A: Vercel / Netlify (Recommended - 30 seconds)
1. Go to [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com).
2. Simply drag and drop the `website` folder.
3. You immediately get a live link (e.g. `geminiconsultants.netlify.app`), and you can connect your custom domain (e.g. `geminiconsultants.in`) for free!

### Option B: GitHub Pages
1. Push this folder to a GitHub repository named `gemini-consultants`.
2. In Repo Settings -> **Pages**, select **Deploy from a branch** -> `main` / `root`.
3. Your site will be live at `https://<your-username>.github.io/gemini-consultants`.