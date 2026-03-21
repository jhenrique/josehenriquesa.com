# Deploy no AWS S3 — josehenriquesa.com

## Pré-requisitos
- Conta AWS ativa
- AWS CLI instalado e configurado (`aws configure`)
- Domínio `josehenriquesa.com` registrado (Route 53 ou outro registrador)

---

## Passo 1 — Criar o bucket S3

```bash
# Criar bucket com o nome exato do domínio
aws s3 mb s3://josehenriquesa.com --region us-east-1

# Habilitar hospedagem de site estático
aws s3 website s3://josehenriquesa.com \
  --index-document index.html \
  --error-document index.html
```

## Passo 2 — Configurar política pública do bucket

Crie o arquivo `bucket-policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::josehenriquesa.com/*"
    }
  ]
}
```

Aplique a política:
```bash
# Desabilitar bloqueio público primeiro
aws s3api put-public-access-block \
  --bucket josehenriquesa.com \
  --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# Aplicar política
aws s3api put-bucket-policy \
  --bucket josehenriquesa.com \
  --policy file://bucket-policy.json
```

## Passo 3 — Fazer upload do site

```bash
# Upload do index.html
aws s3 cp index.html s3://josehenriquesa.com/ \
  --content-type "text/html" \
  --cache-control "max-age=3600"

# Se tiver mais arquivos (imagens, etc):
aws s3 sync . s3://josehenriquesa.com/ \
  --exclude "*.json" \
  --exclude "DEPLOY.md" \
  --cache-control "max-age=86400"
```

## Passo 4 — Configurar CloudFront (HTTPS + CDN)

```bash
# Criar distribuição CloudFront (via console AWS é mais fácil)
# Settings recomendadas:
# - Origin: josehenriquesa.com.s3-website-us-east-1.amazonaws.com
# - Viewer Protocol Policy: Redirect HTTP to HTTPS
# - Cache Policy: CachingOptimized
# - Alternate domain: josehenriquesa.com e www.josehenriquesa.com
```

## Passo 5 — Certificado SSL (ACM)

```bash
# Solicitar certificado gratuito via AWS Certificate Manager
# IMPORTANTE: deve ser na região us-east-1 para usar com CloudFront
aws acm request-certificate \
  --domain-name josehenriquesa.com \
  --subject-alternative-names "*.josehenriquesa.com" \
  --validation-method DNS \
  --region us-east-1
```

## Passo 6 — Configurar DNS (Route 53)

```bash
# Se o domínio estiver no Route 53:
# 1. Crie um Hosted Zone para josehenriquesa.com
# 2. Adicione registro A (Alias) apontando para a distribuição CloudFront
# 3. Adicione registro CNAME www → josehenriquesa.com
```

---

## Deploy rápido (atualizar site)

```bash
aws s3 cp index.html s3://josehenriquesa.com/ \
  --content-type "text/html" \
  --cache-control "no-cache"

# Invalidar cache do CloudFront (substitua DISTRIBUTION_ID)
aws cloudfront create-invalidation \
  --distribution-id DISTRIBUTION_ID \
  --paths "/*"
```

---

## Estimativa de custo mensal

| Serviço | Custo estimado |
|---------|---------------|
| S3 (armazenamento + requests) | ~$0.01 – $0.10 |
| CloudFront (CDN + HTTPS) | ~$0 – $1.00 (free tier generoso) |
| Route 53 (DNS) | ~$0.50 / hosted zone |
| ACM (certificado SSL) | **Gratuito** |
| **Total** | **~$0.50 – $2.00/mês** |

---

## Estrutura final esperada no S3

```
s3://josehenriquesa.com/
└── index.html          ← site completo (single page)
```
