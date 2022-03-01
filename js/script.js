const posts = [
    { titulo: "Titulo 1", contenido: "Some quick example text to build on the card title and make up the bulk of the card's content.", categorias: ["Programación"]},
    { titulo: "Titulo 2", contenido: "Some quick example text to build on the card title and make up the bulk of the card's content.", categorias: ["Informativo", "Videojuegos"] },
    { titulo: "Titulo 3", contenido: "Some quick example text to build on the card title and make up the bulk of the card's content.", categorias: ["Videojuegos"] },
    { titulo: "Titulo 4", contenido: "Some quick example text to build on the card title and make up the bulk of the card's content.", categorias: ["Videojuegos"] },
    { titulo: "Titulo 4", contenido: "Some quick example text to build on the card title and make up the bulk of the card's content.", categorias: ["Informativo"] },
];

const postContainer = document.getElementById("postContainer");

posts.forEach(post => {
    const { titulo, contenido, categorias } = post;
    postContainer.appendChild(createPostStructure(titulo, contenido, categorias));
});


function createPostStructure(titulo, contenido, categorias) {
    const divContainer = document.createElement("div");
    divContainer.className = "mb-3 card d-flex flex-row";

    const divImg = document.createElement("div");

    const img = document.createElement("img");
    img.classList = "card-img-left";
    img.src = "./images/computer-sm.jpg";

    const divBody = document.createElement("div");
    divBody.className = "card-body";

    const h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.innerText = titulo;

    const p = document.createElement("p");
    p.className = "card-text";
    p.innerText = contenido;

    const a = document.createElement("a");
    a.className = "btn btn-info stretched-link";
    a.innerText = "Leer";

    const divCategorias = document.createElement("div");
    divCategorias.className = "mt-2 gap-2 d-flex flex-row flex-wrap justify-content-end";
    categorias.forEach(categoria => {
        const span = document.createElement("span");
        span.className = "badge rounded-pill bg-info text-dark";
        span.textContent = categoria;
        divCategorias.appendChild(span);
    });

    divBody.appendChild(h5);
    divBody.appendChild(p);
    divBody.appendChild(a);
    divBody.appendChild(divCategorias);

    divImg.appendChild(img);

    divContainer.appendChild(divImg);
    divContainer.appendChild(divBody);
    
    divContainer.classList.add('cardFadeIn');

    return divContainer;
}

const categoriasButtons = document.querySelectorAll('#categoriasDiv > button');

categoriasButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoriasButtons.forEach(button => {
            button.classList.remove('active');
        });
        button.classList.add('active');
        const postFiltrados = posts.filter(post => post.categorias.includes(button.value));
        postContainer.innerHTML = "";
        postFiltrados.forEach(({titulo, contenido, categorias}) => {
            postContainer.appendChild(createPostStructure(titulo, contenido, categorias));
        });
    });
});
