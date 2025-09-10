# Guía de integración: Backend, Frontend y LocalStack (AWS simulado)

Esta guía te permite conectar y probar tu arquitectura de microservicios (backend y frontend) con servicios AWS simulados usando LocalStack y Terraform.

---

## 1. Levanta LocalStack

```
cd localstack
# Inicia LocalStack con todos los servicios necesarios
docker compose up -d
```

---

## 2. Crea la infraestructura simulada con Terraform

```
cd ../infra/terraform
terraform init
terraform apply
```
Esto creará S3, RDS, Lambda, ECS, EC2, etc. en LocalStack.

---

## 3. Conecta el backend a los servicios simulados

- **S3:** Usa el endpoint `http://localhost:4566` y credenciales `test`/`test` en tu backend.
- **RDS:** Usa el endpoint que te da Terraform (`terraform output rds_endpoint`).
- **Lambda:** Puedes invocar funciones con AWS SDK apuntando a LocalStack.
- **ECS/EC2:** Puedes registrar tareas/instancias simuladas.

Ejemplo de configuración en Node.js (backend):
```js
const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: 'test',
  secretAccessKey: 'test',
  region: 'us-east-1',
  endpoint: 'http://localhost:4566',
  s3ForcePathStyle: true
});
const s3 = new AWS.S3();
```

---

## 4. Levanta backend y frontend (Docker o local)

```
# Backend
cd ../../backend
npm install
npm run build
# O con Docker
# docker build -t backend-ecommerce:latest .
# docker run --env-file .env.local backend-ecommerce:latest

# Frontend
cd ../frontend
npm install
npm run build
npm start
# O con Docker
# docker build -t frontend-ecommerce:latest .
# docker run --env-file .env.local frontend-ecommerce:latest
```

---

## 5. Prueba la integración

- Accede a tu frontend (por ejemplo, http://localhost:3000 o http://ecommerce.local si usas Ingress/k8s).
- Realiza operaciones que usen S3, RDS, Lambda, etc. y verifica que funcionan (puedes ver logs en LocalStack).
- Usa `awslocal` para listar recursos:
  ```
  docker exec -it localstack awslocal s3 ls
  docker exec -it localstack awslocal rds describe-db-instances
  docker exec -it localstack awslocal lambda list-functions
  ```

---

## 6. Limpieza

```
cd localstack
docker compose down
cd ../infra/terraform
terraform destroy
```


