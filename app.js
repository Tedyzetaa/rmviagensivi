const campo = document.getElementById('campo-pesquisa');
const button = document.querySelector('.busca__button');
const lista = document.querySelector('.resultados__list');
const feedback = document.getElementById('feedback-msg');
const spinner = document.getElementById('spinner');

let debounceTimer;

button.addEventListener('click', pesquisar);
campo.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(pesquisar, 300);
});

async function pesquisar() {
  const termo = campo.value.trim().toLowerCase();
  lista.innerHTML = '';
  feedback.textContent = '';
  if (!termo) {
    feedback.textContent = 'Por favor, digite algo para buscar.';
    return;
  }

  spinner.style.display = 'block';
  try {
    await new Promise(r => setTimeout(r, 500)); // Simula latência

    const encontrados = dados.filter(d =>
      d.titulo.toLowerCase().includes(termo) ||
      d.descricao.toLowerCase().includes(termo) ||
      d.tags.toLowerCase().includes(termo)
    );

    if (encontrados.length === 0) {
      feedback.textContent = 'Nenhum resultado encontrado.';
    } else {
      for (const dado of encontrados) {
        const item = document.createElement('li');
        item.className = 'resultados__item';
        item.innerHTML = `
          <h2 class="resultados__titulo">${dado.titulo}</h2>
          <p class="resultados__descricao">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank" class="resultados__link">Mais informações</a>
        `;
        lista.appendChild(item);
      }
    }
  } catch (err) {
    feedback.textContent = 'Ocorreu um erro. Tente novamente.';
    console.error(err);
  } finally {
    spinner.style.display = 'none';
  }
}
