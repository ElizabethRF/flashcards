import React from 'react';
import Flashcard from './Flashcard';
import image from '../Assets/sample.jpg';
import CardDeck from 'react-bootstrap/CardDeck'

function Flashdeck() {
  return (
    <div className="App">
      <CardDeck>
      <Flashcard  front='Example' details='this is the example' image={image} back='ejemplo'/>
      <Flashcard  front='Example' details='this is the example' image={image} back='ejemplo'/>
      <Flashcard  front='Example' details='this is the example' image={image} back='ejemplo'/>
      <Flashcard  front='Example' details='this is the example' image={image} back='ejemplo'/>
      <Flashcard  front='Example' details='this is the example' image={image} back='ejemplo'/>
      </CardDeck>
    </div>
  );
}

export default Flashdeck;
