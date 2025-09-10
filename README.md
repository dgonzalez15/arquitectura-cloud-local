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

![Arquitectura Local](https://sdmntprukwest.oaiusercontent.com/files/00000000-9bbc-6243-b1e1-026e1bb8c8d0/raw?se=2025-09-10T20%3A57%3A31Z&sp=r&sv=2024-08-04&sr=b&scid=a926e2d9-9371-5f1a-bf5b-22157aa039a5&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-10T17%3A49%3A01Z&ske=2025-09-11T17%3A49%3A01Z&sks=b&skv=2024-08-04&sig=CcuzxXEzyv0SUfvhlFPAPQPLYbqQj7zjfvmPAu/ZqJ4%3D
)

La imagen muestra la integración de frontend, backend, nginx, LocalStack y Terraform en el entorno local, siguiendo el flujo explicado en la documentación.

## Siguiente paso
- Se irán agregando los manifiestos, scripts y documentación en cada carpeta.
- Consulta el README de cada subcarpeta para detalles específicos.
