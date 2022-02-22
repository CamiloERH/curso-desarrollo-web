const postContainer = document.getElementById('postContainer');

for(let i = 0; i < 4; i++){
    postContainer.appendChild( createPostStructure() );
}

function createPostStructure() {
    const divContainer = document.createElement('div');
    divContainer.className = 'mb-3 card d-flex flex-row';

    const img = document.createElement('img');
    img.classList = 'card-img-left';
    img.style.width = '18rem';
    img.src = './images/rsz_1pexels-lukas-574071.jpg';2

    const divBody = document.createElement('div');
    divBody.className = 'card-body';

    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = 'Chequea este curso de Programación';

    const p = document.createElement('p');
    p.className = 'card-text';
    p.innerText = "Some quick example text to build on the card title and make up the bulk of the card's content";

    const a = document.createElement('a');
    a.className = 'btn btn-primary stretched-link';
    a.innerText = 'Leer';

    divBody.appendChild(h5);
    divBody.appendChild(p);
    divBody.appendChild(a);

    divContainer.appendChild(img);
    divContainer.appendChild(divBody);
    
    return divContainer;
}
