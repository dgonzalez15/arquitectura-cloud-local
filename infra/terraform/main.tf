provider "aws" {
  alias                      = "s3"
  access_key                 = "test"
  secret_key                 = "test"
  region                     = "us-east-1"
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
  endpoints {
    s3 = "http://localhost:4566"
  }
  s3_use_path_style = true
}
# Ejemplo de provider y recursos base para LocalStack
provider "aws" {
  access_key                  = "test"
  secret_key                  = "test"
  region                      = "us-east-1"
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
  endpoints {
    s3             = "http://localhost:4566"
    sqs            = "http://localhost:4566"
    dynamodb       = "http://localhost:4566"
    lambda         = "http://localhost:4566"
    apigateway     = "http://localhost:4566"
    cloudwatch     = "http://localhost:4566"
    logs           = "http://localhost:4566"
    sts            = "http://localhost:4566"
    iam            = "http://localhost:4566"
    rds            = "http://localhost:4566"
    cloudformation = "http://localhost:4566"
    ecs            = "http://localhost:4566"
    ec2            = "http://localhost:4566"
  }
}

module "s3" {
  source = "./modules/s3"
  providers = {
    aws = aws.s3
  }
}


## module "rds" {
##   source = "./modules/rds"
## }


## module "lambda" {
##   source = "./modules/lambda"
## }


## module "ecs" {
##   source = "./modules/ecs"
## }


## module "ec2" {
##   source = "./modules/ec2"
## }
