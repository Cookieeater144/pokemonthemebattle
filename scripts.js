function getRandomInt() {
  return Math.floor(Math.random() * 898)
}

const getMon = async ()=>{
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomInt()}`)
    const typeUrl = response.data.types[0].type.url
    const typeResponse = await axios.get(typeUrl)

    for(i=0; i<6; i++) {
      let newpokemon = typeResponse.data.pokemon[Math.floor(Math.random() * typeResponse.data.pokemon.length)].pokemon.url
      let pokemon = await axios.get(newpokemon)
      let pokemonimage = document.createElement("img")
      let linebreak = document.createElement("br")
      console.log(pokemon)
      pokemonimage.src = pokemon.data.sprites.front_default
      pokemonimage.style = 'height: 130px; border: 2px solid green'

      let parentDiv = document.getElementById("pokemon team")
        if (parentDiv) {
          parentDiv.append(linebreak)
          parentDiv.append(pokemonimage)
        }   

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