#!/bin/bash

SERVICES=("mongodb" "auth-service" "product-service" "order-service" "init-products")

mkdir -p ./logs

for service in "${SERVICES[@]}"; do
    echo "Récupération des logs de $service..."
    docker logs $service > "./logs/$service.log" 2>&1
done

echo "Logs sauvegardés dans ./logs/"