# 🧬 Zoology Interactive Academic Portal

A high-performance, offline-capable Progressive Web App (PWA) designed for Zoology students and professors. This portal provides a comprehensive environment for theoretical study, competitive exam simulation, and virtual laboratory experiments.

🌐 **Live Link:** [https://gyk-21.github.io/zoology-portal/](https://gyk-21.github.io/zoology-portal/)

---

## 🚀 Key Modules

### 📖 Deep Theory Repository
Access professor-level theoretical content optimized for B.Sc curricula and professional exams like NET/SET. Structured for deep conceptual clarity.

### 🎯 Competitive Exam Engine
- **100 MCQ Simulation**: High-fidelity exam environment with a 60-minute timer.
- **Negative Marking**: Accurate scoring (+1.0 for correct, -0.25 for incorrect).
- **Student Identity**: Identity tracking for every attempt.
- **Security Seal**: SHA-256 cryptographic signing of results to prevent tampering.

### 📝 Practice Quizzes
Modular MCQs with instant feedback, detailed explanations, and retry capabilities for focused learning.

### 🔬 Virtual Laboratory
Interactive biological simulations including:
- Gram Staining Procedure
- Mitosis Visualization
- Cardiac Blood Flow Analysis
- DNA Structure and Replication

### ⚡ Rapid Revision System
High-yield summaries, mnemonics, and quick-reference tables designed for last-minute exam preparation.

### 📊 Admin Control Panel
- **Password:** `admin123`
- **Result Auditor**: Verify student result authenticity using the Security Seal.
- **Data Export**: Export student performance metrics in JSON format.
- **Analytics**: Track weakest topics and overall class progress.

---

## 📱 Installation (PWA)

This portal is built as a **Progressive Web App**, meaning it can be installed on any device and works **100% offline.**

### On Android (Chrome)
1. Open the Live Link in Chrome.
2. Tap the **three dots** in the top-right corner.
3. Select **"Install App"** or **"Add to Home Screen"**.
4. The portal will now appear on your home screen without a browser URL bar.

### On Desktop (Chrome/Edge)
1. Open the Live Link.
2. Click the **Install** icon in the right side of the address bar.
3. The app will launch in a dedicated standalone window.

---

## 🛠️ Technology Stack
- **Languages**: HTML5, CSS3, JavaScript (ES6+).
- **Offline Engine**: Service Workers & Cache API.
- **Security**: SubtleCrypto API (SHA-256) for result integrity.
- **Persistence**: LocalStorage API for cross-module data synchronization.
- **Hosting**: GitHub Pages.

---

## 🛡️ Security & Integrity
The "Security Seal" feature ensures that results sent via email are authentic. Professors can copy the seal from a student's email and paste it into the **Result Auditor** in the Admin Panel to verify that the score and timestamp haven't been modified.

---

## 👨‍💻 Author
**Designed & Developed by Yaswanth Kumar (gyk-21)**

*Dedicated to advancing biological education through interactive technology.*
