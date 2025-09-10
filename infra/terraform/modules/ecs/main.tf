# Módulo ECS para LocalStack (simulación básica)
resource "aws_ecs_cluster" "main" {
  name = "ecommerce-cluster"
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.main.name
}
