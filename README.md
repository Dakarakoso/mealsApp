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

You should have node installed. Learn more [here](https://nodejs.org/en/download/)

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

Additional screenshots, code examples and demos work well in this space also link to more resources.


