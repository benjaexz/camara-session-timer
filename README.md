# Sistema de Cronometragem Legislativa

Sistema web para controle e exibição de cronômetro em sessões plenárias.

Desenvolvido para permitir que um operador controle remotamente o tempo da sessão enquanto um painel em TV exibe o cronômetro em tempo real.

---

## Objetivo

Substituir controle manual de tempo por um sistema:

- simples
- sincronizado em tempo real
- legível em ambientes institucionais
- acessível via navegador

Arquitetura:

Operador
↓
Firebase Realtime Database
↓
Display (TV)

---

## Demonstração
Rotas:

- `/operador` → controle do cronômetro
- `/display` → exibição institucional

---

## Funcionalidades

### Operador
- iniciar cronômetro
- pausar cronômetro
- redefinir tempo
- selecionar presets
- sincronização em tempo real

### Display
- atualização automática
- modo somente leitura
- fullscreen
- visual institucional

### Sistema
- sincronização instantânea
- separação operador/display
- deploy cloud

---

## Tecnologias

Frontend:
- React
- TypeScript
- Vite

Backend (BaaS):
- Firebase Realtime Database
- Firebase Authentication

Deploy:
- Vercel

Versionamento:
- Git
- GitHub

---

## Estrutura

```txt
src
├── assets
├── components
│   ├── Header
│   ├── Timer
│   ├── Controls
│   └── Status
├── constants
├── utils
├── pages
│   ├── Operator
│   └── Display
└── App
```

---

## Instalação

```bash
git clone https://github.com/benjaexz/camara-session-timer

cd camara-session-timer

npm install

npm run dev
```

Aplicação:

```txt
http://localhost:5173
```

---

## Roadmap

### V1
- [x] cronômetro
- [x] realtime
- [x] display
- [x] deploy

### V1.1
- [ ] autenticação operador
- [ ] tratamento desconexão
- [ ] otimização assets

### V2
- [ ] múltiplos cronômetros
- [ ] pauta/orador
- [ ] histórico
- [ ] painel administrativo

---

## Autor

Benjamin Lima

Projeto desenvolvido como solução real para ambiente legislativo.
