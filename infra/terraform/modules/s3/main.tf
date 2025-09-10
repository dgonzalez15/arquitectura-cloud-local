# Permitir el uso de un provider aws con alias desde el módulo principal
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}
# Módulo S3 para LocalStack
resource "aws_s3_bucket" "bucket" {
  bucket = "ecommerce-bucket"
  force_destroy = true
}

output "bucket_name" {
  value = aws_s3_bucket.bucket.id
}
