 ![Meals To Go App](https://github.com/Dakarakoso/mealsApp/blob/main/assets/2021-09-01%2019.57.49.gif)






<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Meals To Go App](https://github.com/Dakarakoso/mealsApp/blob/main/assets/2021-09-01%2019.36.03.gif)

Describe the project here
.
.
.
.
.
.
.
.

### Built With

* [expo](https://docs.expo.dev/)
* [React Native](https://reactnative.dev/docs/getting-started)
* [Yarn](https://yarnpkg.com/)
* [Npm](https://www.npmjs.com/)
* [Firebase](https://firebase.google.com/docs)
* [Node](https://nodejs.org/en/docs/)
* [Stripe](https://stripe.com/docs)
* [Google Cloud Platform](https://cloud.google.com/docs)



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you set up to run locally.To get a local copy up and running follow these simple example steps.

### Prerequisites

You should have node installed.

* npm
  ```sh
  npm install npm@latest -g
  ```
 you also need to install firebase CLI learn more [here](https://github.com/firebase/firebase-tools)
   
   

### Installation

2. Clone the repo
   ```sh
   git clone https://github.com/Dakarakoso/mealsApp.git
   ```
   
3. Go into the project repo
```sh
cd mealsApp
```
4. Install NPM packages or YARN packages
   ```sh
   npm install
   
   or
   
   yarn 
   ```
   
5. Then cd into /functions and install NPM packages or YARN packages
   ```sh
   npm install
   
   or
   
   yarn 
   ```
   
6.Set environment configuration for google and stripe

```sh
firebase functions:config:set google.key="THE API KEY" 
firebase functions:config:set stripe.key="THE API KEY" 
```
7.Now run this command in order to be able to run locally

```sh
firebase functions:config:get > .runtimeconfig.json
```

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
