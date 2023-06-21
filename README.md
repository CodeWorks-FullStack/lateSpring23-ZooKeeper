## index.html

The HTML file is the main file of the web application. It contains the structure and content of the webpage.

### File Structure

- The `<!DOCTYPE html>` declaration specifies the document type as HTML5.
- The `<html>` element is the root element of the HTML document.
- The `<head>` section contains meta information and external resources used by the webpage.
- The `<meta>` tags provide metadata about the document, such as character encoding and viewport settings.
- Several CSS and Material Design Icons libraries are included using `<link>` tags with their respective URLs.
- The `<title>` element sets the title of the webpage displayed in the browser's title bar.
- The `<body>` element represents the main content of the webpage.

### Page Layout

- The webpage is divided into a header section and a main section using the `<header>` and `<main>` elements, respectively.
- The header section contains the application heading and displays the money and income information.
- The main section contains a grid of animal sections, each representing a specific animal in the zoo.
- Each animal section is structured using `<div>` elements and includes a marquee effect for the animal's name, an animal icon, and information about the animal.

### Script Inclusion

- The `<script>` tag includes the JavaScript file `app.js` to add dynamic functionality to the webpage.

## app.js

The JavaScript file contains the logic and functions for the zookeeping application.

### Data and Variables

- The `animals` array holds objects representing each animal in the zoo, including properties like name, mood, emoji, and hunger level.
- The `money` variable is used to keep track of the money in the zoo.

### Functions

- The file defines several functions to interact with the animals and update their information on the webpage.
- The `feedAnimal` function is called when an animal is clicked, and it increases the animal's hunger level if it's not already full.
- The `hungerLevel` function decreases the hunger level of all animals periodically.
- The `updateAnimals` function updates the information of an animal on the webpage, including its mood, hunger level, and HTML content.
- The `updateHabitat` function updates the habitat class of each animal's marquee element based on its habitat property.
- The `updateMood` function updates the mood and emoji of an animal based on its hunger level.
- The `getMoney` function calculates the money earned from animals in the zoo based on their moods and updates the money and income displayed on the webpage.
- The `setInterval` functions are used to execute the `hungerLevel` and `getMoney` functions at regular intervals.
- The `updateHabitat` function is called to initially update the habitat of the animals on the webpage.

## styles.css

The CSS file contains styles for the webpage's appearance.

### Style Definitions

- The `.test` class applies a background color of antiquewhite and sets the text color to purple.
- The `.zooPin` class sets the height to 30% of the viewport height, applies a background image, and sets the background size to contain.
- The background image URL represents a green meadow grass texture.
- The `background-image` property sets the background image of the `.zooPin` class.
- The `background-size` property sets how the background image should be sized within the element.
