# Grupos de WhatsApp

Sistema completo para gerenciamento e descoberta de grupos de WhatsApp com categorias, autenticação e painel administrativo.

## 🚀 Funcionalidades

- 🔍 **Busca Avançada**: Encontre grupos por nome, categoria ou descrição
- 📱 **Interface Responsiva**: Funciona perfeitamente em desktop e mobile
- 👤 **Sistema de Autenticação**: Login seguro com Supabase
- 📊 **Painel Administrativo**: Gerencie grupos e usuários
- 🏷️ **Categorização**: Organize grupos por categorias
- 💎 **Sistema VIP**: Destaque para grupos premium
- 📈 **Estatísticas**: Visualizações e métricas em tempo real
- 🎨 **Design Moderno**: Interface limpa e intuitiva

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Supabase (PostgreSQL)
- **Autenticação**: Supabase Auth
- **Ícones**: Font Awesome
- **Fontes**: Google Fonts (Inter)
- **Deploy**: Vercel/Netlify

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/pro1895/gruposdewhatss.git
   cd gruposdewhatss
   ```

2. **Configure o Supabase**
   - Crie um projeto no [Supabase](https://supabase.com)
   - Configure as variáveis em `config.js`
   - Execute os scripts SQL da pasta `/sql`

3. **Execute localmente**
   ```bash
   python -m http.server 8000
   # ou
   npx serve .
   ```

4. **Acesse no navegador**
   ```
   http://localhost:8000
   ```

## 📁 Estrutura do Projeto

```
gruposdewhatss/
├── index.html              # Página principal
├── dashboard.html          # Painel do usuário
├── group-details.html      # Detalhes do grupo
├── login.html             # Página de login
├── register.html          # Página de cadastro
├── profile.html           # Perfil do usuário
├── style.css              # Estilos principais
├── script.js              # Lógica da página inicial
├── dashboard.js           # Lógica do dashboard
├── group-details.js       # Lógica dos detalhes
├── auth.js                # Autenticação
├── config.js              # Configurações
├── services/
│   └── groupService.js    # Serviços de grupos
├── lib/
│   └── supabase.js        # Cliente Supabase
├── api/                   # APIs e webhooks
└── sql/                   # Scripts do banco
```

## 🎯 Como Usar

### Para Usuários
1. **Navegar**: Explore grupos por categoria
2. **Buscar**: Use a barra de pesquisa
3. **Espiar**: Veja detalhes antes de entrar
4. **Entrar**: Clique para acessar o WhatsApp

### Para Administradores
1. **Cadastre-se**: Crie uma conta
2. **Faça Login**: Acesse o dashboard
3. **Adicione Grupos**: Publique novos grupos
4. **Gerencie**: Edite ou remova grupos

## 🔧 Configuração

### Supabase Setup

1. **Crie as tabelas**:
   ```sql
   -- Execute os scripts em sql/
   ```

2. **Configure RLS (Row Level Security)**:
   ```sql
   -- Políticas de segurança incluídas
   ```

3. **Variáveis de ambiente**:
   ```javascript
   // config.js
   const SUPABASE_URL = 'sua-url'
   const SUPABASE_ANON_KEY = 'sua-chave'
   ```

## 🚀 Deploy

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

## 📱 Categorias Disponíveis

- 💼 Negócios
- 💻 Tecnologia
- 📚 Educação
- 🎮 Jogos
- 🎵 Música
- 🎬 Filmes
- ⚽ Esportes
- 🍳 Culinária
- ✈️ Viagens
- 💰 Finanças
- 🏠 Imóveis
- 🚗 Automóveis
- 👗 Moda
- 💄 Beleza
- ❤️ Relacionamentos

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- 📧 Email: contato@gruposwhatsapp.com
- 💬 WhatsApp: (11) 99999-9999
- 🐛 Issues: [GitHub Issues](https://github.com/pro1895/gruposdewhatss/issues)

## 🎉 Agradecimentos

- [Supabase](https://supabase.com) - Backend as a Service
- [Font Awesome](https://fontawesome.com) - Ícones
- [Google Fonts](https://fonts.google.com) - Tipografia

---

⭐ **Se este projeto foi útil, deixe uma estrela!** ⭐