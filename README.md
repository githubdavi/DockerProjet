# 🛒 Documentation – Projet E-Commerce Microservices

## 📌 Introduction

Ce projet est une application e-commerce complète basée sur une **architecture microservices** avec :

- 🎨 Frontend : Vue.js
- ⚙️ Backend : 3 microservices Node.js
- 🗄️ Base de données : MongoDB (une par service)
- 🐳 Conteneurisation : Docker & Docker Compose
- 🚀 CI/CD : GitHub Actions

👉 Objectif : modularité, scalabilité et déploiement simple

---

## 🏗️ Architecture globale

```
Frontend (Vue.js)
       ↓
---------------------------
| Auth Service (JWT)     |
| Product Service        |
| Order Service          |
---------------------------
       ↓
MongoDB (1 DB / service)
```

---

## 📁 Structure du projet

La structure principale (minimaliste)

```
.
├── frontend/
├── services/
│   ├── auth-service/
│   ├── product-service/
│   └── order-service/
├── scripts/
├── docker-compose.yml
├── docker-compose.prod.yml
```

---

## ⚙️ Stack technique

### Frontend

- Vue.js
- Vue Router
- Axios
- Vite
- Vitest

### Backend

- Node.js + Express
- MongoDB + Mongoose
- JWT (auth)
- Jest (tests)

---

# 🚀 Lancement & Exploitation (IMPORTANT 🔥)

## 🧪 Environnement de développement

```bash
docker-compose up -d
```

---

## 🏭 Environnement de production

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

---

## 🧪 Exécution des tests (Docker)

### 1. Build de l’image de test

```bash
docker build -t tests -f Dockerfile-tests .
```

### 2. Lancer les tests

```bash
docker run --rm --name tests -p 5050:5050 tests
```

---

## 🔍 Scan de sécurité avec Trivy

Dans cette nous utilison trivy afin de scanner les images docker et de detecter les vulnerabilites.

Nous avons scanne les images suivantes:

- mongo
- auth-service
- product-service
- order-service

Pour chaque scan on relève toutes les vulnérabilités à partir du niveau HIGH.
Les rapports sont generes dans le dossier trivy-reports.

Pour lancer le scan de trivy il faut d'abord avoir construit les images docker (docker-compose up -d --build).

Puis lancer le scan avec:
docker compose -f docker-compose.trivy.yml up --abort-on-container-exit

📁 Résultats :

```
trivy-reports/
```

---

## 📜 Logs centralisés

### Logs:

Afin d'avoir les logs de tous les services il faut lancer la commande, le rapport est sauvegarder dans le dossier logs:
bash ./scripts/get-log.sh

## Adresses de connexion:

👉 En local : `http://localhost:8080`

👉 En production : `http://localhost:8000`

# 🧪 Tests

- Exécutez la commande `docker build -t tests -f Dockerfile-tests .` en premier lieu
- Exécutez la commande `docker run --name tests -p 5050:5050 tests` en second lieu
