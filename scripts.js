function getRandomInt() {
  return Math.floor(Math.random() * 898)
}

const getMon = async () =>{
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomInt()}`)
    const typeUrl = response.data.types[0].type.url
    const typeResponse = await axios.get(typeUrl)
    console.log(response.data.types[0].type.name)



    pokemontypeheader = document.createElement('div');
    pokemonlinebreak = document.createElement('br')
    pokemontypeheader.innerHTML = `YOUR POKEMON TEAM TYPE IS ${response.data.types[0].type.name.toUpperCase()}`
    let parentDiv = document.getElementById('button')
      if (parentDiv) {
        parentDiv.append(pokemonlinebreak)
        parentDiv.append(pokemontypeheader)
      }

    for(i=0; i<6; i++) {
      let newpokemon = typeResponse.data.pokemon[Math.floor(Math.random() * typeResponse.data.pokemon.length)].pokemon.url
      let pokemon = await axios.get(newpokemon)
      let pokemonimage = document.createElement("img")
      console.log(pokemon)
      textandimage = document.createElement('div')
      pokemonimage.src = pokemon.data.sprites.front_default
      pokemonimage.style = 'height: 200px; border: 2px solid green;'
      textandimage.append(pokemonimage)
      pokemonname = pokemon.data.name.toUpperCase()
      pokemonnames = document.createElement('div')
      pokemonnames.innerHTML=pokemonname
      textandimage.append(pokemonnames)
      let parentDiv = document.getElementById("pokemon-team")
        if (parentDiv) {
          parentDiv.append(textandimage)
        }   
      
      // let pokemondiv = document.getElementById("pokemon-names")
      //   if (pokemondiv) {
      //     pokemondiv.append(pokemonnames)
      //   }

    // // response.data.sprites.front_default
    // // response.data.types[0].type.typeUrl

    // response.pokemon[Math.random() * length(response.pokemon)]
    // console.log()

    // let pokemonimage = document.createElement("img")
    // let linebreak = document.createElement("br")
    // pokemonimage.src = typeUrl
    // pokemonimage.style = 'height: 150px'

    // let parentDiv = document.getElementById("pokemon team")
    // if (parentDiv) {
    //   parentDiv.append(linebreak)
    //   parentDiv.append(pokemonimage)
    // }
}
}

getMon()