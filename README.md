# Job Search App

This is a job search app that allows users to browse, search, and bookmark job listings.

I initially followed a Bytegrad tutorial to refresh my toolkit and frontend skills. However, I ended up reinventing the app from the ground up — adding new components and features that I believe significantly improve the user experience. It has evolved into a project I'm proud to share as a demonstration of my frontend development work.

---

## 🚀 Built With

- **Vite**
- **TypeScript**
- **Embla Carousel**
- **React Icons**
- **Radix UI**
- **TanStack (React Query)**

---

## 🧠 Key Features

### 🔁 Page Carousel Navigation

Instead of traditional vertical scrolling, I implemented a horizontal navigation carousel. It gives the app a unique, intuitive feel — more like browsing slides than scrolling a page.

### 🧩 Contexts for State Management

- **`ActiveIdContext`** – Tracks the currently focused job.
- **`BookmarksContext`** – Manages bookmarked job listings.
- **`JobItemsContext`** – Handles fetched job data and utilities like pagination.
- **`SearchTextContext`** – Tracks the user's search input with a built-in debounce to reduce unnecessary fetches.

---

## 🛠 Custom Hook: `useStepHelpers`

This custom hook is one of my favorite additions.

It uses **forward references** to expose DOM elements and provides programmatic focus control. This enhances accessibility — allowing users to interact more smoothly with input prompts or modals. You’ll find it in `hooks.ts`.

---

## 📦 Folder Structure Highlights

```bash
src/
├── components/
├── context/
├── hooks/
├── pages/
├── types/
└── App.tsx
```
