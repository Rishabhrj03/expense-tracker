import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
export default () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    async function getNote() {
      const result = await axios.get(`http://localhost:8000/note`);
      console.log(result);
      if (result.data.success) setNotes(result.data.result);
    }
    getNote();
  }, []);

  return (
    <Col xs={6} md={6}>
      {notes?.map((element, index) => (
        <div
          className='d-flex justify-content-around bg-success py-2 my-1 text-light text-black-50 w-75 m-auto'
          key={index}
        >
          <div style={{ textAlign: 'left' }}>
            <Card.Subtitle>{element.note}</Card.Subtitle>
            <span
              className='font-weight-bold text-white-50'
              style={{ fontSize: '12px', fontWeight: 'bold' }}
            >
              {moment(element.transectionAt).format('LL')}
            </span>
            <Badge bg='danger mx-2'>{element.category}</Badge>
          </div>
          <span>Rs. {element.price}</span>
        </div>
      ))}
    </Col>
  );
};
