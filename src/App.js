import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div>
      <Container>
        <h1 className="text-center m-3">Phone Book</h1>
        <Row>
          <Col className="border-column">
            <ContactForm/>
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

// 1. UI on the left=  Add name Box and Phone Number, Right = Search box
// 2. on the List = able to add user name and PhoneNumber
// 3. on the List = able to see item's quantity
// 4. client can search the user by the search the name.
