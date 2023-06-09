**index.html:**

This file represents the structure and layout of the webpage. It includes the following key elements:

- Bootstrap CSS: The `<link>` tag includes the Bootstrap CSS library from a CDN (Content Delivery Network). This allows you to utilize predefined CSS styles and components provided by Bootstrap.
- Custom CSS: The `<link>` tag references the `styles.css` file, which contains additional custom CSS styles specific to the webpage. This file is used to override or extend the default styles provided by Bootstrap.
- Material Design Icons CSS: The `<link>` tag includes the Material Design Icons CSS library from a CDN. This provides access to a wide range of icons that can be used in the webpage.
- Title: The `<title>` tag sets the title of the webpage to "Zoo Keepers".

Within the body of the HTML, you'll find the main sections of the webpage:

**Header Section:**

This section contains a header element with a row that consists of two columns. The first column contains the heading "Zoo Keeper," representing the title of the application. The second column displays the money and income information using `<p>` tags and `<span>` elements to dynamically update the values.

**Main Section:**

This section contains a main element with a row that is centered using the `justify-content-center` class. Within this row, several animal sections are defined. Each animal section represents an individual animal in the zoo and consists of a `<div>` element with a unique ID, a marquee effect, an animal icon (represented by a Unicode emoji), and information about the animal's name and hunger level.

The `<script>` tag at the end of the HTML file references the `app.js` file, allowing the JavaScript code to be executed and interact with the HTML elements.

**styles.css:**

This file contains custom CSS styles to modify the appearance and layout of the webpage. Some notable styles include:

- `.zooPin`: This class is applied to the marquee elements within the animal sections. It sets the height to 30% of the viewport height, the width to 100% of the container, and applies a background image using the provided URL. This style creates a consistent visual representation for the animal habitats in the zoo.
- `.text-danger`: This class sets the text color to red, indicating a negative or unfavorable value. It is used in the `getMoney()` function to display negative values in red for both money and income.

These styles help customize the visual appearance of the webpage and create a cohesive design.

**app.js:**

This file contains the JavaScript code responsible for the interactive behavior and logic of the webpage. It interacts with the HTML elements and applies dynamic changes based on user interactions or timers.

Key interactions and functions include:

- `feedAnimal(animalName)`: This function is called when an animal icon is clicked. It finds the corresponding animal object from the animals array based on the provided animal name. It then updates the animal's hunger level, increases it if it's not full, sets it to 100 if already full, and calls the `updateAnimals()` function to update the animal's information on the webpage.
- `hungerLevel()`: This function is executed periodically using `setInterval()`. It decreases the hunger level of all animals by 5 units and calls the `updateAnimals()` function to update the animal information on the webpage. It ensures the hunger levels are gradually reduced over time.
- `updateAnimals(animal)`: This function updates the information of an animal on the webpage. It updates the animal's mood by calling the `updateMood()` function, updates the HTML content of the corresponding animal section, and calls the `updateHabitat()` function to update the habitat representation of all animals on the webpage.
- `updateHabitat()`: This function updates the habitat class of each animal's marquee element based on their habitat property. It adds specific classes to the marquee element to represent different habitats, such as "grassland", "aquatic", or "jungle". These classes are defined in the `styles.css` file and help visually distinguish between different animal habitats.
- `updateMood(animal)`: This function updates the mood of an animal based on its hunger level. It determines the mood and corresponding emoji of the animal based on specific hunger level ranges. For example, if the hunger level is less than or equal to 20, the animal is considered "Happy" and displayed with a smiling face emoji.
- `getMoney()`: This function calculates the money earned from animals in the zoo based on their moods. It iterates over the animals array and checks the mood of each animal. Based on the mood, it increments the money variable accordingly. It also updates the total money and income displayed on the webpage.

The `setInterval()` functions are used to schedule the periodic execution of the `hungerLevel()` and `getMoney()` functions. They ensure that the hunger levels decrease over time and the money calculations are updated at regular intervals.

By combining these interactions and functions, the webpage provides a simulated zoo-keeping experience. Users can click on animal icons to feed them, observe changes in hunger levels and moods, and see the total money and income generated by the zoo.
