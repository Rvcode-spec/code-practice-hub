# 📊 Stock Market Dashboard Web Application

![Status: Deployed](https://img.shields.io/badge/Status-Deployed-brightgreen)  
![Stack: MERN](https://img.shields.io/badge/Stack-MERN-blue)  
![Database: PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-lightgrey)  
![Charts: Chart.js](https://img.shields.io/badge/Charts-Chart.js-orange)  

---

🚀 Overview

This project demonstrates my ability to design and implement a robust stock market dashboard using modern web technologies.
The application provides an intuitive UI, scalable backend, and effective data visualization, aligned with industry standards for fintech solutions.

## Features

- **Intuitive UI:**  
  - Left panel: Scrollable list of 10+ company names  
  - Main panel: Interactive chart displaying historical stock prices

- **Data Management:**  
  - Mock dataset for demonstration (easily extendable to live APIs)  
  - RESTful backend serving company and stock data  
  - PostgreSQL database for reliable data storage

- **Frontend:**  
  - Built with ReactJS for modularity and maintainability  
  - Chart.js integration for dynamic data visualization  
  - Responsive design using Tailwind CSS

- **Backend:**  
  - Node.js and Express.js for API development  
  - Secure environment variable management  
  - Comprehensive error handling

- **Bonus Enhancements:**  
  - 52-week high/low, average volume, and P/E ratio metrics  
  - AI-based next-day price prediction (sample logic included)  
  - Dockerized setup for easy deployment  
  - Live deployment on Render

---

## Technologies Used

- **Backend:** Node.js, Express.js, PostgreSQL
- **Frontend:** React.js, Tailwind CSS, Chart.js
- **Deployment:** Render (cloud hosting), Docker
- **Tools:** Postman, Git

---

## Development Approach

I adopted a modular and scalable development strategy, ensuring clear separation between backend and frontend components. The backend exposes secure RESTful APIs, while the frontend leverages reusable React components for a seamless user experience. Special attention was given to error handling, data integrity, and responsive design. Bonus features such as AI-based predictions and Docker support were implemented to showcase versatility and a forward-thinking approach.

---

## Challenges Encountered

Key challenges included configuring CORS for smooth frontend-backend communication, managing database sequences after bulk deletions, and ensuring consistent deployment on cloud platforms. These were addressed through careful debugging, thorough testing, and leveraging best practices in web development.

---

## How to Run

**Backend**
```bash
cd backend
npm install
node index.js
```

**Frontend**
```bash
cd frontend
npm install
npm start
```

---

## API Endpoints

- `GET /api/companies` — Retrieve all companies
- `POST /api/companies` — Add a new company
- `DELETE /api/delete` — Delete all companies

---

## Deliverables

- Complete source code
- Sample dataset
- Screenshots and deployed project link
- Documentation and development summary

---

## Deployed Project

[Live Demo](https://stockvision-backend.onrender.com)

---

## Contact

For further information or to schedule an interview, please contact:  
📧 shaktijarnox@outlook.com

---

Thank you for considering my application. I look forward to the opportunity to contribute to