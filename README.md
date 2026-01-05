# [LeadFlow](https://app.leadflow.buzz) - CRM for Freelancers

https://github.com/user-attachments/assets/b2db95df-9e15-45f8-93fd-a1dd8bcb2121

## 📖 Description

A custom CRM platform designed specifically for freelancers to organize leads, track their progress, and make data-driven decisions through comprehensive analytics with the assistance of AI.

## 📊 Features

- AI-powered Insights & Messages
- Sort & Filter Leads
- Export to CSV
- Visualize Data with Charts

## 🛠 Tech Stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## 🔥 Getting Started

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
VITE_GUEST_ID=your_guest_id
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
DB_STRING=your_database_string

# Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=your_google_callback_url
CURRENT_MODEL = gemini-2.5-flash

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
GUEST_ID=your_guest_id

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

### 🚀 CI/CD Setup

The project includes a CI/CD pipeline using GitHub Actions to automate deployment.

1. Navigate to your repository on GitHub.

2. Go to Settings > Secrets and variables > Actions.

3. Click New repository secret and add the following secrets:

```
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
VERCEL_TOKEN=your_vercel_token
```

Once added, GitHub Actions will use these secrets to deploy the project automatically.

## More

Explore more of my recent projects on my [Portfolio](https://faliloukhouma.com).
