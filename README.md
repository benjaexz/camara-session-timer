# Câmara Session Timer

Sistema de cronometragem legislativa para sessões plenárias da Câmara Municipal de Barcelos.

Projeto desenvolvido para permitir operação centralizada do tempo da sessão por um operador enquanto uma tela externa exibe o cronômetro em tempo real em modo somente leitura.

---

## Visão Geral

O sistema foi pensado para uso institucional.

Fluxo:

```txt
Operador
↓
Controla cronômetro
↓
Sincronização em tempo real
↓
Tela pública / TV
```

Separação clara entre:

```txt
/operador → controle
/display → exibição
```

---

# Tecnologias

- React
- TypeScript
- Vite
- Firebase Realtime Database
- React Router DOM
- CSS

---

# Funcionalidades

## Operador

- Iniciar cronômetro
- Pausar cronômetro
- Redefinir tempo
- Controle centralizado

## Display

- Exibição em tela cheia
- Atualização automática
- Interface limpa
- Alta legibilidade para plenário

## Sistema

- Sincronização em tempo real
- Separação entre controle e visualização
- Estrutura preparada para expansão

---

# Rotas

### Operador

```txt
/operador
```

Tela usada pela mesa ou responsável pela sessão.

### Display

```txt
/display
```

Tela exibida em TV ou monitor institucional.

---

# Executar localmente

Instalar dependências:

```bash
npm install
```

Executar:

```bash
npm run dev
```

Abrir:

```txt
http://localhost:5173/operador
```

ou

```txt
http://localhost:5173/display
```

---

# Estrutura do Projeto

```txt
src
├── assets
├── components
├── constants
├── pages
├── utils
├── App.tsx
├── main.tsx
└── index.css
```

---

# Arquitetura

```txt
Operador
│
├── Controle do tempo
│
▼

Firebase Realtime Database

▼

Display
(TV / Painel)
```

---

# Status do Projeto

MVP em desenvolvimento.

Concluído:

- [x] Estrutura React + TypeScript
- [x] Interface institucional
- [x] Timer regressivo
- [x] Componentização
- [x] Separação operador / display
- [x] Estrutura para sincronização

Próximos passos:

- [ ] Presets de tempo
- [ ] Fullscreen automático
- [ ] Autenticação do operador
- [ ] Deploy
- [ ] Monitoramento de conexão

---

# Objetivos Técnicos

- Baixa complexidade operacional
- Alta legibilidade
- Tempo sincronizado
- Arquitetura simples e escalável
- Uso em ambiente legislativo

---

# Autor

Desenvolvido por Benjamin.

Projeto acadêmico e institucional para estudo de sistemas em tempo real aplicados ao ambiente legislativo.
