# Módulo RDS para LocalStack (simulación básica)
resource "aws_db_instance" "default" {
  allocated_storage    = 10
  engine              = "postgres"
  engine_version      = "15.3"
  instance_class      = "db.t3.micro"
  username            = "test"
  password            = "test1234"
  db_name             = "ecommerce"
  skip_final_snapshot = true
  publicly_accessible = true
}

output "rds_endpoint" {
  value = aws_db_instance.default.endpoint
}
