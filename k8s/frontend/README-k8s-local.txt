# Guía rápida: Despliegue local de Frontend en Kubernetes (Docker Desktop)

## 1. Construir la imagen Docker local
```sh
docker build -t frontend-ecommerce:latest .
```

## 2. (Opcional) Verifica que la imagen existe
```sh
docker images | grep frontend-ecommerce
```

## 3. Crea el namespace (solo la primera vez)
```sh
kubectl create namespace public-subnet-2
```

## 4. Crea el ConfigMap (si no existe)
```sh
kubectl create configmap frontend-config -n public-subnet-2
```

## 5. Aplica el deployment y el servicio
```sh
kubectl apply -f deployment.yaml
```

## 6. Verifica pods y servicios
```sh
kubectl get pods -n public-subnet-2
kubectl get svc -n public-subnet-2
```

## 7. Expón el frontend localmente
```sh
kubectl port-forward svc/frontend 8080:80 -n public-subnet-2
```

Abre tu navegador en: http://localhost:8080

---

**Notas:**
- Si cambias el código, vuelve a construir la imagen y reaplica el deployment.
- Si tienes problemas con la imagen, asegúrate de usar `imagePullPolicy: Never` en el deployment.
- Para limpiar todo:
```sh
kubectl delete -f deployment.yaml
kubectl delete configmap frontend-config -n public-subnet-2
kubectl delete namespace public-subnet-2
```
