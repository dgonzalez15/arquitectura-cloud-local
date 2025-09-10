# Arquitectura Cloud Local - E-commerce

Este directorio contiene la base para simular una arquitectura cloud moderna localmente, inspirada en AWS, usando Kubernetes, LocalStack, Docker y Terraform.

## Estructura inicial

```
arquitectura-cloud-local/
├── k8s/                # Manifiestos Kubernetes (backend, frontend, supabase, ingress)
├── localstack/         # Configuración y scripts para LocalStack
├── terraform/          # Infraestructura como código (para LocalStack y recursos simulados)
├── ci-cd/              # Ejemplos de pipelines (GitHub Actions)
├── docs/               # Diagramas y documentación visual
└── README.md           # Guía de onboarding y arquitectura
```

## Arquitectura general

![Arquitectura Local](./docs/arquitectura_local.png)

La imagen muestra la integración de frontend, backend, nginx, LocalStack y Terraform en el entorno local, siguiendo el flujo explicado en la documentación.

## Siguiente paso
- Se irán agregando los manifiestos, scripts y documentación en cada carpeta.
- Consulta el README de cada subcarpeta para detalles específicos.
