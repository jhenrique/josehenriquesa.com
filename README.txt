================================================================================
  JOSEHENRIQUESA.COM — Site Pessoal & Portfolio Profissional
  Jose Henrique Santos Andrade | Desenvolvedor Java Sênior
  Versão 1.0 | Março 2026
================================================================================

--------------------------------------------------------------------------------
  FINALIDADE DO PROJETO
--------------------------------------------------------------------------------

Este projeto é o site pessoal e portfolio profissional de Jose Henrique Santos
Andrade, Analista de Sistemas e Desenvolvedor Java Sênior com mais de 14 anos
de experiência no mercado de tecnologia.

O site tem como objetivo principal apresentar o perfil profissional de forma
moderna e impactante, servindo como cartão de visitas digital para recrutadores,
parceiros técnicos e potenciais clientes. Ele reúne em um único lugar:

  - Apresentação pessoal e resumo profissional
  - Histórico completo de experiência profissional (2010 – presente)
  - Stack técnica com níveis de proficiência
  - Portfólio de projetos em destaque
  - Blog com artigos e conteúdo técnico
  - Formulário de contato com envio de email
  - Página de erro personalizada (404)

O site é totalmente estático — sem backend, sem banco de dados — o que garante
performance máxima, custo mínimo de hospedagem e segurança por design.


--------------------------------------------------------------------------------
  PÁGINAS DO PROJETO
--------------------------------------------------------------------------------

  index.html     → Página principal (home / portfolio)
  contato.html   → Formulário de contato com validação e envio de email
  404.html       → Página de erro com seção de contato integrada

  css/style.css  → Design system completo (tema dark, tipografia, animações)
  js/main.js     → Interações: cursor, scroll reveal, animações, formulário
  images/        → Foto de perfil e assets visuais


--------------------------------------------------------------------------------
  TECNOLOGIAS UTILIZADAS
--------------------------------------------------------------------------------

  FRONTEND
  ─────────────────────────────────────────────────────────────────────────────
  HTML5           Estrutura semântica completa com ARIA para acessibilidade
  CSS3            Variáveis CSS, Grid, Flexbox, animações e keyframes
  JavaScript      Vanilla JS (ES6+), sem frameworks ou dependências externas
  Google Fonts    Famílias: Bebas Neue (display), DM Sans (corpo),
                  Space Mono (código/labels)
  SVG             Todos os ícones são SVG inline — sem dependência de biblioteca

  DESIGN
  ─────────────────────────────────────────────────────────────────────────────
  Tema             Dark, bold e assimétrico — inspirado no estilo Starlink/Jacob
  Cor de acento    Laranja #FF5C00 como cor primária de destaque
  Tipografia       Bebas Neue para títulos gigantes, DM Sans para corpo de texto
  Animações        Scroll reveal, counter animation, floating badges,
                   skill bars animadas, parallax no hero, tilt 3D em cards
  Responsividade   Mobile-first, breakpoints em 480px, 768px, 900px e 1050px
  Acessibilidade   ARIA labels, roles semânticos, focus visível, skip links

  FORMULÁRIO DE CONTATO
  ─────────────────────────────────────────────────────────────────────────────
  Formspree        Serviço de envio de formulários estáticos (formspree.io)
                   Recebe os dados do form e encaminha para o email configurado
                   Plano gratuito: 50 envios/mês | Plano pago para volume maior
                   Configuração: substituir YOUR_FORM_ID em contato.html e 404.html

  Fallback mailto  Caso Formspree não esteja configurado, o formulário abre
                   automaticamente o cliente de email do usuário com os campos
                   pré-preenchidos no formato mailto:

  Validações       Nome obrigatório, email com regex, assunto obrigatório,
                   mensagem mínima de 20 caracteres, feedback em tempo real,
                   barra de progresso do preenchimento


--------------------------------------------------------------------------------
  INFRAESTRUTURA AWS
