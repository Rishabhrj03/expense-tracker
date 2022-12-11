import Navbar from './components/Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Sidebar from './components/Sidebar';
import Lists from './components/Lists';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Container>
        <Row>
          <Sidebar />
          <Lists />
          <Col xs={6} md={3}>
            xs=6 md=4
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
