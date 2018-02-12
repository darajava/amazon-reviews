# Amazon reviews

## Setup
Setup is straightforward if you have `node` and `npm` installed. It should be as simple as a quick `npm i && npm start` !

## Architecture
The main technologies used in this project are React for layout and Redux for data synchronisation between UI components. This project was bootstrapped with `create-react-app`. Since this isn't a production build, there were some technologies that I didn't need to utilise (such as `react-router`). And there were some practises that I didn't feel like I needed to use (such as creating a `mainLayout` component, creating tests, etc). 

The architecture here is relatively simple: There are two main components which hold the filters and the search results. The filter component writes to the Redux store and the search results components reads from it and fetches results as appropriate. Since we use Redux, we can update the entire UI in real time as the user is changing the filters.

Components are split up into `views` and `modules`, of which the views control the presentation logic, and the modules control the functional logic. I find that this is a really good way to separate concerns and be left with clean, modular code. Presentation components are styled with the awesome [CSSModules](https://github.com/css-modules/css-modules) package.

This code isn't production ready, but I believe that it's a good showcase of my ability in React/Redux. There are limitations which I would be happy to discuss if you would like to chat further about this.

## Demo
You can find a demo at [darajava.ie:3000](http:darajava.ie:3000) 
