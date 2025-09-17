# 🏡 EliteHome - Plataforma Imobiliária

Bem-vindo ao **EliteHome**, uma plataforma moderna para gerenciamento e visualização de imóveis.  
O sistema foi desenvolvido para atender **clientes** interessados em encontrar imóveis e **administradores** que precisam gerenciar propriedades e agendamentos de visitas.

---

## 🚀 Funcionalidades

### 👤 Usuário
- Página inicial com destaque de imóveis.
- Listagem de imóveis em **cards**.
- Ao clicar em um imóvel:
  - Exibição dos **detalhes completos** do imóvel.
  - **Carousel de imagens** do imóvel.
  - Botão para **agendar uma visita** preenchendo um formulário.

### 🔑 Administrador
- Tela de **login** exclusivo para administradores.
- **Dashboard** com as seguintes funcionalidades:
  - Visualizar todos os imóveis cadastrados.
  - Criar um novo imóvel.
  - Editar imóveis existentes.
  - Excluir imóveis.
  - Página exclusiva de **agendamentos de visitas**:
    - Marcar visitas como **confirmadas**.
    - **Cancelar** ou **excluir** agendamentos.

---

## 🛠️ Tecnologias Utilizadas

### 📌 Backend
- **TypeScript**
- **Fastify**
- **Knex.js** + **PostgreSQL**
- **JWT (jsonwebtoken)** para autenticação
- **Bcrypt** para criptografia de senhas
- **Zod** para validações
- **Multer** para upload de imagens
- **Dotenv** para variáveis de ambiente

### 📌 Frontend
- **React + Vite**
- **React Router DOM**
- **Axios** para requisições HTTP
- **TailwindCSS** para estilização
- **Framer Motion** para animações
- **Lucide React** para ícones

---

## ⚙️ Instalação

### 🔧 Backend
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/elitehome.git

# Acesse a pasta do backend
cd elitehome-api

# Instale as dependências
npm install

# Configure as variáveis de ambiente no arquivo .env
cp .env.example .env

# Execute as migrations
npx knex migrate:latest

# Rodar servidor em modo desenvolvimento
npm run dev
🎨 Frontend
# Acesse a pasta do frontend
cd frontend_imobiliaria

# Instale as dependências
npm install

# Inicie o servidor local
npm run dev
🌍 Estrutura do Projeto
elitehome/
│── elitehome-api/         # Backend (Fastify + Knex + PostgreSQL)
│   ├── src/
│   │   ├── http/          # Rotas e controllers
│   │   ├── database/      # Configuração do banco
│   │   ├── middlewares/   # Middlewares de autenticação e validação
│   │   └── schemas/       # Schemas Zod
│
│── frontend_imobiliaria/  # Frontend (React + Vite + Tailwind)
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas principais (Home, Login, Dashboard, etc.)
│   │   ├── services/      # Configuração Axios
│   │   └── assets/        # Imagens e ícones
📷 Imagens do Projeto
🏠 Página Home

🏡 Detalhes do Imóvel

📅 Formulário de Agendamento

🔑 Login do Administrador

📊 Dashboard

📌 Autor

👨‍💻 Desenvolvido por Lucas Silva
📧 [lucas_alexandre05@hotmail.com]
🔗 LinkedIn-
 | Portfólio-
