const posts = [
	{
		titulo: "Lolapalooza Chile 2022",
		contenido:
			"Recomendaciones para asistir al evento, horarios, escenarios, encuentra toda la información aquí...",
		imgSrc: "https://images.unsplash.com/photo-1551909496-d9d4a69d4ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
		href: "./posts/post1.html",
		categorias: ["musica", "informativo"],
	},
	{
		titulo: "Testeando la nueva Steam Deck",
		contenido:
			"He obtenido la nueva Steam Deck antes de su lanzamiento, he estado probando juegos de mi biblioteca de Steam...",
		imgSrc: "https://images.unsplash.com/photo-1640955045488-9a4bdad646d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
		href: "./posts/post4.html",
		categorias: ["informativo", "videojuegos"],
	},
	{
		titulo: "Mi análisis sobre Elden Ring",
		contenido:
			"He estado jugando Elden Ring durante toda esta semana, a continuación escribiré mi reseña del juego...",
		imgSrc: "https://images.unsplash.com/photo-1559969143-b2defc6419fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
		href: "./posts/post2.html",
		categorias: ["videojuegos"],
	},
	{
		titulo: "Mi nuevo setup con RTX 3080",
		contenido:
			"Hola comunidad, les dejare una review de como es el rendimiento de juegos lanzados recientemente con esta tarjeta gráfica...",
		imgSrc: "https://images.unsplash.com/photo-1577375729078-820d5283031c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
		href: "./posts/post5.html",
		categorias: ["videojuegos"],
	},
	{
		titulo: "Reproducciones de “Something In The Way” se elevan gracias a The Batman",
		contenido:
			"La canción de Nirvana aumentó en un 1000% sus reproducciones en Spotify.",
		imgSrc: "https://images.unsplash.com/photo-1551909496-d9d4a69d4ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
		href: "./posts/post6.html",
		categorias: ["informativo", "musica"],
	},
	{
		titulo: "Lista de webs útiles para la Universidad",
		contenido:
			"A continuación les va una lista de paginas web utiles que seguro les serán utiles para la Universidad...",
		imgSrc: "https://images.unsplash.com/photo-1636297461709-0812290a9dcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
		href: "./posts/post3.html",
		categorias: ["informativo"],
	},
	{
		titulo: "¿Recomiendan CoderHouse?",
		contenido:
			"Quiero aprender sobre programación y desarrollo web, ¿Recomiendan cursar en la plataforma CoderHouse?",
		imgSrc: "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
		href: "./posts/post7.html",
		categorias: ["programacion"],
	},
];

const categoriasMap = {
    'programacion': 'Programación',
    'videojuegos': 'Videojuegos',
    'informativo': 'Informativo',
    'musica': 'Música'
}

const postContainer = document.getElementById("postContainer");

posts.forEach((post) => {
	const { titulo, contenido, imgSrc, href, categorias } = post;
	postContainer.appendChild(
		createPostStructure(titulo, contenido, imgSrc, href, categorias)
	);
});

function createPostStructure(titulo, contenido, imgSrc, href, categorias) {
	const divContainer = document.createElement("div");
	divContainer.className = "mb-3 card d-flex flex-row overflow-hidden";

	const img = document.createElement("img");
	img.classList = "card-img-left";
	img.src = imgSrc;
	const divBody = document.createElement("div");
	divBody.classList = "card-body d-flex flex-column justify-content-between";

	const h5 = document.createElement("h5");
	h5.className = "card-title";
	h5.innerText = titulo;

	const p = document.createElement("p");
	p.className = "card-text";
	p.innerText = contenido;

	const a = document.createElement("a");
	a.classList = "btn btn-outline-primary stretched-link mt-2";
	a.textContent = 'Leer';
	a.href = href;

	const divCategorias = document.createElement("div");
	divCategorias.className =
		"mt-2 gap-2 d-flex flex-row flex-wrap justify-content-end";
	categorias.forEach((categoria) => {
		const span = document.createElement("span");
		span.className = "badge rounded-pill bg-info text-dark";
		span.textContent = categoriasMap[categoria];
		divCategorias.appendChild(span);
	});

	
	divBody.appendChild(h5);
	divBody.appendChild(p);
	divBody.appendChild(divCategorias);
	divBody.appendChild(a);

	

	divContainer.appendChild(img);
	divContainer.appendChild(divBody);

	divContainer.classList.add("cardFadeIn");

	return divContainer;
}

const categoriasButtons = document.querySelectorAll("#categoriasDiv > button");

categoriasButtons.forEach((button) => {
	button.addEventListener("click", () => {
		categoriasButtons.forEach((button) => {
			button.classList.remove("active");
		});
		button.classList.add("active");
		let postFiltrados = [];
		if(button.value){
			postFiltrados = posts.filter((post) =>
				post.categorias.includes(button.value)
			);
		} else {
			postFiltrados = [...posts];
		}
		postContainer.textContent = "";
		postFiltrados.forEach(({ titulo, contenido, imgSrc, href, categorias }) => {
			postContainer.appendChild(
				createPostStructure(titulo, contenido, imgSrc, href, categorias)
			);
		});
	});
});

const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
});

let categoria = params.categoria;
if(categoria){
    categoriasButtons.forEach((button) => {
        if( button.value === categoria ){
            button.click();
        }
    });
    window.scrollTo({ top: 500, behavior: 'smooth' });
}


