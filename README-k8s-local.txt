# Comandos útiles para despliegue y limpieza en Kubernetes y Docker

## Despliegue

1. Construir imágenes locales:

```
# Frontend
cd practicas-ecommerce/arquitectura-cloud-local/frontend
rm -rf .next
DOCKER_BUILDKIT=1 docker build -t frontend-ecommerce:latest .

# Backend
cd ../backend
DOCKER_BUILDKIT=1 docker build -t backend-ecommerce:latest .
```

2. Aplicar manifiestos en Kubernetes:

```
# Namespace (si no existe)
kubectl create namespace public-subnet-2 || true

# Backend y frontend
kubectl apply -f ../backend/deployment.yaml -n public-subnet-2
kubectl apply -f ../frontend/deployment.yaml -n public-subnet-2

# Ingress
kubectl apply -f ingress.yaml -n public-subnet-2
```

3. Verificar recursos:

```
kubectl get pods -n public-subnet-2
kubectl get svc -n public-subnet-2
kubectl get ingress -n public-subnet-2
```

4. Probar acceso:

- Añade en `/etc/hosts`:
  ```
  127.0.0.1 ecommerce.local
  ```
- Accede a http://ecommerce.local/ y http://ecommerce.local/api/products

---

## Comandos para borrar y limpiar todo

### Kubernetes

```
# Eliminar todos los recursos del namespace
kubectl delete all --all -n public-subnet-2
# Eliminar el Ingress
kubectl delete ingress ecommerce-ingress -n public-subnet-2
# (Opcional) Eliminar el namespace
kubectl delete namespace public-subnet-2
```

### Docker

```
# Parar y eliminar todos los contenedores
docker ps -aq | xargs docker stop | xargs docker rm
# Eliminar imágenes locales del proyecto
# (Ajusta los nombres según corresponda)
docker rmi frontend-ecommerce:latest backend-ecommerce:latest
```


