const animals = [
  {
    name: "Tony",
    mood: "🥰",
    emoji: "🐅",
    hunger: 100
  },
  {
    name: "Harambe",
     mood: "🥰",
    emoji: "🦍",
    hunger: 100
  },
  {
    name: "Ysera",
    mood: "🥰",
    emoji: "🐉",
    hunger: 100
  },
  {
    name: "Thux",
    mood: "🥰",
    emoji: "🐧",
    hunger: 100,
    habitat: "ice"
  },
  {
    name: "Roth",
    mood: "🥰",
    emoji: "🦥",
    hunger: 100
  },
  {
    name: "Ned",
    mood: "🥰",
    emoji: "🐙",
    hunger: 100,
    habitat: "water"
  },
  {
    name: "Kevin",
    mood: "🥰",
    emoji: "🦚",
    hunger: 100
  },
  {
    name: "Rango",
    mood: "🥰",
    emoji: "🦎",
    hunger: 100,
    habitat: "track"
  },
]

let money = 0

// SECTION FEEDING ANIMAL

function feedAnimal(animalName) {
  let foundAnimal = animals.find(a => a.name == animalName)
  // console.log('FOUND ANIMAL', foundAnimal);
  if(foundAnimal.hunger < 100 && foundAnimal.hunger > 0) {
    console.log(foundAnimal)
    foundAnimal.hunger ++
  }
  if(foundAnimal.hunger >= 100) {
    foundAnimal.hunger = 100
    console.log(`${animalName} is not hungry.`);
  }
  // console.log('FEEDING', foundAnimal)
  updateAnimals(foundAnimal)
}

// SECTION STARVING ANIMAL

function hungerLevel() {
  animals.forEach(a => {
    a.hunger -= 5
    if(a.hunger <= 0) {
      a.hunger =0
    }
    updateAnimals(a)
  })
  // console.log(animals[0])
}

// SECTION UPDATE ANIMAL

function updateAnimals(animal) {

  updateMood(animal)
  let animalElem = document.getElementById(animal.name)
  let animalH5 = animalElem.querySelector('h5')
  let animalH1 = animalElem.querySelector('h1')

  let marquee1 = animalElem.querySelector('marquee')
  let marquee2 = animalElem.querySelector('marquee>marquee')



  if(animal.hunger <= 0) {
  marquee1.stop()
  marquee2.stop()
  }
  // console.log('Tonys H5', tonyH5)
  updateHabitat()

  animalH1.innerHTML = `<h1 onclick="feedAnimal('${animal.name}')" class="animal">${animal.emoji}</h1>`
  animalH5.innerText = `${animal.name} | ${animal.mood} | Hunger: ${animal.hunger}%`
  // console.log('TONY ELEM', tonyElem)

}

function updateHabitat() {
  animals.forEach(a => {
    let animalElem = document.getElementById(a.name)
    let marquee1 = animalElem.querySelector('marquee')
    let test = marquee1.classList
    console.log('CLASS LIST TEST', test);
    a.habitat == "water" ?  marquee1.classList.add("waterPin")  :
    a.habitat == "ice" ? marquee1.classList.add("icePin") : 
    a.habitat == "track" ? marquee1.classList.add("racePin") :
    marquee1.classList.add("zooPin")
  })
}

function updateMood(animal) {
  if(animal.hunger >= 80) {
    animal.mood = "🥰"
  } else if(animal.hunger >= 60) {
    animal.mood = "🤗"
  } else if(animal.hunger >= 40) {
    animal.mood = "🙃"
  } else if(animal.hunger >= 20) {
    animal.mood = "🤢"
  } else if(animal.hunger > 0) {
    animal.mood = "🤮"
  } else {
    animal.mood = "☠️"
    animal.emoji = "🪦"
  }

}

// SECTION INCOME

function getMoney() {
  let income = 0
  animals.forEach(animal => {
    switch(animal.mood) {
      case "🥰":
        income += 50
        break;
      // if(animal.mood == "🥰") {
      //   income += 50
      // }
      case "🤗":
        income += 30
        break;
      case "🙃":
        income += 5
        break;
      case "🤢":
        income -= 5
        break;
      case "🤮":
        income -= 30
        break;
      default:
        income -= 50
    }
  })
    money += income

    if(money >= 0) {
      document.getElementById('money').innerHTML = `<span>$${money}</span>`
    } else {
    document.getElementById('money').innerHTML = `<span class="text-danger">$${money}</span>`
    }

    if(income >= 0) {
      document.getElementById('income').innerHTML = `<span>$${income}</span>`
    } else {
    document.getElementById('income').innerHTML = `<span class="text-danger">$${income}</span>`
    }

}

// SECTION INTERVAL

setInterval(hungerLevel, 2000)
setInterval(getMoney, 4000)

updateHabitat()