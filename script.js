/* DECLARAÇÃO DE ELEMENTOS */
const itens = document.querySelectorAll(".menu li");
const header = document.getElementById("header");
const section = document.getElementById("section");
const body = document.body;
const btn = document.getElementById("btnSeguinte");
const btnTema = document.querySelector(".btn-tema");
const logo = document.querySelector(".logo");

let paginaFormacao = 1;
let paginaPortfolio = 1;
let paginaContato = 1;

const conteudos = {
  sobre: {
    titulo: "Olá!",
    subtitulo: "MEU NOME É JHONATAN FERNANDES SANTANA",
    texto: " Sou estudante de Análise e Desenvolvimento de Sistemas na Uninter, com experiência de trabalho em atendimento, sistemas internos e design gráfico. Possuo MEI e atuo com a JFS Design na prestação de serviços. Busco evolução constante, principalmente em tecnologia, comunicação e trabalho em equipe."
  },
  formacao: {
    titulo: "Formação",
    subtitulo: "",
    texto: "Aqui vai sua formação..."
  },
  portfolio: {
    titulo: "Portfólio",
    subtitulo: "",
    texto: "Aqui vão seus projetos..."
  },
  contato: {
    titulo: "Contato",
    subtitulo: "",
    texto: "Aqui vai seu contato..."
  }
};

/* FUNÇÕES */

function getSetaTema() {
  return body.classList.contains("light")
    ? "Imagens/seta2Preta.png"
    : "Imagens/seta2Branca.png";
}

itens.forEach((item) => {
  item.addEventListener("click", () => {
    itens.forEach((i) => i.classList.remove("ativo"));
    item.classList.add("ativo");

    const page = item.getAttribute("data-page");

    body.classList.remove(
      "pagina-sobre",
      "pagina-formacao",
      "pagina-portfolio",
      "pagina-contato"
    );

    body.classList.add(`pagina-${page}`);

    if (page === "formacao") {
      paginaFormacao = 1;
      atualizarFormacao();
      return;
    }

    if (page === "portfolio") {
      paginaPortfolio = 1;
      atualizarPortfolio();
      return;
    }

    if (page === "contato") {
      paginaContato = 1;
      atualizarContato();
      return;
    }

    header.innerHTML = `
      <h1>${conteudos[page].titulo}</h1>
      <h2>${conteudos[page].subtitulo}</h2>
    `;

    section.innerHTML = `
      <p>${conteudos[page].texto}</p>
    `;
  });
});

btn.addEventListener("click", () => {
  // alterna as páginas internas da formação
  if (body.classList.contains("pagina-formacao")) {
    paginaFormacao = paginaFormacao === 1 ? 2 : 1;
    atualizarFormacao();
    return;
  }

  // alterna as páginas internas do portfólio
  if (body.classList.contains("pagina-portfolio")) {
    paginaPortfolio = paginaPortfolio === 1 ? 2 : 1;
    atualizarPortfolio();
    return;
  }

  // alterna formulário e contatos diretos
  if (body.classList.contains("pagina-contato")) {
    paginaContato = paginaContato === 1 ? 2 : 1;
    atualizarContato();
  }
});

