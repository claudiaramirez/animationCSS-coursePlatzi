import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/animations.css';
import './css/invie.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';

// import logoPortada from './images/invie.png';
import logoPortada from './images/platzi.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import cheeet from 'cheet.js';

import easterA from './images/easter-a.png';
import easterB from './images/easter-b.png';


const initialState = {
  isAnimated: false,

  menu:[
 {
   href: 'index.html',
   title: 'Home',
 },
 {
   href: '#guitarras',
   title: 'Guitarras',
 },
 {
   href:'precios.html',
   title:'Precios',
 },
 {
   href:'hola.html',
   title:'DO NOT',
 },
 ],
 logoPortada: logoPortada,

 guitarras: [
  {
   image: acustica,
   alt: 'Guitarra Invie Acustica',
   name: 'Invie Acustica',
   features: [
    'Estilo vintage',
    'Madera pura',
    'Incluye estuche invisible de aluminio',
   ]
  },
  {
   image: classic,
   alt: 'Guitarra Invie Classic',
   name: 'Invie Classic',
   features: [
    'Estilo vintage',
    'Liviana',
    'Empieza tu camino como rockstar',
   ]
  }
]
 
}

function reducer(state, action){
  switch(action.type){
    case 'UPDATE_PROPS':{
      const newProps = action.payload.props;
      return{...state, ...newProps}
    }
      default:
        return state

  }

}
const store= createStore(reducer, initialState);

const easter ={
  isAnimated: 'is-animated',
  menu:[
    // {
    //   href:'index.html',
    //   title:'Home'
    // }, 
  ],
  guitarras: [
    {
     image: easterA,
     alt: 'Guitarra padre de familia',
     name: 'Invie Familiar',
     features: [
      'Lista para copiar a los Simpsons',
      'Aire puro',
      'Chistes malos',
     ]
    },
    {
     image: easterB,
     alt: 'Guitarra Invie Classic',
     name: 'Invie Classic',
     features: [
      'Estilo vintage',
      'Liviana',
      'Empieza tu camino como rockstar',
     ]
    }
  ]
}

cheeet('i n v i e',()=>{
  store.dispatch({
    type:'UPDATE_PROPS',
    payload:{
      props: easter
    }  
  });
  // console.log('ok');
  
});

cheeet('g o',()=>{
  // console.log('ok2');
  store.dispatch({
    type:'UPDATE_PROPS',
    payload:{
      props: initialState,
    }  
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Invie />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
