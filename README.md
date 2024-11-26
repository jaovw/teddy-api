# :link: API Encurtador de URLs

Bem-vindo à **API Encurtador de URLs**! Este projeto foi desenvolvido para oferecer uma solução simples e eficiente de encurtamento de URLs. Utilizando **Node.js**, **Express**, **Sequelize** e **TypeScript**, a API foi projetada para ser robusta e fácil de manter, oferecendo aos usuários a possibilidade de encurtar URLs longas de forma rápida e segura.

## 🎯 Objetivo

O objetivo deste projeto é fornecer uma API que permita encurtar URLs com as seguintes funcionalidades:

- **Cadastro de usuários**: Permitir que novos usuários se registrem na plataforma para gerenciar suas URLs.
- **Autenticação**: Garantir que apenas usuários autenticados possam gerenciar suas URLs encurtadas.
- **Encurtamento de URLs**: Transformar URLs longas em URLs curtas e facilmente compartilháveis.
- **Gerenciamento de URLs**: Usuários podem visualizar, editar e excluir (logicamente) suas URLs encurtadas.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework minimalista e flexível para criar a API REST.
- **Sequelize**: ORM para interação com o banco de dados MySQL.
- **MySQL**: Banco de dados relacional para armazenar as URLs e os dados dos usuários.
- **Redis**: Sistema de cache para armazenar tokens JWT e otimizar a autenticação.
- **JWT (JSON Web Token)**: Utilizado para autenticação e autorização de usuários na plataforma.

## 📋 Funcionalidades

Este projeto oferece as seguintes funcionalidades principais:

1. **Cadastro de Usuários**: Sistema para registrar novos usuários com e-mail e senha.
2. **Autenticação via JWT**: Geração de um token JWT para autenticar e autorizar usuários.
3. **Encurtamento de URL**: Funcionalidade que permite encurtar URLs longas para um formato curto.
4. **Gerenciamento de URLs**: Usuários podem listar, editar e excluir URLs encurtadas.
5. **Exclusão Lógica**: As URLs deletadas não são removidas fisicamente, mas ficam marcadas como excluídas no banco.

## 🧠 Avaliação

Durante o desenvolvimento, foram considerados os seguintes pontos para garantir a qualidade do projeto:

- **Segurança**: Implementação de criptografia para senhas de usuários e autenticação segura via JWT.
- **Padrões de Design**: Adoção de boas práticas como o padrão MVC (Model-View-Controller) e princípios SOLID para garantir um código limpo e escalável.
- **Escalabilidade**: Uso de Redis para armazenar tokens JWT, o que permite um controle eficiente de sessões e melhora o desempenho da API.

### 🏅 Diferencial

A utilização de **Redis** para armazenamento de tokens JWT e cache de dados, o que garante um desempenho superior nas requisições autenticadas.

## 🚀 Como Iniciar o Projeto

Para iniciar o projeto, siga os passos abaixo:

Este projeto já inclui um **Dockerfile** e um arquivo **docker-compose.yml** que automatizam a criação do ambiente e do container. Para subir o ambiente, siga os passos abaixo:

1. **Construir e subir o ambiente com Docker Compose**:

   ```bash
   docker-compose up --build

Como foi aplicado o fluxo de desenolvimento inteiro pelo docker, temos a vatagem de não precisar instalar nenhum driver ou ferramenta na maquina local
Logo quando o container docker é iniciado ele já está preparado para criar as tabelas necessárias no banco de dados e assim que disponivel é possível realizar as requisições pelo Postman ou Insomnia

### 🎲 Banco de Dados

O banco de dados utilizado é o **MySQL**, que é configurado e gerenciado pelo Sequelize. Ele armazena informações sobre os usuários e as URLs encurtadas.

A estrutura do banco de dados inclui:

- Usuários: Tabela para armazenar os dados de login (e-mail e senha).
- URLs: Tabela para armazenar as URLs longas e suas versões encurtadas.