function atualizarFormacao() {
  if (paginaFormacao === 1) {
    header.innerHTML = `
      <h1>Formação</h1>
    `;

    section.innerHTML = `
      <div class="formacao-blocos">
        <div class="formacao-item">
          <img src="${body.classList.contains("light") ? "Imagens/setaPreta.png" : "Imagens/seta.png"}" class="seta-formacao" alt="Seta">
          <div class="formacao-texto">
            <h2>Análise e Desenvolvimento de Sistemas – UNINTER </h2>
            <h3>2025 - (Até o atual momento)</h3>
          </div>
        </div>

        <div class="formacao-item">
          <img src="${body.classList.contains("light") ? "Imagens/setaPreta.png" : "Imagens/seta.png"}" class="seta-formacao" alt="Seta">
          <div class="formacao-texto">
            <h2>Inglês Intermediario - CNA</h2>
            <h3>2022 - 2024</h3>
          </div>
        </div>

        <div class="formacao-item">
          <img src="${body.classList.contains("light") ? "Imagens/setaPreta.png" : "Imagens/seta.png"}" class="seta-formacao" alt="Seta">
          <div class="formacao-texto">
            <h2>Tecnico Aprediz Comercial e Administrativo - Senac</h2>
            <h3>2017 - 2018 (1000 horas)</h3>
          </div>
        </div>
      </div>
    `;

    btn.innerHTML = `
      <span>Seguinte</span>
      <img src="${getSetaTema()}" class="seta-btn" alt="Seta">
    `;
  }

  if (paginaFormacao === 2) {
    header.innerHTML = `
      <h1>Habilidades Técnicas</h1>
    `;

    section.innerHTML = `
      <div class="formacao-pagina-dois">
        <div class="formacao-item-dois">
          <h4>Linguagens de Programação e Tecnologias Web:</h4>
          <h5>Java | Python | JavaScript | HTML | CSS.</h5>
        </div>

        <div class="formacao-item-dois">
          <h4>Bancos de Dados e Manipulação de Dados:</h4>
          <h5>MySQL | SQL.</h5>
        </div>

        <div class="formacao-item-dois">
          <h4>Ferramentas de Desenvolvimento e Colaboração:</h4>
          <h5>Git | GitHub | Figma | Canva.</h5>
        </div>

        <div class="formacao-item-dois">
          <h4>Habilidades de Análise e Documentação de Requisitos:</h4>
          <h5>UML | BPMN | Diagramas de Casos de Uso.</h5>
        </div>

        <div class="formacao-item-dois">
          <h4>Conceitos de Desenvolvimento:</h4>
          <h5>Lógica de Programação | Programação Orientada a Objetos (POO) | Estruturas de Dados (básico).</h5>
        </div>
      </div>
    `;

    btn.innerHTML = `
      <img src="${getSetaTema()}" class="seta-btn" style="transform: rotate(180deg);" alt="Seta">
      <span>Voltar</span>
    `;
  }
}

function atualizarPortfolio() {
  if (paginaPortfolio === 1) {
    header.innerHTML = `
      <h1>
        <a href="pdfBarbearia.pdf" target="_blank" rel="noopener noreferrer">
          Pacotes de Artes para Barbearia
        </a>
      </h1>
    `;

    section.innerHTML = `
      <div class="portfolio-bloco">
        <a href="pdfBarbearia.pdf" target="_blank" rel="noopener noreferrer">
          <img src="Imagens/Barbearia.jpg" alt="Barbearia" class="portfolio-img">
        </a>
        <div class="portfolio-texto">
          <h3><strong>Descrição:</strong> Material desenvolvido para apresentação de pacotes de serviços na área da beleza, com foco<br> em organização, clareza das informações e estética visual.
          <br><strong>Tipo:</strong> Design gráfico</h3>
        </div>
      </div>
    `;

    btn.innerHTML = `
      <span>Seguinte</span>
      <img src="${getSetaTema()}" class="seta-btn" alt="Seta">
    `;
  }

  if (paginaPortfolio === 2) {
    header.innerHTML = `
      <h1>
        <a href="https://www.figma.com/design/ksBqtPwaLcnUeGKXrcPHIc/Aul-de-Design-Interação?node-id=0-1&p=f&t=jJpofay7NWIAXimk-0" target="_blank" rel="noopener noreferrer">
          Banco Orbit - Projeto UI/UX
        </a>
      </h1>
    `;

    section.innerHTML = `
      <div class="portfolio-bloco">
        <a href="https://www.figma.com/design/ksBqtPwaLcnUeGKXrcPHIc/Aul-de-Design-Interação?node-id=0-1&p=f&t=jJpofay7NWIAXimk-0" target="_blank" rel="noopener noreferrer">
          <img src="Imagens/DesignDeInteração.png" alt="Design de Interação" class="portfolio-img2">
        </a>
        <div class="portfolio-texto">
          <h3><strong>Descrição:</strong> Protótipo interativo de aplicativo bancário com foco em usabilidade e navegação, <br>incluindo telas de login e consulta de saldo/extrato.
          <br><strong>Tipo:</strong> UI/UX Design (Protótipo Interativo)</h3>
        </div>
      </div>
    `;

    btn.innerHTML = `
      <img src="${getSetaTema()}" class="seta-btn" style="transform: rotate(180deg);" alt="Seta">
      <span>Voltar</span>
    `;
  }
}