--------------------------------------------------------------------------------

  O site é hospedado 100% na nuvem AWS, utilizando três serviços principais
  que trabalham juntos para entregar performance, disponibilidade e HTTPS.


  1. AWS S3 (Simple Storage Service)
  ─────────────────────────────────────────────────────────────────────────────
  Função          Armazenamento e hospedagem dos arquivos estáticos do site

  Como funciona   O S3 armazena todos os arquivos (HTML, CSS, JS, imagens) em
                  um bucket configurado como website estático. Qualquer arquivo
                  salvo no bucket fica acessível via URL pública.

  Configurações   - Bucket name: josehenriquesa.com
                  - Região: us-east-1 (N. Virginia) — obrigatório para uso
                    com domínio customizado via CloudFront + ACM
                  - Hospedagem estática habilitada
                  - Index document: index.html
                  - Error document: 404.html
                  - Block Public Access: desabilitado para acesso público
                  - Bucket Policy: permite s3:GetObject para todos (*)

  Comandos S3
  ···············································
  # Criar o bucket
  aws s3 mb s3://josehenriquesa.com --region us-east-1

  # Habilitar hospedagem estática
  aws s3 website s3://josehenriquesa.com \
    --index-document index.html \
    --error-document 404.html

  # Aplicar política pública (salvar como bucket-policy.json antes)
  aws s3api put-bucket-policy \
    --bucket josehenriquesa.com \
    --policy file://bucket-policy.json

  # Desabilitar bloqueio de acesso público
  aws s3api put-public-access-block \
    --bucket josehenriquesa.com \
    --public-access-block-configuration \
    "BlockPublicAcls=false,IgnorePublicAcls=false,\
    BlockPublicPolicy=false,RestrictPublicBuckets=false"

  # Upload inicial de todos os arquivos
  aws s3 sync . s3://josehenriquesa.com \
    --exclude "*.txt" \
    --exclude ".git/*" \
    --exclude "*.md" \
    --delete

  # Upload do index.html sem cache (sempre atualizado)
  aws s3 cp index.html s3://josehenriquesa.com/index.html \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/html; charset=utf-8"
  ···············································

  Bucket Policy (bucket-policy.json)
  ···············································
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
  ···············································


  2. AWS Route 53
  ─────────────────────────────────────────────────────────────────────────────
  Função          Gerenciamento de DNS — traduz o domínio josehenriquesa.com
                  para o endereço da distribuição CloudFront

  Como funciona   O Route 53 é o serviço de DNS da AWS. Ao criar uma Hosted Zone
                  para josehenriquesa.com, é possível criar registros do tipo A
                  (Alias) que apontam diretamente para a distribuição CloudFront,
                  sem precisar de um IP fixo.

  Configurações   - Hosted Zone: josehenriquesa.com
  necessárias     - Registro A (Alias) → distribuição CloudFront
                  - Registro A (Alias) para www → mesma distribuição CloudFront
                  - TTL: gerenciado automaticamente pela AWS para registros Alias

  Passo a passo
  ···············································
  1. Acesse o console AWS → Route 53 → Hosted Zones
  2. Clique em "Create hosted zone"
  3. Domain name: josehenriquesa.com
  4. Type: Public hosted zone
  5. Após criar, copie os 4 Name Servers (NS) exibidos
  6. No seu registrador de domínio (GoDaddy, Registro.br, etc.),
     substitua os NS do domínio pelos 4 NS da AWS
  7. Aguarde a propagação (pode levar até 48h, geralmente < 1h)
  8. Crie os registros A Alias apontando para o CloudFront
     (após criar a distribuição CloudFront)
  ···············································

  Custo estimado  ~US$ 0,50/mês por Hosted Zone + US$ 0,40/milhão de queries


  3. AWS CloudFront
  ─────────────────────────────────────────────────────────────────────────────
  Função          CDN (Content Delivery Network) — distribui o conteúdo do site
                  a partir de servidores edge espalhados pelo mundo, e fornece
                  HTTPS gratuito com certificado SSL

  Como funciona   O CloudFront cria cópias do conteúdo do S3 em dezenas de
                  pontos de presença (PoPs) globais. Quando um usuário acessa
                  josehenriquesa.com, é servido pelo servidor mais próximo
                  geograficamente, reduzindo a latência significativamente.
                  Para usuários no Brasil, o conteúdo vem de PoPs em São Paulo.

  Benefícios      - HTTPS gratuito via AWS Certificate Manager (ACM)
                  - Latência reduzida para usuários globais
                  - Proteção contra DDoS (AWS Shield Standard incluso)
                  - Headers de segurança (HSTS, X-Frame-Options etc.)
                  - Compressão automática Gzip/Brotli
                  - Cache inteligente — reduz custos de transferência do S3

  Configurações
  ···············································
  Origin domain       → josehenriquesa.com.s3-website-us-east-1.amazonaws.com
  Origin protocol     → HTTP only (S3 website endpoint não suporta HTTPS)
  Viewer protocol     → Redirect HTTP to HTTPS
  Default root object → index.html
  Custom error pages  → 404 → /404.html (HTTP 404)
  Alternate domains   → josehenriquesa.com
                        www.josehenriquesa.com
  SSL Certificate     → ACM (us-east-1) — deve ser solicitado na região
                        us-east-1 para uso com CloudFront
  Price class         → Use all edge locations (melhor performance)
  ···············································

  Passo a passo
  ···············································
  1. Solicite o certificado SSL no ACM (região us-east-1 obrigatório):
     - AWS Console → Certificate Manager → Request certificate
     - Domain: josehenriquesa.com e *.josehenriquesa.com
     - Validação: DNS (adicione o registro CNAME que o ACM informar no Route 53)
     - Aguarde o status ficar "Issued" (geralmente < 30 min)

  2. Crie a distribuição CloudFront:
     - AWS Console → CloudFront → Create distribution
     - Preencha as configurações acima
     - Selecione o certificado ACM criado no passo 1

  3. Copie o Domain Name da distribuição (ex: d1234abcdef.cloudfront.net)

  4. No Route 53, crie o registro A Alias:
     - Record name: (vazio = apex)
     - Record type: A
     - Alias: Yes → Alias to CloudFront distribution
     - Selecione a distribuição criada

  5. Repita para www.josehenriquesa.com
  ···············································

  Invalidar cache após atualizar o site
  ···············································
  aws cloudfront create-invalidation \
    --distribution-id SEU_DISTRIBUTION_ID \
    --paths "/*"
  ···············································

  Custo estimado  Primeiro 1TB/mês de transferência de dados é grátis no
                  Free Tier por 12 meses. Após isso: ~US$ 0,0085/GB (Brasil).
                  Para um portfolio pessoal: custo praticamente zero.


