Trivy:

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
