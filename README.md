# 🎉 Joyeux anniversaire - Interactive Web Birthday Card Project 🎉

This project creates an interactive and fun web birthday card to celebrate your friend’s special day. Built with **HTML**, **CSS**, and **jQuery (JavaScript)**, this web page includes progressive birthday wishes and an animated surprise to bring joy and smiles. 

## Project Structure

The project is organised as follows:
```
interactive_web_birthday_card/
├── index.html            # Main HTML file containing structure and content
├── css/
│   └── styles.css        # CSS file with styling and animations
└── js/
│   └── anniversaire.js   # JavaScript file with jQuery interactions
└── source/
    └── images/           # Folder containing images
    └── audio/            # Folder containing audio files
```

## Features

- **Progressive messages**: Three birthday messages that appear one after another with each click.
- **Responsive surprise animation**: 
  - On the final message click, the background changes based on the screen size.
    - **Tablet size**: A festive birthday card image fills the background.
    - **Non-Tablet devices**: The background cycles through joyful colours, creating a vibrant animation.
  - Additionally, an optional sound effect plays for a lively experience.
- **Customisable**: Easily update the background image, sound effect, and message texts for personalisation.

## Setup and Usage

1. **Clone the repo**:
   ```bash
   git clone https://github.com/Nabakator/interactive_web_birthday_card.git
   cd interactive_web_birthday_card
   ```

2. **Open the project**:
   Open `index.html` in your favourite web browser to see the birthday card in action.
   > *Tip*: Use VS Code's "Live Server" extension for an instant preview.

4. **Customisations**:
   - **Messages**: Edit the birthday messages directly in `index.html`.
   - **Sound effect**: Replace the audio source URL in `index.html` with any `.mp3` file of your choice.
   - **Background image**: Change the background URL in `styles.css` under `.animate-bg` for the tablet-sized experience.

## Technologies Used

- **HTML** - for structuring the birthday card.
- **CSS** - for styling and animations.
- **jQuery (JavaScript)** - for interactive functionality.

## File Breakdown

- **`index.html`**: Contains the main HTML structure and links to CSS and JavaScript files.
- **`css/styles.css`**: Defines the layout, colours, and animations for the card, including responsive effects.
- **`js/anniversaire.js`**: Handles the jQuery functionality for progressive message display, responsive background effects, and sound effect.

## Screenshots

![screenshot](source/images/interactive_web_birthday_card_screenshot.png)

## License

This project is open-source and available under the MIT License.

---

### Happy Coding! 🥳
