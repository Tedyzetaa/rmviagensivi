# RM Viagens Ivinhema

**Sua Parada para Horários de Ônibus em Ivinhema – MS** 🚀🚌

Bem-vindo ao **RM Viagens Ivinhema**, o seu ponto de referência para consultar horários e informações de linhas de ônibus que passam por Ivinhema–MS. Este projeto foi reescrito e aprimorado com tecnologias modernas, garantindo melhor performance, acessibilidade e experiência de uso.

---

## 🔍 Como Funciona

1. **Digite seu Destino**: No campo de busca, escreva a cidade ou ponto de destino.
2. **Clique em Buscar**: O mecanismo de pesquisa filtrará os dados e mostrará os horários e informações relevantes.
3. **Explore os Resultados**: Navegue pelos resultados, com cards responsivos e links para mais detalhes.

---

## 🛠️ Tecnologias Usadas

| Camada   | Ferramenta / Técnica                                                                                                         |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **HTML** | Estrutura semântica (tags `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) e labels acessíveis (`<label>`, `aria-*`). |
| **CSS**  |                                                                                                                              |

* **Variáveis CSS** (`:root`) para cores, espaçamentos e fontes
* **Dark/Light Mode** via `prefers-color-scheme`
* **Metodologia BEM** para organização de classes
* **Grid + Flexbox** para layout responsivo
* Transições e animações suaves (hover, spinner)
  \| **JavaScript**|
* **Debounce** na busca para reduzir chamadas
* **Spinner de carregamento** entre as buscas
* **Tratamento de erros** e feedback via ARIA   |
  \| **dados.js**  | Arquivo com o *mock* ou fonte real de dados em formato JSON/Array de objetos.|

---

## 🚀 Principais Recursos

* **UI responsiva**: Cards dispostos em *grid* fluido, adaptável a mobile e desktop.
* **Modo Dark/Light**: Adequação automática conforme preferência do usuário.
* **Acessibilidade**: Contraste aprimorado, roles, labels e `aria-live` para leitores de tela.
* **Experiência de busca**: Debounce de 300 ms, spinner de carregamento, mensagens de feedback.
* **Design escalonado**: Tipografia com escala consistente (Perfect Fourth) e espaçamentos uniformes.

---

## 📂 Estrutura de Pastas

```
├── index.html       # Página principal
├── styles.css       # Estilos com variáveis CSS e BEM
├── app.js           # Lógica de busca e UI
├── dados.js         # Fonte de dados (horários, descrições, links)
└── README.md        # Documentação do projeto
```

---

## 🔧 Instalação e Uso

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/rm-viagens-ivinhema.git
   ```
2. Navegue até a pasta do projeto e abra `index.html` no navegador.
3. Preencha `dados.js` com sua fonte de dados real (API ou JSON local).

---

## 🤝 Contribuição

Contribuições são bem-vindas! Se quiser sugerir melhorias, abrir *issues* ou fazer *pull requests*, siga estas etapas:

1. Fork este repositório.
2. Crie uma branch com sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona nova feature'`.
4. Envie para o *remote*: `git push origin minha-feature`.
5. Abra um *Pull Request*.

---

## 📄 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Divirta-se e boa viagem!** ✌️
