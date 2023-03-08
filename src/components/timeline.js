import React, { Component } from 'react'
import "../components/timeline.css";

import Card from 'react-bootstrap/Card';
import "../components/timeline.css";

export default class timeline extends Component {
  render() {
    return (
      <div className='container-6'> 
      <br></br>
      <h5>Conference</h5>
      <h1>Timeline</h1>
      <p>I'm a text box. Double click me to edit the text or to change the way I look.</p>
    
      <Card className='cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../assets/home/timeline/2.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
     
      

      
      <Card className='cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../assets/home/timeline/2.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
     


      <Card className='cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../assets/home/timeline/2.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    
      </div>
    )
  }
}
