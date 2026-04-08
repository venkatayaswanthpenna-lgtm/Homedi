<<<<<<< HEAD
# Homedi
=======
# 🏥 HOMEDI — Smart Healthcare Ecosystem

HOMEDI is a centralized healthcare platform designed for high scalability, medical-grade security, and modular enterprise architecture. It connects patients, hospitals, doctors, and emergency services into a unified ecosystem.

## 🏗️ System Architecture

HOMEDI follows a **Micro-service oriented Monorepo** architecture managed by [Turborepo](https://turbo.build/).

- **Frontend Layer**:
  - `apps/web`: Next.js (SSR + SEO Optimized) for desktop and PWA access.
  - `apps/mobile`: React Native + Expo for cross-platform iOS and Android support.
- **Backend Layer**:
  - `apps/api`: NestJS API Gateway and core services managing PostgreSQL (Relational) and MongoDB (Unstructured) data.
- **Data Layer**:
  - **Relational**: PostgreSQL (Prisma ORM) for Users, Appointments, Hospital hierarchies.
  - **Document**: MongoDB (Mongoose) for Medical Records and Document extraction results.
  - **Cache**: Redis for session management and real-time coordination.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- Docker & Docker Compose
- Expo CLI (for mobile)

### Local Environment Setup

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd homedi
   ```

2. **Spin up Infrastructure**:
   ```bash
   docker-compose up -d
   ```
   This starts PostgreSQL, MongoDB, and Redis.

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Initialize Databases**:
   Inside `apps/api`:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run Development Server**:
   ```bash
   npm run dev
   ```
   - Web App: `http://localhost:3000`
   - API: `http://localhost:4000/api/v1`
   - Mobile: Open via Expo Go.

## 🔐 Security Architecture

HOMEDI implements medical-grade security standards:
- **E2E Encryption**: Data transit via TLS 1.3.
- **Data at Rest**: AES-256 encryption logic scaffolded for medical records.
- **Auth**: Multi-Factor Authentication (MFA) ready, JWT with secure token rotation.
- **Access Control**: Strict Role-Based Access Control (RBAC) enforced via NestJS Guards.

## 📦 Project Structure

```text
homedi/
├── apps/
│   ├── api/            # NestJS Backend API
│   ├── web/            # Next.js Web Application
│   └── mobile/         # React Native Expo Mobile App
├── docker-compose.yml  # Local Infrastructure
├── package.json        # Workspace configuration
└── turbo.json          # Turborepo build pipeline
```

## 🛠️ Technology Stack

- **Backend**: NestJS, Prisma, Mongoose, Socket.io, Class-validator.
- **Web**: Next.js 14, Tailwind CSS, Zustand, Lucide React.
- **Mobile**: React Native, Expo, React Navigation, Native Base concepts.
- **DevOps**: Docker, Turborepo, GitHub Actions (scaffolded).

---

Designed and developed by **Antigravity** — Elite AI Architecture Team.
>>>>>>> 58947d7 (feat: Initial Homedi Healthcare Platform)
