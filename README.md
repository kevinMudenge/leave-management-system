# Leave Management System

## Overview

The Leave Management System is a web application developed using React that allows employees to apply for leave and managers to approve or reject leave requests. 

It should also provide a comprehensive view of leave balances, types of leave, and leave history for both employees and administrators.

## Features

- **User Authentication**: Secure login for employees and administrators.
- **Leave Application**: Employees can apply for different types of leave.
- **Leave Approval**: Managers can approve or reject leave requests.
- **Leave Balance**: Employees can view their leave balance.
- **Leave History**: Track leave history for individual employees.
- **Responsive Design**: Accessible on both desktop and mobile devices.

-**HR Functionalities** Leave Configurations, People Excellence(Staff, renamed to user preference), leave calender, company charts.

UI/UX, Light mode, dark mode, responsive topbar and sidebar across various screens

## Technologies Used

- **Frontend**: React
- **Styling**: CSS, Material UI

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/kevinMudenge/leave-management-system.git
cd leave-management-system
```


2. **Install Dependencies**
```bash
npm install

```
3. **Run the application**
```bash
npm start
```
The application will be available at http://localhost:3000.

## Project Structure

```plaintext

leave-management-system/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── background.png
│   │   └── logo.svg
│   ├── components/
│   │   ├── global/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Topbar.jsx
│   │   │   └── Copyright.jsx
│   │   ├── sections/
│   │   │   └── StatBox.jsx
│   │   └── dashboardlayout/
│   │       └── index.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── scenes/
│   │   ├── auth/
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── Login.jsx
│   │   ├── companystaff/
│   │   │   └── index.jsx
│   │   ├── dashboard/
│   │   │   └── index.jsx
│   │   ├── leaveapplication/
│   │   │   └── index.jsx
│   │   ├── leaveconfiguration/
│   │   │   └── index.jsx
│   │   ├── leavepolicy/
│   │   │   └── index.jsx
│   │   ├── leavetracker/
│   │   │   └── index.jsx
│   │   └── reports/
│   │       ├── bar/
│   │       ├── calendar/
│   │       ├── line/
│   │       └── pie/
│   │           └── index.jsx
│   ├── App.js
│   ├── index.js
│   ├── routes.js
│   ├── serviceWorker.js
│   └── theme.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```
## Contributing

We welcome contributions to improve the Leave Management System. It was discontinued for whatever reasons.
Please follow these steps to contribute:

    Fork the repository.
    Create a new branch.
    Make your changes and commit them.
    Push to your fork and submit a pull request.

## Contact

If you have any questions or feedback, please reach out to us at:

[![Gmail](https://img.shields.io/badge/kevnMudenge-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mudengekevn254@gmail.com) [![Gmail](https://img.shields.io/badge/BrianMunene-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:brianmunene11@gmail.com)

## Change Log

auth

    Fixed sidebar, statbox, did some stuff, overall looks good
    Sep 1, 2023

    included email validation to prevent invalid emails from reaching the back-end
    June 6

companystaff

    Added responsiveness and maintained consistency
    Sep 3, 2023

dashboard

    Set groundwork for the development of leave configuration and fixed some issues
    Sep 4, 2023

leaveapplication

    Added responsiveness and maintained consistency
    Sep 3, 2023

leaveconfiguration

    Set groundwork for the development of leave configuration and fixed some issues
    Sep 4, 2023

leavepolicy

    Set groundwork for the development of leave configuration and fixed some issues
    Sep 4, 2023

leavetracker

    Added responsiveness and maintained consistency
    Sep 3, 2023

reports

    Initial setup and configuration
    Sep 4, 2023


