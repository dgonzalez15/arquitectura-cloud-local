# Módulo EC2 para LocalStack (simulación básica)
resource "aws_instance" "ecommerce" {
  ami           = "ami-12345678" # Dummy AMI para LocalStack
  instance_type = "t3.micro"
}

output "ec2_id" {
  value = aws_instance.ecommerce.id
}
