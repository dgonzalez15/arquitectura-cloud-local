# Infraestructura simulada en AWS con LocalStack

Este entorno permite levantar y probar microservicios y recursos AWS (ECS, EC2, S3, RDS, Lambda, etc.) de forma local y reproducible usando Terraform y LocalStack.

## Estructura
- `terraform/` - Infraestructura como código modularizada (ECS, EC2, S3, RDS, Lambda)
- `cloudformation/` - Plantillas equivalentes en CloudFormation (puedes agregar ejemplos aquí)
- `scripts/` - Scripts de automatización

## Uso rápido

1. Levanta LocalStack:
   ```sh
   cd localstack
   docker compose up -d
   ```
2. Inicializa y aplica Terraform:
   ```sh
   cd ../infra/terraform
   terraform init
   terraform apply
   ```
3. Verifica recursos:
   ```sh
   awslocal s3 ls
   awslocal ecs list-clusters
   awslocal rds describe-db-instances
   awslocal lambda list-functions
   awslocal ec2 describe-instances
   ```

> Puedes agregar tus plantillas CloudFormation en `cloudformation/` y scripts en `scripts/`.

---

¿Dudas? Consulta la documentación oficial de LocalStack y Terraform AWS Provider.
