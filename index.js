let pokemonID
async function getAPI(pokemonID) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    const data = await res.json()
    console.log(data);
    render(data)
}

    const bulbasaurButton = document.createElement('button')
    bulbasaurButton.addEventListener('click', ()=> {
        pokemonID = 1;
        getAPI(pokemonID)
    })
    const bulbasaurImage = document.createElement('img')
    bulbasaurImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
    bulbasaurButton.appendChild(bulbasaurImage)



    const charmanderButton = document.createElement('button')
    charmanderButton.addEventListener('click', () => {
        pokemonID = 4;
        getAPI(pokemonID)
    })
    const charmanderImage = document.createElement('img')
    charmanderImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
    charmanderButton.appendChild(charmanderImage)



    const squirtleButton = document.createElement('button')
    squirtleButton.addEventListener('click', () => {
        pokemonID = 7;
        getAPI(pokemonID)
    })
    const squirtleImage = document.createElement('img')
    squirtleImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
    squirtleButton.appendChild(squirtleImage)



    const pokes = document.createElement('section')
    pokes.appendChild(bulbasaurButton)
    pokes.appendChild(charmanderButton)
    pokes.appendChild(squirtleButton)

    document.getElementById('pokeContainer').appendChild(pokes)



    function evolve(pokemonID){
        if (pokemonID >= 1 && pokemonID <= 8) {
            getAPI(++pokemonID)
        }else{
            getAPI(pokemonID)
        }
    }
    function devolve (pokemonID){
        if (pokemonID >= 2 && pokemonID <= 9) {
            getAPI(--pokemonID)
        }else {
            getAPI(pokemonID)
        }
    }

const render = (data) => {
    const dataContainer = document.createElement('div');

    const image = document.createElement('img');
    image.alt = "No gif found";
    image.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;


    const section = document.createElement('section');
    section.id = "card";


const name = document.createElement('h2');
name.id = "title"
name.textContent = data.name;

const typeText = document.createElement('p');
typeText.textContent = data.types[0].type.name;
typeText.id = "type"

const heightSection = document.createElement('section');
const heightTitle = document.createElement('h4');
heightTitle.textContent = "Height";
heightTitle.id = "heightTitle";
const heightText = document.createElement('p');
heightText.textContent = data.height;
heightText.id = "heightText";
heightSection.appendChild(heightTitle);
heightSection.appendChild(heightText);

const weightSection = document.createElement('section');
const weightTitle = document.createElement('h4');
weightTitle.textContent = "Weight";
weightTitle.id = "weightTitle";
const weightText = document.createElement('p');
weightText.textContent = data.weight;
weightText.id = "weightText";
weightSection.appendChild(weightTitle);
weightSection.appendChild(weightText);

const evolveButton = document.createElement('button');
evolveButton.textContent = "Evolve";
evolveButton.id = "evolve"
evolveButton.addEventListener('click', () => {
    evolve(data.id)
});

const devolveButton = document.createElement('button');
devolveButton.textContent = "Devolve";
devolveButton.id = "devolve"
devolveButton.addEventListener('click', () => {
    devolve(data.id)
});

section.appendChild(name);
section.appendChild(typeText);
section.appendChild(heightSection);
section.appendChild(weightSection);
section.appendChild(devolveButton);
section.appendChild(evolveButton);


dataContainer.appendChild(image);
dataContainer.appendChild(section);

document.getElementById('resultsContainer').appendChild(dataContainer);

}

