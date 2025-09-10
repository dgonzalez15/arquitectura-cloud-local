# Manifiestos Kubernetes - Arquitectura Cloud Local

Esta carpeta contendrá los manifiestos YAML para desplegar los principales componentes de la arquitectura simulada:

- **backend** (Node.js/Express)
- **frontend** (SPA React)
- **supabase** (servicio de base de datos y autenticación)
- **nginx-ingress** (simula ALB)
- **namespaces** (simulan subnets públicas)

## Estructura sugerida

```
k8s/
├── namespaces/
│   ├── public-subnet-1.yaml
│   └── public-subnet-2.yaml
├── backend/
│   ├── deployment.yaml
│   └── service.yaml
├── frontend/
│   ├── deployment.yaml
│   └── service.yaml
├── supabase/
│   ├── deployment.yaml
│   └── service.yaml
├── ingress/
│   └── ingress.yaml
└── README.md
```

Cada subcarpeta contendrá los manifiestos para su componente. Puedes personalizar los recursos, réplicas y variables según tu entorno.


