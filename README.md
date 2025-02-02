# [LeadFlow](https://lead-flow.netlify.app) - CRM for Freelancers

![Preview](/preview.mp4)

## 📖 Description

A custom CRM platform designed specifically for freelancers to organize leads, track their progress, and make data-driven decisions through comprehensive analytics with the assistance of AI.

## 📊 Features

- AI-powered Insights & Messages
- Sort & Filter Leads
- Export to CSV
- Visualize Data with Charts

## 🛠 Tech Stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

## 🚀 Getting Started

### 📦 Installation

```
git clone git@github.com:227Faddi/leadflow.git
```

- Client

```
cd client
```

```
npm install
```

- Server

```
cd server
```

```
npm install
```

### ⚙️ Environment Variables

- Client

Create a .env file in the root directory of your project and fill in the following values:

```
VITE_SERVER_URL=your_server_url
VITE_GUEST_EMAIL=your_guest_email
VITE_GUEST_PASSWORD=your_guest_password
```

- Server

Gemini: https://ai.google.dev/gemini-api/docs/api-key  
Google: https://console.cloud.google.com  
Github: https://github.com/settings/developers  
Cloudinary: https://cloudinary.com  
DiceBear: https://www.dicebear.com

Create a .env file in the root directory and fill in the following values:

```
# Server Configuration
SERVER_PORT=your_server_port
CLIENT_URL=your_client_url
NODE_ENV=your_node_environment

# Database Configuration
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_PORT=your_database_port

# Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=your_google_callback_url

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_CALLBACK_URL=your_github_callback_url

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Avatar Service
AVATAR_DICEBEAR_URL=your_avatar_dicebear_url

# Guest Profile
GUEST_PROFILE_ID=your_guest_profile_id

# JWT Authentication
JWT_ACCESS_TOKEN_SECRET=your_access_token_secret
JWT_REFRESH_TOKEN_SECRET=your_refresh_token_secret
JWT_ACCESS_TOKEN_EXPIRATION=your_access_token_expiration
JWT_REFRESH_TOKEN_EXPIRATION=your_refresh_token_expiration
JWT_REFRESH_TOKEN_MAX_AGE=your_refresh_token_max_age
```

### ▶️ Running the Project

- Client

```
cd client
```

```
npm run dev
```

- Server

```
cd server
```

```
npm run dev
```

## More

Explore more of my recent projects on my [Portfolio](https://faliloukhouma.com).
