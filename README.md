# Redux Toolkit Product Management Application
This project is a MERN (MongoDB, Express.js, React, Node.js) application that includes a server and client.
This project is a React application that uses Redux Toolkit for state management, along with Material-UI for styling. It includes features like fetching product data, adding products to a cart, and managing the cart state.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Folder Structure](#folder-structure)


## Installation

To get started with this project, clone the repository and install the necessary dependencies:


git clone (https://github.com/Uditha20/redux_tookit_learn)
cd your-repo-name
npm install

## Features
* Fetch product data from an API using Redux Toolkit Query
* Display products in a grid layout
* Add products to a shopping cart
* View items in the shopping cart
* Increase or decrease the quantity of items in the cart
* Remove items from the cart


## Folder Structure
```
├── server/
│ ├──  controller
│ ├──  Routes
│ ├──  Model
│ ├──  uploads
├──  index.js

├── client/
├── src/
│ ├── components/
│   	├── AppBarComponent.js
│   	├── CartPage.js
│   	├── Product.js
│   	├── ProductCard.js
│   	├── ProductForm.js
  ├──services/
│   	├── apiService.js
├── store/
│   	├── store.js
├── slice/
	├── cartSlice.js
├── App.js
├── index.js




