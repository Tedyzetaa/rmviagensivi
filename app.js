function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 
  
    // Obtém o valor digitado no campo de pesquisa e remove espaços em branco
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
  
    // Verifica se o campo de pesquisa está vazio e exibe uma mensagem caso esteja
    if (!campoPesquisa) {
      section.innerHTML = "Não foi encontrado";
      return; 
    }
  
    // Converte o termo de pesquisa para letras minúsculas para uma busca sem distinção entre maiúsculas e minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa variáveis para armazenar os resultados, título, descrição e tags
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre os dados da pesquisa
    for (let dado of dados) { 
      // Converte título, descrição e tags para minúsculas para comparação
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no título, descrição ou tags
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Adiciona o resultado encontrado à variável 'resultados'
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a> 
            </h2>
            <p class="descricao-meta">${dado.descricao} </p>
            <a href=${dado.link} target="_blank">Mais Informações</a>
          </div>
        `;
      }
    }
  
    // Verifica se algum resultado foi encontrado e exibe uma mensagem caso contrário
    if (!resultados) {
      resultados = "<p>Não foi encontrado</p>";
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }
