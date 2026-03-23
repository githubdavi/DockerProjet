## Lancement de l'application

### En développement avec Docker Compose

- Exécutez la commande `docker-compose up -d` à la racine du projet lorsque vous l'avez clôné

### En production avec Docker compose

- Exécutez la commande `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d` à la racine du projet lorsque vous l'avez clôné

### Tests:

- Exécutez la commande `docker build -t tests -f Dockerfile-tests .` en premier lieu
- Exécutez la commande `docker run --rm --name tests -p 5050:5050 tests` en second lieu

### Trivy:

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
`docker compose -f docker-compose.trivy.yml up --abort-on-container-exit`

### Logs:

Afin d'avoir les logs de tous les services il faut lancer la commande, le rapport est sauvegarder dans le dossier logs:
`bash ./scripts/get-log.sh`
