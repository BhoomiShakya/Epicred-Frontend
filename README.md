# 💼 **Featured Jobs Portal**  
*A modern job board built with Next.js 14 and TypeScript*

> Explore featured job listings, view job details in a sleek modal, apply with validation, and track applications — all in one interactive UI.

---

## ✨ **Features**

- 🔥 Featured Jobs with dynamic modal routing
- 💬 Job Details + Application Form in Modal
- 🧾 Formik + Yup for smooth form validation
- 💾 Persist applied jobs in `localStorage`
- 🏷️ “Applied” tag on previously applied jobs
- 🌐 Fully responsive UI with **Tailwind CSS**
- ⚙️ SSR/SSG support using **Next.js App Router**
- 🧩 API integration using **Axios** or **RTK Query**
- 🔒 Built with **TypeScript** for type safety

---

## 🛠️ **Tech Stack**

| Technology         | Purpose                            |
|--------------------|------------------------------------|
| **Next.js 14**     | Routing, SSR, SSG (App Router)     |
| **TypeScript**     | Static typing                      |
| **Tailwind CSS**   | Utility-first modern styling       |
| **Formik + Yup**   | Form handling and validation       |
| **Context API / Redux** | State management             |
| **Axios / RTK Query**   | API communication            |
| **localStorage**   | Client-side persistence            |

---

## 📁 **Project Structure**

```
/app
 ├── jobs/                  # Featured job listings
 │   ├── page.tsx           # Grid of jobs
 │   └── [id]/page.tsx      # Modal details (SSR route)
 ├── applied/               # Applied jobs page
 │   └── page.tsx
/components
 ├── JobCard.tsx            # Featured job UI
 ├── JobModal.tsx           # Modal + Application Form
 ├── AppliedTag.tsx         # “Applied” label component
 └── Layout.tsx             # Common layout
/utils
 └── storage.ts             # localStorage utilities
```

---

## 🧠 **Smart Storage with Expiry**

Want to automatically expire old applications? Here's a sample implementation:

```ts
// Set with expiry
export const setWithExpiry = (key: string, value: any, ttl: number) => {
  const now = new Date();
  const item = { value, expiry: now.getTime() + ttl };
  localStorage.setItem(key, JSON.stringify(item));
};

// Get with expiry check
export const getWithExpiry = (key: string) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  if (new Date().getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
```

---

## 🚀 **Getting Started**

```bash
# 1. Clone the repo
git clone https://github.com/your-username/featured-jobs.git
cd featured-jobs

# 2. Install dependencies
npm install # or yarn

# 3. Run the dev server
npm run dev # or yarn dev

# 4. Visit the app
http://localhost:3000
```

---

## 🖼️ **Live Preview**

> Add a few screenshots or a quick GIF showing:
> - Job cards grid
> - Modal with form
> - Applied tag in the Applied Jobs page

---

## 🌱 **Planned Enhancements**

- 🌍 Real job data from public APIs
- 🔐 Authentication via NextAuth or Firebase
- 🔍 Search and filtering for job categories
- 📧 Email confirmation on application
- 📊 Analytics dashboard for tracking jobs

---

## 👩‍💻 **About the Developer**

**Bhoomi Shakya**  
🎓 B.Tech in AIML @ GLA University  
🛠️ Full-Stack Developer | React | Node.js | MongoDB | MySQL  
🎨 UI/UX Explorer | Illustrator | AI Enthusiast  
🏆 450+ LeetCode Problems Solved | Hackathon Winner  

🔗 [Portfolio](#) • [LinkedIn](#) • [GitHub](#)

---

## 📜 **License**

Licensed under the MIT License.  
Feel free to use, share, and improve this project. 🚀

---