function atualizarContato() {
  header.innerHTML = ``;

  // Página 1 → contatos reais
  if (paginaContato === 1) {
    section.innerHTML = `
      <div class="contato-blocos">
        <a href="https://wa.me/5544999676576" target="_blank" rel="noopener noreferrer" class="contato-item">
          <img src="Imagens/whatsapp.png" alt="WhatsApp">
          <span>(44) 9 9967-6576</span>
        </a>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jhonny.dev2112@gmail.com&su=Contato%20pelo%20portf%C3%B3lio" target="_blank" rel="noopener noreferrer" class="contato-item">
          <img src="Imagens/gmail.png" alt="Gmail">
          <span>jhonny.dev2112@gmail.com</span>
        </a>

        <a href="https://www.instagram.com/jfs_design_/" target="_blank" rel="noopener noreferrer" class="contato-item">
          <img src="Imagens/instagram.png" alt="Instagram">
          <span>@jfs_design_</span>
        </a>

        <a href="https://www.linkedin.com/in/jhonnydev2112/" target="_blank" rel="noopener noreferrer" class="contato-item">
          <img src="Imagens/linkedin.png" alt="LinkedIn">
          <span>www.linkedin.com/in/jhonnydev2112</span>
        </a>

        <a href="https://github.com/Jhonny-Dev2112" target="_blank" rel="noopener noreferrer" class="contato-item">
          <img src="Imagens/github.png" alt="GitHub">
          <span>Jhonny-Dev2112</span>
        </a>
      </div>
    `;

    btn.innerHTML = `
      <span>Formulário</span>
      <img src="${getSetaTema()}" class="seta-btn" alt="Seta">
    `;
    return;
  }

  // Página 2 → formulário acadêmico
  section.innerHTML = `
    <div class="contato-formulario-area">
      <form id="formContato" class="contato-formulario" novalidate>

        <div class="campo-formulario">
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome">
        </div>

        <div class="campo-formulario">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail">
        </div>

        <div class="campo-formulario">
          <label for="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows="6" placeholder="Digite sua mensagem"></textarea>
        </div>

        <button type="submit" class="btn-enviar">Enviar</button>

        <p id="retornoFormulario" class="retorno-formulario"></p>

        <!-- Observação importante para uso real -->
        <p style="font-size:14px; opacity:0.7; margin-top:10px;">
          Este formulário possui finalidade acadêmica e não realiza envio real de mensagens.
          <br>Para contato, utilize os meios disponíveis na página anterior.
        </p>

      </form>
    </div>
  `;

  btn.innerHTML = `
    <img src="${getSetaTema()}" class="seta-btn" style="transform: rotate(180deg);" alt="Seta">
    <span>Voltar</span>
  `;

  ativarFormularioContato();
}

function validarEmail(email) {
  // valida um formato simples de e-mail antes do envio
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function ativarFormularioContato() {
  const form = document.getElementById("formContato");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const retorno = document.getElementById("retornoFormulario");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const mensagemValor = mensagem.value.trim();

    // verifica se todos os campos foram preenchidos
    if (!nomeValor || !emailValor || !mensagemValor) {
      retorno.textContent = "Preencha todos os campos antes de enviar.";
      return;
    }

    // confere se o e-mail digitado parece válido
    if (!validarEmail(emailValor)) {
      retorno.textContent = "Informe um e-mail válido.";
      return;
    }

    // simula o envio e limpa o formulário
    retorno.textContent = "Mensagem enviada com sucesso!";
    form.reset();
  });
}

btnTema.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    btnTema.src = "Imagens/temaLight.png";
    logo.src = "Imagens/JFSpreto200x200px.png";
  } else {
    btnTema.src = "Imagens/temaDark.png";
    logo.src = "Imagens/JFSbranco200x200px.png";
  }

  if (body.classList.contains("pagina-formacao")) {
    atualizarFormacao();
  }

  if (body.classList.contains("pagina-portfolio")) {
    atualizarPortfolio();
  }

  if (body.classList.contains("pagina-contato")) {
    atualizarContato();
  }
});