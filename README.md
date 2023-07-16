# Frontend Mentor - Rock, Paper, Scissors

This project was created thanks to the resources provided by Frontend Mentor (frontendmentor.io), a website that offers challenges for frontend developers. Frontend Mentor offers a wide range of design challenges that help developers enhance their skills by building real-world projects. The platform provides design files and detailed specifications for each challenge, allowing developers to practice and showcase their abilities in HTML, CSS, and JavaScript. The project's completion is a result of leveraging the valuable resources and support provided by Frontend Mentor.

This is a React JS project that emulates the classic game of "Rock, Paper, Scissors" but with an additional twist: now you can play with the "Lizard" and "Spock" options too!

The game is fully interactive and allows users to select an option from the five available choices: Rock, Paper, Scissors, Lizard, or Spock. The player then competes against the computer, which randomly selects an option. The game determines the winner based on the rules of the original "Rock, Paper, Scissors" game, as well as the additional rules for the new "Lizard" and "Spock" options.

## Technologies Used

The project has been developed using the following technologies:

- React JS: a JavaScript framework for building interactive user interfaces.
- HTML and CSS: for the structure and styling of the game.
- JavaScript: for the game logic and user interaction.

## Prerequisites

Make sure you have Node.js installed on your system before running the project. You can download and install it from https://nodejs.org.

## Project Setup

Follow the steps below to set up the project in your local environment:

- Clone the project repository from GitHub:
- bash
- Copy code
- git clone https://github.com/your-username/rock-paper-scissors-lizard-spock.git
- Navigate to the project directory:
- bash
- Copy code
- cd rock-paper-scissors-lizard-spock
- Install the project dependencies:
- Copy code
- npm install
- Start the application:
- sql
- Copy code
- npm start
- Open your web browser and visit http://localhost:3000 to play the game.

## How to Play

Once the game is loaded in your browser, you'll see the available options: Rock, Paper, Scissors, Lizard, and Spock.

Click on the option you want to choose.

The computer will randomly select an option.

The game will determine the winner based on the rules. A message will be displayed on the screen indicating whether you won, lost, or it's a tie.

You can play again by clicking the "Play Again" button.

## Customizing the Game

If you want to customize the game or add new features, you can explore the source code located in the src folder. Here you'll find the React components used to build the game, as well as the game logic in the GameLogic.js file.

Feel free to modify the code according to your needs and experiment with new ideas.

Contributions
Contributions are welcome! If you want to improve this project, you can submit your proposals through issues or pull requests on the GitHub repository.

License
This project is licensed under the MIT License, which means you can use it for free, even for commercial purposes. However, it is provided without any warranty.

# Original README

![Design preview for the Rock, Paper, Scissors coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this Rock, Paper, Scissors game and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Rules

If the player wins, they gain 1 point. If the computer wins, the player loses one point.

#### Original

- Paper beats Rock
- Rock beats Scissors
- Scissors beats Paper

#### Bonus

- Scissors beats Paper
- Paper beats Rock
- Rock beats Lizard
- Lizard beats Spock
- Spock beats Scissors
- Scissors beats Lizard
- Paper beats Spock
- Rock beats Scissors
- Lizard beats Paper
- Spock beats Rock

Not sure what Rock, Paper, Scissors, Lizard, Spock is? [Check out this clip from The Big Bang Theory](https://www.youtube.com/watch?v=iSHPVCBsnLw).

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You can either choose the `original` designs for the simpler version or the `bonus` designs for the harder version. You will find both mobile and desktop versions of the design to work to. Each file is also named depending on which step in the game the design is for.

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

If you would like the design files (we provide Sketch & Figma versions) to inspect the design in more detail, you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

You will find all the required assets in the `/images` folder. The assets are already optimized.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommend hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Create a custom `README.md`

We strongly recommend overwriting this `README.md` with a custom one. We've provided a template inside the [`README-template.md`](./README-template.md) file in this starter code.

The template provides a guide for what to add. A custom `README` will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the `README-template.md` file to `README.md`. That will make it show up as your repository's README file.

## Submitting your solution

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of the [Slack community](https://www.frontendmentor.io/slack). 
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback. 

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.


_______________________________________________________________________
