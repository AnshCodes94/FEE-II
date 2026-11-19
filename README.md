# 🚀 FEE-II (Front-End Engineering - II)

Welcome to the **FEE-II** repository! This repository serves as a complete learning archive, lab manual, and project workspace covering the progression from core web fundamentals (**HTML5, CSS3, Vanilla JavaScript, & Node.js**) to modern full-stack frontend architectures (**React, Vite, Zustand, React Router, & Supabase**).

---

## 📁 Repository Architecture

The repository is systematically divided into foundational modules and multiple React + Vite workspaces:

```text
FEE-II-main/
├── 📂 HTML/                  # Core HTML5 layouts, CSS Grid/Flexbox, DOM & mini-apps
├── 📂 Javascript/            # Vanilla JS, Node.js file system (fs), Modules & CLI scripts
├── 📂 Notes/                 # Study notes and reference text files
├── 📂 Frontend/              # Base Vite + React boilerplate workspace
├── 📂 g4/                    # React + Vite practice workspace
├── 📂 g4fee/                 # Comprehensive React workspace (Routing, Zustand, Hooks, Assignments)
│   ├── 📂 Assignment/        # Dedicated React assignment modules
│   ├── 📂 src/               # Main components, Auth pages (SignIn/SignUp), Navigation & Frames
│   ├── 📂 src1/              # Advanced React: Protected Routes, useMemo, State Lifting & StoreApp
│   └── 📂 src2/              # Component hierarchy & Prop drilling / multi-gen components
├── 📂 reactlab/              # React Lab Projects (Carousel & Full-Stack Supabase CRUD App)
│   ├── 📂 src0/              # Interactive Media Carousel & UI experiments
│   └── 📂 src1/              # Student Management System (React + Zustand + Supabase)
└── 📂 dist/                  # Production build output (Vercel deployment ready)
```

---

## 📚 Module-by-Module Breakdown

### 1. 🌐 HTML & CSS Fundamentals (`/HTML`)
Hands-on exercises focusing on semantic markup, responsive styling, and browser APIs:
* **Layout & Styling:** `flexbox.html`, `grid.html`, `grid2.html`, `layout.html`, `style.css`, `style2.css`
* **Interactive Mini-Projects:**
  * `Clock.html` & `Clock.css` — Live analog/digital clock implementation.
  * `todo_list.html` — Interactive task manager using DOM manipulation.
  * `browserStorage.html` — Demonstrating `localStorage` and `sessionStorage`.
  * `login.html` & `login.css` — Responsive authentication UI form.
  * `stamp.html` & `dom.html` — Dynamic element creation and DOM event handling.
* **Lab Exercises:** `exercise_1.html` through `exercise_5.html`.

### 2. ⚡ JavaScript & Node.js Basics (`/Javascript`)
Core programming logic, modular JS, and asynchronous file handling:
* **Logic & Data Processing:** `Billing.js`, `Inventory.js`, `Student_Marks.js`, `functions.js`, `dom.js`
* **Module Systems (CommonJS & ES6):** `myModule.js`, `myModuleImport.js`, `myModuleRequired.js`
* **Asynchronous File I/O:** `readFileAwait.js` (`async/await`) and `readFileThen.js` (Promises) reading from `response.txt`.
* **CLI Interactivity:** Uses `prompt-sync` for synchronous terminal input.

### 3. ⚛️ React Core & Routing (`/g4fee`)
A multi-directory React + Vite setup exploring real-world frontend patterns:
* **Core Components (`/src`):** `Header.jsx`, `Footer.jsx`, `Notes.jsx`, `Stamp.jsx`, `ShowList.jsx`, `ShowList2.jsx`, `RlDemo.jsx`.
* **Authentication & Navigation (`/src/pages`):** `Home.jsx`, `About.jsx`, `Contact.jsx`, `SignIn.jsx`, `SignUp.jsx`, `Nav1.jsx`, `Nav2.jsx`, `NavBar.jsx`.
* **State Management & Optimization (`/src1` & `/stores`):**
  * Global state using **Zustand** (`useAuthStore.jsx`, `StoreApp.jsx`).
  * Performance optimization with `App_usememo.jsx` (`useMemo`).
  * React concepts: `StateLifting.jsx`, `ProtectedRoutes.jsx`, dynamic product routing (`Product.jsx`, `ProductList.jsx`), and `PageNotFound.jsx` (404 handling).
* **Component Trees (`/src2`):** Multi-level component communication (`Child_gen1.jsx`, `Child_gen2.jsx`).

### 4. 🧪 React Lab & Full-Stack Integration (`/reactlab`)
Practical lab implementations integrating external backends and media assets:
* **Media Carousel (`/src0`):** `Carousel.jsx` featuring themed visual assets.
* **Student Management CRUD App (`/src1`):**
  * **Backend:** Integrated with **Supabase** (`supabaseClient.js`).
  * **State Management:** Powered by **Zustand** (`useStudentStore.js`).
  * **Features:** Create (`AddForm.jsx`), Read (`StudentsApp.jsx`, `Home.jsx`), Update (`UpdateForm.jsx`), and Delete student records seamlessly.

---

## 🛠️ Tech Stack

| Category | Technologies Used |
| :--- | :--- |
| **Core Web** | HTML5, CSS3 (Flexbox, Grid), Vanilla JavaScript (ES6+) |
| **Frontend Framework** | React 18+, Vite |
| **Routing & State** | React Router DOM, Zustand |
| **Backend / BaaS** | Supabase (PostgreSQL), Node.js (`fs`, `prompt-sync`) |
| **Tooling & Deployment** | ESLint, npm, Vercel |

---

## 🚀 Getting Started

Since this repository contains multiple standalone Vite/React projects (`Frontend`, `g4`, `g4fee`, `reactlab`, and the root project), follow these steps to run any specific module locally:

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd FEE-II-main
```

### 2. Run a React Workspace (e.g., `g4fee` or `reactlab`)
Navigate into the specific folder you want to explore, install dependencies, and start the Vite dev server:
```bash
cd g4fee        # or cd reactlab / cd Frontend
npm install
npm run dev
```

### 3. Run Vanilla JavaScript / Node Scripts
```bash
cd Javascript
node Student_Marks.js
```

### 4. Run HTML/CSS Files
Simply open any `.html` file inside the `/HTML` folder directly in your browser or use the **Live Server** extension in VS Code.

---

## ⚙️ Environment Variables (For `reactlab` Supabase App)
If you are running the **Student Management App** inside `reactlab/src1`, make sure to configure your Supabase credentials in a `.env` file inside `reactlab/`:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 🌐 Deployment
This project includes pre-configured **Vercel** deployment metadata (`.vercel/`) and production build assets (`/dist`), enabling instant zero-config deployments on Vercel.
