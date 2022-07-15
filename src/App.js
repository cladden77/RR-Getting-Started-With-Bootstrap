import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  return (
    <div className="App">
    <Container>
      <Row>
      <Col>
      <h1>Bootstrap Website</h1>
      <Button variant="danger">Danger</Button>{' '}
      </Col>
      </Row>
      <Row>
        <Col>
      <Nav activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/about">About Us</Nav.Link>
    </Nav.Item>
</Nav>
</Col>
</Row>


      <Row>
<Form>
    <Form.Group>
    <Form.Label>Form Dropdown with favorite movies</Form.Label>
    <Form.Control as="select">
      <option>Inception</option>
      <option>Forrest Gump</option>
      <option>Shawshank Redemption</option>
      <option>Spiderman: Into the Spiderverse</option>
      <option>Avengers: Endgame</option>
    </Form.Control>
</Form.Group>


    
    <Button className="col-md-3 mx-auto my-5" variant="primary" type="submit">
      Submit
    </Button>
</Form>
</Row>
    </Container>
    </div>
  );
}

export default App;
