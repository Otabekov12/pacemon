var elForm = document.querySelector("form");
var elList = document.querySelector(".pokemon__list");
var elName = document.querySelector('.input[name = "name"]');
var elType = document.querySelector('.input[name = "type"]');
var elWeight = document.querySelector('.input[name = "weight"]');
var elHeight = document.querySelector('.input[name = "height"]');
var elUrl = document.querySelector('input[name = "url"]');

function renderPokemon(_pokemons) {
  elList.innerHTML = null;

  for (var i = 0; i < _pokemons.length; i++) {
    //Create film's elements

    var newLi = document.createElement("li");
    var newInner = document.createElement("div");
    var newImg = document.createElement("img");
    var newBottom = document.createElement("div");
    var newHeading = document.createElement("h3");
    var newType = document.createElement("p");
    var newWeight = document.createElement("p");
    var newHeight = document.createElement("p");

    //Set Attributes

    newLi.setAttribute("class", "pokemon__item   col-lg-3 col-md-4 col-12");
    newInner.setAttribute(
      "class",
      "pokemon__inner bg-white border border-3 border-dark"
    );
    newImg.setAttribute("class", "d-block pokemon__img mx-auto mb-3");
    newImg.setAttribute("src", _pokemons[i].img);
    newImg.setAttribute("alt", _pokemons[i].name + " poster");
    newImg.setAttribute("width", 157);
    newImg.setAttribute("height", 157);
    newBottom.setAttribute(
      "class",
      "pokemon__bottom p-4 border-top border-3 border-dark"
    );
    newHeading.setAttribute("clsss", "pokemon__heading");
    newType.setAttribute("class", "type__paragraph");
    newWeight.setAttribute("class", "weight__paragraph ");
    newHeight.setAttribute("class", "height__paragraph");

    //Assign values

    newHeading.textContent = _pokemons[i].name;
    newType.textContent = _pokemons[i].type;
    newWeight.textContent =
      _pokemons[i].weight + " kg" + "  " + _pokemons[i].height + " m";

    //Append

    newLi.appendChild(newInner);
    newInner.appendChild(newImg);
    newInner.appendChild(newBottom);
    newBottom.appendChild(newHeading);
    newBottom.appendChild(newType);
    newBottom.appendChild(newWeight);
    newBottom.appendChild(newHeight);
    elList.appendChild(newLi);
  }
}

function addNewPokemon(name, type, weight, height, url, pokemonList) {
  var newPokemonName = name.value.trim();
  var newPokemonType = type.value.trim();
  var newPokemonWeight = weight.value.trim();
  var newPokemonHeight = height.value.trim();
  var newPokemonUrl = url.value.trim();

  var newPokemon = {
    name: newPokemonName,
    type: newPokemonType,
    weight: newPokemonWeight,
    height: newPokemonHeight,
    img: newPokemonUrl,
  };

  pokemonList.unshift(newPokemon);
}

function renderNewPokemon(evt) {
  evt.preventDefault();

  addNewPokemon(elName, elType, elWeight, elHeight, elUrl, pokemons);

  renderPokemon(pokemons);
}

elForm.addEventListener("submit", renderNewPokemon);

renderPokemon(pokemons);
