import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import './App.scss';
import Sidebar from './components/Sidebar';
import Lists from './components/Lists';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <Container>
        <Row>
          <Sidebar />
          <Lists />
          <RightSidebar />
        </Row>
      </Container>
    </div>
  );
}

export default App;
