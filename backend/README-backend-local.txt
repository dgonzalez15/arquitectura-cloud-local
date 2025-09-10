# Backend Node.js + Express + TypeScript (Despliegue local y Docker)

## 1. Instalar dependencias
```sh
npm install
```

## 2. Levantar en modo desarrollo
```sh
npm run dev
```

## 3. Compilar a JavaScript
```sh
npm run build
```

## 4. Ejecutar build compilado
```sh
npm start
```

## 5. Construir imagen Docker
```sh
docker build -t backend-ecommerce:latest .
```

## 6. Probar localmente la imagen Docker
```sh
docker run -p 4000:4000 backend-ecommerce:latest
```

## 7. Endpoints demo
- GET http://localhost:4000/api/health
- GET http://localhost:4000/api/products

---

**Listo para integración con Kubernetes y frontend.**
