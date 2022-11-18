///////////////////////////////////////////////////////////////////////////
# Need to get the credential from AWS SSM
///////////////////////////////////////////////////////////////////////////

variable "github_token" {
  description = "Github personal access token"
}

variable "docker_username" {
  description = "Docker Username"
}

variable "docker_password" {
  description = "Docker Password"
}

variable "basic_auth_username" {
  description = "Basic auth username"
}

variable "basic_auth_password" {
  description = "Basic auth password"
}
variable "rollbar_token" {
  description = "Basic auth username"
}

variable "secret_cookie_password" {
  description = "Basic auth password"
}

///////////////////////////////////////////////////////////////////////////
# Please update default values if needed
///////////////////////////////////////////////////////////////////////////

variable "name" {
  description = "Name to be used on all the resources as identifier"
  default     = "project_one"
}

variable "env" {
  description = "Environment that is used as placeholder"
  default     = "development"
}

variable "azs" {
  description = "A list of availability zones in the region"
  default     = ["ap-northeast-1a", "ap-northeast-1c", "ap-northeast-1d"]
}

# IP architecture
# https://www.notion.so/iruuzainc/IP-architecture-85d035693086447c88fcf286f682d21b


variable "lb_healthcheck_path" {
  description = "Path of loadbalancer's health check"
  default     = "/api/health"
}

variable "github_account" {
  description = "Github account name of access token"
  default     = "Jitera"
}

variable "github_repository" {
  description = "Github repository to get source"
  default     = ""
}

variable "github_branch" {
  description = "Git branch to get source"
  default     = "staging"
}

variable "zone_id" {
  description = "Zone ID"
  default     = "Z04107792MSQNTH3X9AUZ"
}

variable "domain" {
  description = "Domain"
  default     = "project-one-development.project.jitera.app"
}

variable "slack_channel_id" {
  description = "Slack Channel identifier"
  default     = "C01FG7MNH8C"
}

variable "slack_workspace_id" {
  description = "Slack Workspace identifier"
  default     = "T68H309JS"
}

variable "aws_account_id" {
  description = "AWS Account ID"
  default     = "677804650362"
}

variable "next_public_basic_auth_required" {
  description = "Public basic auth required"
  default     = "true"
}

variable "ssl_cert_arn" {
  description = "ARN of ssl certs"
  default     = ""
}

#Input it manually if RoR is deployed 
#Only use this one when both FE & BE use the same slack channel
variable "sns_target_arn" {
  description = "Amazon SNS topic"
  default     = ""
}