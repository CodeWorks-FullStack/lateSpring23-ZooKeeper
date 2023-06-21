const animals = [
  {
    name: "Tony",
    mood: "🥰",
    emoji: "🐅",
    hunger: 100
  },
  // Array of animal objects with their properties: name, mood, emoji, and hunger.
  // Each animal represents a specific animal in the zoo.

  // ...

]

let money = 0
// Variable to keep track of the money in the zoo.

// SECTION FEEDING ANIMAL

function feedAnimal(animalName) {
  // Function to feed an animal based on its name.
  
  let foundAnimal = animals.find(a => a.name == animalName)
  // Find the animal object in the 'animals' array that matches the provided name.
  
  if (foundAnimal.hunger < 100 && foundAnimal.hunger > 0) {
    foundAnimal.hunger++
  }
  // Increase the animal's hunger level if it's not already full and not starving.
  
  if (foundAnimal.hunger >= 100) {
    foundAnimal.hunger = 100
    console.log(`${animalName} is not hungry.`)
  }
  // Set the animal's hunger level to 100 if it was already full.
  
  updateAnimals(foundAnimal)
  // Update the animal's information on the webpage.
}

// SECTION STARVING ANIMAL

function hungerLevel() {
  // Function to decrease the hunger level of all animals.
  
  animals.forEach(a => {
    a.hunger -= 5
    if (a.hunger <= 0) {
      a.hunger = 0
    }
    updateAnimals(a)
  })
  // Decrease the hunger level of each animal by 5.
  // If the hunger level becomes negative, set it to 0.
  // Update the animal's information on the webpage.
}

// SECTION UPDATE ANIMAL

function updateAnimals(animal) {
  // Function to update the information of an animal on the webpage.
  
  updateMood(animal)
  // Update the mood of the animal based on its hunger level.
  
  let animalElem = document.getElementById(animal.name)
  // Get the HTML element of the animal using its name.
  
  let animalH5 = animalElem.querySelector('h5')
  let animalH1 = animalElem.querySelector('h1')
  let marquee1 = animalElem.querySelector('marquee')
  let marquee2 = animalElem.querySelector('marquee>marquee')
  // Get specific elements within the animal's HTML element.
  
  if (animal.hunger <= 0) {
    marquee1.stop()
    marquee2.stop()
  }
  // Stop the marquee effect if the animal's hunger level is 0 or less.
  
  updateHabitat()
  // Update the habitat of the animals on the webpage.
  
  animalH1.innerHTML = `<h1 onclick="feedAnimal('${animal.name}')" class="animal">${animal.emoji}</h1>`
  animalH5.innerText = `${animal.name} | ${animal.mood} | Hunger: ${animal.hunger}%`
  // Update the HTML content of the animal's name, mood, and hunger level.
}

function updateHabitat() {
  // Function to update the habitat class of each animal's marquee element.
  
  animals.forEach(a => {
    let animalElem = document.getElementById(a.name)
    let marquee1 = animalElem.querySelector('marquee')
    let test = marquee1.classList
    a.habitat == "water" ?  marquee1.classList.add("waterPin")  :
    a.habitat == "ice" ? marquee1.classList.add("icePin") : 
    a.habitat == "track" ? marquee1.classList.add("racePin") :
    marquee1.classList.add("zooPin")
  })
  // Get the HTML element and class of each animal's marquee.
  // Add the appropriate habitat class to the marquee based on the animal's habitat property.
}

function updateMood(animal) {
  // Function to update the mood of an animal based on its hunger level.
  
  if (animal.hunger >= 80) {
    animal.mood = "🥰"
  } else if (animal.hunger >= 60) {
    animal.mood = "🤗"
  } else if (animal.hunger >= 40) {
    animal.mood = "🙃"
  } else if (animal.hunger >= 20) {
    animal.mood = "🤢"
  } else if (animal.hunger > 0) {
    animal.mood = "🤮"
  } else {
    animal.mood = "☠️"
    animal.emoji = "🪦"
  }
  // Update the animal's mood and emoji based on its hunger level.
}

// SECTION INCOME

function getMoney() {
  // Function to calculate the money earned from animals in the zoo.
  
  let income = 0
  animals.forEach(animal => {
    switch (animal.mood) {
      case "🥰":
        income += 50
        break;
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
  // Calculate the income based on each animal's mood.
  
  money += income
  // Add the income to the total money.
  
  if (money >= 0) {
    document.getElementById('money').innerHTML = `<span>$${money}</span>`
  } else {
    document.getElementById('money').innerHTML = `<span class="text-danger">$${money}</span>`
  }
  // Update the money displayed on the webpage.
  
  if (income >= 0) {
    document.getElementById('income').innerHTML = `<span>$${income}</span>`
  } else {
    document.getElementById('income').innerHTML = `<span class="text-danger">$${income}</span>`
  }
  // Update the income displayed on the webpage.
}

// SECTION INTERVAL

setInterval(hungerLevel, 2000)
setInterval(getMoney, 4000)
// Execute the hungerLevel function every 2 seconds.
// Execute the getMoney function every 4 seconds.

updateHabitat()
// Update the habitat of the animals initially on the webpage.
