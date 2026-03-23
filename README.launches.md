## Lancement de l'application

### Tests

- L'exécution des tests est possible en créant un container qui exécutera tous les tests de l'application avec la commande:

`docker build -t tests -f Dockerfile-tests . && docker run --name --rm tests -p 5050:5050 tests && docker image rm tests`

### En développement avec Docker Compose

- Exécutez la commande `docker-compose up -d` à la racine du projet lorsque vous l'avez clôné.

Vous pouvez accéder à l'application à l'adresse `http://localhost:8080`

### En production avec Docker compose

- Exécutez la commande `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d` à la racine du projet lorsque vous l'avez clôné.

Vous pouvez accéder à l'application à l'adresse `http://localhost:8080`

### En production avec Docker Swarm