--------------------------------------------------------------------------------
  ARQUITETURA COMPLETA — FLUXO DE UMA REQUISIÇÃO
--------------------------------------------------------------------------------

  Usuário digita josehenriquesa.com no navegador
         |
         v
  [1] DNS lookup → Route 53
         | resolve para o IP do PoP CloudFront mais próximo
         v
  [2] CloudFront (PoP São Paulo)
         | verifica se o arquivo está no cache
         |-- Cache HIT  → retorna direto (< 10ms)
         |-- Cache MISS → busca no S3 (origem)
         v
  [3] AWS S3 (us-east-1)
         | retorna o arquivo solicitado
         v
  [2] CloudFront → comprime + adiciona headers de segurança + cacheia
         v
  [1] Navegador do usuário recebe HTML/CSS/JS via HTTPS


--------------------------------------------------------------------------------
  ATUALIZAÇÃO DO SITE (DEPLOY)
--------------------------------------------------------------------------------

  Após editar qualquer arquivo, execute:

  # 1. Sincronizar arquivos com o S3
  aws s3 sync . s3://josehenriquesa.com \
    --exclude "*.txt" \
    --exclude ".git/*" \
    --exclude "*.md" \
    --delete

  # 2. Invalidar o cache do CloudFront (obrigatório para ver as mudanças)
  aws cloudfront create-invalidation \
    --distribution-id SEU_DISTRIBUTION_ID \
    --paths "/*"

  Nota: A invalidação tem custo zero para as primeiras 1.000 por mês.


