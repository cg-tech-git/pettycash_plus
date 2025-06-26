# PettyCash Plus Architecture

## System Overview

PettyCash Plus is built on a serverless, microservices architecture leveraging Google Cloud Platform and Firebase services.

## Core Components

### 1. Mobile Application (Flutter)
- Cross-platform mobile app for iOS and Android
- Offline-first architecture with sync capabilities
- Camera integration for receipt capture

### 2. Web Application (React)
- Admin dashboard for finance teams
- Manager approval interface
- Responsive design for tablet/desktop

### 3. Backend Services (Firebase)
- Cloud Functions for business logic
- Firestore for data persistence
- Firebase Auth for authentication
- Cloud Storage for receipt images

### 4. AI/ML Services
- Google Cloud Vision AI for OCR
- Gemini API for intelligent categorization and chat

## Data Flow

1. User captures receipt → Vision AI OCR → Gemini categorization
2. Claim submission → Firestore → Cloud Function triggers
3. Approval workflow → Push notifications → Status updates
4. Finance processing → Export ready data → ETL to ERP

## Security Model

- Multi-tenant isolation at database level
- Role-based access control (RBAC)
- End-to-end encryption
- Secure API endpoints with authentication 