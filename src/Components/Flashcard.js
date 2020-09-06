import React , { useState }  from 'react';
import '../Styles/Flashcard.css';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'

class Flashcard extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

      render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" >
                <div class='FlashCard' onClick={this.handleClick}>
                    <Card style={{ width: '18rem'}} class ='card-body'>
                        <Card.Img variant="top" src={this.props.image} />
                        <Card.Body>
                        <Card.Title>{this.props.front}</Card.Title>
                            <Card.Text>
                            {this.props.details}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
        
                <div onClick={this.handleClick}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.image} />
                        <Card.Body>
                        <Card.Title>{this.props.back}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </ReactCardFlip>



        

        )
    }

}


export default Flashcard;
