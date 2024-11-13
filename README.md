# 🎉 Joyeux anniversaire - Birthday Card Project 🎉

This project creates an interactive and fun web birthday card to celebrate your friend’s special day. Built with **HTML**, **CSS**, and **jQuery**, this web page includes progressive birthday wishes and an animated surprise to bring joy and smiles. 

## Project Structure

The project is organized as follows:
```
anniversaire/
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

- **Progressive Messages**: Three birthday messages that appear one after another with each click.
- **Responsive Surprise Animation**: 
  - On the final message click, the background changes based on the screen size.
    - **Tablet Size**: A festive birthday card image fills the background.
    - **Non-Tablet Devices**: The background cycles through joyful colors, creating a vibrant animation.
  - Additionally, an optional sound effect plays for a lively experience.
- **Customizable**: Easily update the background image, sound effect, and message texts for personalization.

## Setup and Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Nabakator/interactive_web_birthday_card.git
   cd interactive_web_birthday_card
   ```

2. **Open the Project**:
   Open `index.html` in your favorite web browser to see the birthday card in action.
   > *Tip*: Use VS Code's "Live Server" extension for an instant preview.

4. **Customizations**:
   - **Messages**: Edit the birthday messages directly in `index.html`.
   - **Sound Effect**: Replace the audio source URL in `index.html` with any `.mp3` file of your choice.
   - **Background Image**: Change the background URL in `styles.css` under `.animate-bg` for the tablet-sized experience.

## Technologies Used

- **HTML** - for structuring the birthday card.
- **CSS** - for styling and animations.
- **jQuery (JavaScript)** - for interactive functionality.

## File Breakdown

- **`index.html`**: Contains the main HTML structure and links to CSS and JavaScript files.
- **`css/styles.css`**: Defines the layout, colors, and animations for the card, including responsive effects.
- **`js/anniversaire.js`**: Handles the jQuery functionality for progressive message display, responsive background effects, and sound effect.

## Screenshots

![screenshot](source/images/interactive_web_birthday_card_screenshot.png)

## License

This project is open-source and available under the MIT License.

---

### Happy Coding! 🥳
