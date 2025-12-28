RO-TEC | Sistema de Controlo Operacional (PWA)

Este é um sistema de checklist digital focado em operações técnicas (Iluminação e Transmissão) para eventos ao vivo. Funciona como uma Progressive Web App (PWA), permitindo instalação em dispositivos móveis e sincronização em tempo real via Firebase.

🚀 Funcionalidades

Multi-utilizador em Tempo Real: Operadores marcam tarefas e o líder vê instantaneamente no painel.

PWA (Instalável): Funciona como app nativa em Android e iOS.

Offline-First: A interface carrega mesmo sem internet (graças ao Service Worker).

Bloqueio por Horário: Tarefas bloqueiam automaticamente se o prazo for ultrapassado.

Painel de Líder: Monitorização global do progresso da equipa.

📂 Estrutura de Ficheiros

Para que o sistema funcione, estes 3 ficheiros devem estar na mesma pasta no servidor:

index.html: A aplicação completa (Interface + Lógica Firebase).

manifest.json: Configurações para instalação no telemóvel (ícones, nome, cor).

service-worker.js: Script que gere o cache e permite o funcionamento offline.

🛠️ Como Colocar no Ar

Este projeto requer um servidor com HTTPS para que o PWA funcione.

Opção 1: GitHub Pages (Recomendado)

Cria um repositório no GitHub.

Faz upload dos 3 ficheiros para a raiz (branch main).

Vai a Settings > Pages e ativa a publicação.

Opção 2: Vercel / Netlify

Basta arrastar a pasta com os ficheiros para o dashboard da Vercel/Netlify.

O link seguro (https://...) é gerado automaticamente.

⚙️ Configuração do Firebase

O ficheiro index.html já contém as credenciais do projeto checklist-bblk.
Requisito: Certifica-te de que a Autenticação Anónima está ativada na consola do Firebase para que os operadores consigam entrar sem erro.

📱 Como Usar no Telemóvel

Acede ao link gerado.

Android (Chrome): Toca em "Adicionar ao Ecrã Principal" ou "Instalar App".

iOS (Safari): Toca no botão Partilhar e escolhe "Adicionar ao Ecrã Principal".

Desenvolvido para operações de alta fiabilidade.