--------------------------------------------------------------------------------
  ESTIMATIVA DE CUSTOS MENSAIS (AWS)
--------------------------------------------------------------------------------

  Serviço         Uso estimado                    Custo estimado
  ─────────────────────────────────────────────────────────────────────────────
  S3              < 1 GB armazenado                ~US$ 0,02/mês
                  < 10.000 requisições
  CloudFront      < 1 GB transferidos              ~US$ 0,00 (Free Tier)
                  < 10M requisições
  Route 53        1 Hosted Zone + queries           ~US$ 0,50/mês
  ACM             Certificado SSL                   Gratuito
  ─────────────────────────────────────────────────────────────────────────────
  TOTAL ESTIMADO                                   ~US$ 0,52/mês (~R$ 3/mês)


--------------------------------------------------------------------------------
  REDES SOCIAIS
--------------------------------------------------------------------------------

  LinkedIn    https://www.linkedin.com/in/jose-henrique-dev-java/
  GitHub      https://github.com/jhenrique
  Instagram   https://www.instagram.com/jhenrique_sa/
  Email       henrique.lavras@gmail.com
  WhatsApp    +55 (11) 97235-4529


--------------------------------------------------------------------------------
  ESTRUTURA DE ARQUIVOS DO PROJETO
--------------------------------------------------------------------------------

  josehenriquesa/
  ├── index.html          → Página principal (portfolio completo)
  ├── contato.html        → Formulário de contato com validação
  ├── 404.html            → Página de erro customizada
  ├── css/
  │   └── style.css       → Design system (cores, tipografia, layout, animações)
  ├── js/
  │   └── main.js         → Interações, animações e lógica do formulário
  └── images/
      └── jose-henrique.png  → Foto de perfil


--------------------------------------------------------------------------------
  CONFIGURAÇÃO DO FORMULÁRIO DE CONTATO (FORMSPREE)
--------------------------------------------------------------------------------

  O formulário usa o serviço Formspree para enviar emails sem backend.

  1. Acesse https://formspree.io e crie uma conta gratuita
  2. Clique em "+ New Form"
  3. Configure o email de destino: henrique.lavras@gmail.com
  4. Copie o ID do formulário gerado (ex: xpwzqrkb)
  5. Abra contato.html e 404.html
  6. Localize a linha:  const FORMSPREE_ID = 'YOUR_FORM_ID';
  7. Substitua YOUR_FORM_ID pelo ID copiado no passo 4

  Plano gratuito: 50 envios/mês (suficiente para portfolio pessoal)
  Plano pago: a partir de US$ 8/mês para volume maior


--------------------------------------------------------------------------------
  AUTOR
--------------------------------------------------------------------------------

  Jose Henrique Santos Andrade
  Analista de Sistemas | Desenvolvedor Java Sênior | Arquiteto Backend

  Bacharel em Sistemas de Informação — UFLA (2008–2012)
  Especialista em Arquitetura de Software — IGTI (2014–2015)
  Pós-Graduando em Inteligência Artificial — Anhembi Morumbi (2025–2026)

  Atualmente: Consultor & Desenvolvedor na Vivo (Telefônica Brasil)
  Desde 2019 atuando com SAP Commerce (Hybris), Java, Spring Boot,
  Kubernetes, Docker e AWS em projetos de e-commerce enterprise.

  Site: https://josehenriquesa.com
  Email: henrique.lavras@gmail.com

================================================================================
  FIM DO DOCUMENTO
================================================================================

--------------------------------------------------------------------------------
  LICENÇA
