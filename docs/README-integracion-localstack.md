# Guía de Integración Local: Microservicios, LocalStack, Terraform y Nginx

## Estructura del entorno
- **backend/**: API Node.js/Express/TypeScript
- **frontend/**: Next.js/React/TypeScript
- **infra/terraform/**: Infraestructura como código (S3, Lambda, IAM) para LocalStack
- **localstack/**: Configuración de LocalStack
- **nginx/**: Proxy reverso para dominio local
- **docker-compose.yml**: Orquestación de todos los servicios
- **docs/**: Documentación del proyecto

## Flujo de trabajo local

### 1. Levantar la infraestructura simulada
- LocalStack simula AWS (S3, Lambda, IAM) en Docker.
- Terraform crea los recursos en LocalStack.

### 2. Orquestación de servicios
- `docker-compose.yml` levanta:
  - backend (puerto 4000 interno, 3001 externo)
  - frontend (puerto 80 interno, 3000 externo)
  - localstack (puerto 4566)
  - nginx (puerto 80, dominio ecommerce.local)

### 3. Dominio local
- Añade en `/etc/hosts`:
  ```
  127.0.0.1 ecommerce.local
  ```
- Nginx enruta:
  - `/api/` → backend
  - `/` → frontend

### 4. Proceso de integración
1. **Levanta LocalStack y servicios:**
   ```sh
   docker compose up -d
   ```
2. **Aplica Terraform:**
   ```sh
   cd infra/terraform
   terraform init
   terraform apply -auto-approve
   ```
3. **Verifica recursos:**
   ```sh
   awslocal s3 ls
   awslocal lambda list-functions
   ```
4. **Accede a la app:**
   - http://ecommerce.local/
   - http://localhost:3000 (directo al frontend)
   - http://localhost:3001 (directo al backend)

### 5. Troubleshooting
- Si ves error 502 en nginx, revisa:
  - Que frontend esté en el puerto 80 interno
  - Que backend esté en el puerto 4000 interno
  - Que nginx apunte a los puertos correctos en `nginx.conf`
- Si LocalStack no crea recursos, asegúrate de tener los servicios necesarios en la variable `SERVICES`.

### 6. Visualización de recursos
- Usa AWS Toolkit en VS Code o `awslocal` para explorar S3 y Lambda.

---

## Resumen de comandos útiles
- `docker compose up -d` — Levanta todos los servicios
- `docker compose logs <servicio>` — Ver logs
- `terraform apply -auto-approve` — Aplica infraestructura
- `awslocal s3 ls` — Lista buckets S3
- `awslocal lambda list-functions` — Lista Lambdas

---

## Notas
- Todo el entorno es local y simulado, ideal para desarrollo y pruebas sin AWS real.
- Puedes extender la arquitectura agregando más servicios o recursos en Terraform y LocalStack.

---

> Última actualización: 10/09/2025
