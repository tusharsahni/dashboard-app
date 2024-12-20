# Dashboard Design Replication

This project is a replication of the dashboard design provided in the assignment. The focus was on implementing the layout, functionality, and responsiveness using React.js while adhering to the design specifications.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Approach](#approach)
5. [Challenges Faced](#challenges-faced)
6. [Assumptions Made](#assumptions-made)
7. [How to Run the Project](#how-to-run-the-project)
8. [Screenshots](#screenshots)

---

## Project Overview
This dashboard replicates the provided design, ensuring all visible components are implemented accurately. It includes interactive elements, form validation, and a responsive layout for various screen sizes.

---

## Features
1. **Responsive Design**
   - The dashboard is fully responsive and adapts seamlessly to desktop, tablet, and mobile views.

2. **Interactive Elements**
   - Checkboxes, dropdowns, and file upload buttons are fully functional.

3. **Form Validation**
   - Input fields include basic validation to prevent empty submissions.

4. **Modular Components**
   - The dashboard is built using reusable React components for maintainability and scalability.

---

## Technology Stack
- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS for efficient and responsive design
- **Validation**: Basic form validation using React hooks

---

## Approach
1. **Layout and Structure**
   - I began by breaking down the design into modular components (e.g., navigation menu, progress bar, sections) for easier development and reusability.

2. **Responsive Design**
   - Media queries and Tailwind CSS utilities were used to ensure a responsive layout.

3. **Functionality**
   - Interactive elements such as dropdowns, checkboxes, and file uploads were implemented with React state management.

4. **Form Validation**
   - Used basic validation logic in React to ensure user inputs are validated before submission.

---

## Challenges Faced
1. **Ensuring Pixel-Perfect Design**
   - Aligning the layout with the provided design required fine-tuning CSS styles.
   - Resolved by inspecting and adjusting margins, paddings, and alignments.

2. **Responsiveness**
   - Ensuring the dashboard worked seamlessly across devices involved testing multiple screen sizes and fixing layout breakpoints.

3. **Dynamic Elements**
   - Implementing dynamic dropdowns and ensuring proper state management for interactive elements was initially challenging but resolved using React state hooks.

---

## Assumptions Made
1. The provided design is the final version, and no additional features are required beyond what was visible.
2. API endpoints for dynamic data are not provided, so dropdowns and other elements were implemented with mock data.
3. Validation requirements were assumed to be basic (e.g., required fields).

---

## How to Run the Project

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
