// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// import Badge from 'react-bootstrap/Badge';
import ExpenseModel from './ExpenseModel';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
import Form from 'react-bootstrap/Form';
import MontlyGraph from './MontlyGraph';
export default () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    async function getNote() {
      const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/note`);
      console.log(result);
      if (result.data.success) setNotes(result.data.result);
    }
    getNote();
  }, []);

  return (
    <Col xs={12} md={6}>
      <main className='w-75 m-auto'>
        <div className='d-flex justify-content-between my-2 font-weight-700'>
          <h4>Daily Transections </h4>
          <ExpenseModel />
        </div>

        <Form.Control
          type='search'
          placeholder='Search'
          className='me-2 header-search border-0'
          aria-label='Search'
        />
        <MontlyGraph />
        <div className='d-flex justify-content-around my-2 text-right'>
          <div className='mx-1 '>
            <span className='font-size-extra-small theme-text-primary'>
              Total Expense
            </span>
            <p className='font-weight-700'>₹ 57000</p>
          </div>
          <div className='mx-1'>
            <span className='font-size-extra-small theme-text-primary'>
              Total Income
            </span>
            <p className='font-weight-700'>₹ 57000</p>
          </div>

          <div className='mx-1'>
            <span className='font-size-extra-small theme-text-primary'>
              Net
            </span>
            <p className='font-weight-700'>₹ 57000</p>
          </div>
        </div>
        <div className='scrollbar px-2' id='style-11'>
          {notes?.map((element, index) => (
            <>
              <div
                className='d-flex justify-content-between align-items-center my-1'
                key={index}
              >
                <div style={{ textAlign: 'left' }}>
                  <h6 className='font-size-medium m-0'>{element.note}</h6>
                  <span className='font-weight-bold theme-text-primary font-size-extra-small'>
                    {moment(element.transectionAt).format('LL')}
                  </span>
                  {/* <Badge bg='danger mx-2'>{element.category}</Badge> */}
                </div>
                <span className='font-size-medium font-weight-700'>
                  ₹{element.price}
                </span>
              </div>
              <div>
                <hr
                  className='hr-text font-size-small'
                  data-content={element.category}
                />
              </div>
            </>
          ))}
        </div>
      </main>
    </Col>
  );
};
