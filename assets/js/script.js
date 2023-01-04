let nav = document.querySelector('header nav');
let popup = document.querySelector('.popup-image');
let header = document.querySelector('header');
let body = document.querySelector('body');


function showMenu() {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        document.querySelector('.menu-btn img').src = './assets/img/menu.png'
    } else {
        nav.classList.add('open');
        document.querySelector('.menu-btn img').src = './assets/img/close.png'
    }
}


function closeMenu() {
    let a = document.querySelectorAll('.underline-hover a')
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        document.querySelector('.menu-btn img').src = './assets/img/menu.png'
    }
}

//insert description    

document.onmouseover = function (element) {
    let description = document.querySelector('.element-description')
    let titleElement = document.querySelector('.skill-element-title');
    if (element.target.classList.contains('html')) {
        titleElement.innerHTML = `<span class="html-title-color">HTML</span>`;
        description.textContent = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.";
    }
    else if (element.target.classList.contains('css')) {
        titleElement.innerHTML = `<span class="css-title-color">CSS</span>`;
        description.textContent = "O CSS trata-se de uma linguagem de marcação, amplamente utilizada com HTML ou XHTML, e representa diversas possibilidades para a formatação. O CSS ajuda a editar, alinhar, remover e trabalhar no espaço entre elementos de uma página.";
    }

    else if (element.target.classList.contains('js')) {
        titleElement.innerHTML = `<span class="js-title-color">JAVASCRIPT</span>`;
        description.textContent = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.";
    }

    else if (element.target.classList.contains('git')) {
        titleElement.innerHTML = `<span class="git-title-color">GIT</span>`;
        description.textContent = "Git é o sistema de controle de versão open source mais usado no mundo atualmente! Ele é usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software. Ele permite mais flexibilidade no fluxo de trabalho, segurança e desempenho.";
    }

    else if (element.target.classList.contains('firebase')) {
        titleElement.innerHTML = `<span class="firebase-title-color">FIREBASE</span>`;
        description.textContent = "O Firebase Realtime Database é um banco de dados NoSQL hospedado na nuvem. Com ele, você armazena e sincroniza dados entre os seus usuários em tempo real. O Cloud Firestore permite armazenar, sincronizar e consultar dados de apps em escala global.";
    }

    else if (element.target.classList.contains('bs')) {
        titleElement.innerHTML = `<span class="bs-title-color">BOOTSTRAP</span>`;
        description.textContent = "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo";
    }

    else if (element.target.classList.contains('react')) {
        titleElement.innerHTML = `<span class="react-title-color">REACTJS</span>`;
        description.textContent = "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.";
    }

    else if (element.target.classList.contains('java')) {
        titleElement.innerHTML = `<span class="java-title-color"><strong class="java-title-color-first">JA</strong><strong class="java-title-color-second">VA</strong></span>`;
        description.textContent = "Java é uma linguagem multiplataforma, orientada a objetos e centrada em rede que pode ser usada como uma plataforma em si. É uma linguagem de programação rápida, segura e confiável para codificar tudo, desde aplicações móveis e software empresarial até aplicações de big data e tecnologias do servidor.";
    }

    else if (element.target.classList.contains('learning')) {
        titleElement.innerHTML = `<span class="learning-title-color">O QUE ESTOU APRENDENDO?</span>`;
        description.textContent = "No momento, estou me aprofundando em ReactJS, Node.js, TypeScript e MySQL.";
    }

    else {
        titleElement.textContent = "";
        description.textContent = "*passe o cursor do mouse por cima do card para visualizar a descrição*";
    }
}

//function see more certifications

function extendCertification() {
    const hiddenColumn = document.querySelector('.hidden');
    if (hiddenColumn.style.display == 'none') {
        hiddenColumn.style.display = 'flex';
        document.querySelector('#extCertified').innerHTML = `Ocultar <i class="fa-solid fa-angles-right"></i>`
    } else {
        hiddenColumn.style.display = 'none'
        document.querySelector('#extCertified').innerHTML = `Ver mais <i class="fa-solid fa-angles-right"></i>`
    }


}

//open popup image

document.querySelectorAll('.certified-img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        openModal();
    }
});

function openModal() {
    if (popup.style.display == 'block') {
        header.style.display = 'none';
        body.style.overflow = 'hidden';
    }
    return;
}

function closePopup() {
    document.querySelector('.popup-image').style.display = 'none';
    body.style.overflow = 'auto';
    header.style.display = 'block';
    header.style.display = 'flex';
}