--------------------------------------------------------------------------------

  MIT License

  Copyright (c) 2026 Jose Henrique Santos Andrade

  É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia
  deste software e dos arquivos de documentação associados (o "Software"), para
  usar o Software sem restrições, incluindo, sem limitação, os direitos de usar,
  copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender
  cópias do Software, desde que as seguintes condições sejam atendidas:

  O aviso de copyright acima e este aviso de permissão devem ser incluídos em
  todas as cópias ou partes substanciais do Software.

  O SOFTWARE É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA", SEM GARANTIA DE
  QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS
  GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO.
  EM NENHUM CASO OS AUTORES OU DETENTORES DE DIREITOS AUTORAIS SERÃO
  RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANO OU OUTRA RESPONSABILIDADE, SEJA
  EM AÇÃO DE CONTRATO, ATO ILÍCITO OU DE OUTRA FORMA, DECORRENTE DE, OU EM
  CONEXÃO COM O SOFTWARE OU O USO OU OUTROS NEGÓCIOS COM O SOFTWARE.

  ─────────────────────────────────────────────────────────────────────────────

  PERMISSÕES
  ─────────────────────────────────────────────────────────────────────────────
  [x] Uso comercial       Permitido usar o projeto em contextos comerciais
  [x] Modificacao         Permitido modificar e adaptar o codigo-fonte
  [x] Distribuicao        Permitido distribuir o codigo original ou modificado
  [x] Uso privado         Permitido usar para fins pessoais e privados

  CONDICOES
  ─────────────────────────────────────────────────────────────────────────────
  [i] Aviso de licenca    O aviso de copyright e esta licenca devem ser mantidos
                          em todas as copias ou distribuicoes do software

  LIMITACOES
  ─────────────────────────────────────────────────────────────────────────────
  [!] Responsabilidade    Os autores nao se responsabilizam por danos decorrentes
                          do uso deste software
  [!] Garantia            Nenhuma garantia e fornecida, expressa ou implicita

  ─────────────────────────────────────────────────────────────────────────────

  LICENCAS DE TERCEIROS
  ─────────────────────────────────────────────────────────────────────────────
  Este projeto faz uso dos seguintes recursos de terceiros, cada um com sua
  respectiva licenca:

  Google Fonts — Bebas Neue, DM Sans, Space Mono
    Licenca: SIL Open Font License (OFL) 1.1
    URL:     https://fonts.google.com
    Uso:     Tipografia do site, carregada via CDN do Google

  Formspree
    Licenca: Servico SaaS proprietario — termos em https://formspree.io/legal
    Uso:     Envio de emails a partir do formulario de contato estatico
    Nota:    Requer criacao de conta propria em formspree.io

  Wikimedia Commons (logos institucionais)
    Licenca: Cada logo possui sua licenca individual conforme publicado
             no Wikimedia Commons. As logos de Vivo/Telefonica e UFLA
             sao marcas registradas de seus respectivos proprietarios.
    Uso:     Exibicao de logos institucionais das empresas e universidades
             listadas na secao de experiencia e formacao academica
    Nota:    O uso de logos de terceiros e feito apenas para fins
             informativos e referenciais, sem implicar qualquer afiliacao
             ou endosso por parte dessas organizacoes

  ─────────────────────────────────────────────────────────────────────────────

  DIREITOS RESERVADOS
  ─────────────────────────────────────────────────────────────────────────────
  Os seguintes elementos sao de propriedade exclusiva de Jose Henrique Santos
  Andrade e NAO estao cobertos pela licenca MIT acima:

  - Foto de perfil (images/jose-henrique.png)
  - Conteudo textual (textos, descricoes, artigos de blog)
  - Identidade visual pessoal (nome, marca JH)
  - Dados de contato e informacoes pessoais

  Qualquer uso, reproducao ou distribuicao desses elementos requer autorizacao
  expressa e por escrito do autor.

  Para solicitar autorizacao: henrique.lavras@gmail.com

