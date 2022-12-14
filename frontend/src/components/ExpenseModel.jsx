import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';

function ExpenseModal() {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('other');
  const [transectionAt, setTransectionAt] = useState('');
  const [bank, setBank] = useState('Paytm');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submit = (e) => {
    e.preventDefault();
    // let bodyFormData = new FormData();
    // bodyFormData.append('note', note);
    // bodyFormData.append('price', price);
    // bodyFormData.append('category', category);
    // bodyFormData.append('transectionAt', transectionAt);
    let bodyFormData = {
      note,
      price,
      category,
      transectionAt,
    };
    axios({
      method: 'post',
      url: `http://localhost:8000/note`,
      data: bodyFormData,
      // headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        setNote('');
        setPrice(0);
        setCategory('other');
        setTransectionAt('');
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  return (
    <>
      <Button
        variant='primary'
        onClick={handleShow}
        className='rounded-circle d-flex p-0 justify-content-center align-items-center'
        style={{ width: '30px', height: '30px' }}
      >
        <UilPlus size='20' color='#fff' />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => submit(e)}>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Note</Form.Label>
              <Form.Control
                as='textarea'
                rows={1}
                placeholder='Note for your spending or getting money'
                name='note'
                value={note}
                onChange={(e) => setNote(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type='number'
                placeholder='100rs'
                min='1'
                name='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Category</Form.Label>
              <Form.Select
                name='category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value='other'>Other</option>
                <option value='salary'>Salary</option>
                <option value='relative'>Relative</option>
                <option value='ppf'>PPF</option>
                <option value='mutual-fund'>Mutual Fund</option>
                <option value='stock'>Stocks</option>
                <option value='insurance'>Insurance</option>
                <option value='friend'>Friend</option>
                <option value='food'>Food</option>
                <option value='beverage'>Beverage</option>
                <option value='groceries'>Groceries</option>
              </Form.Select>
            </Form.Group>
            {/* <Form.Group className='mb-3'>
              <Form.Label>List</Form.Label>
              <Form.Select
                name='list'
                value={list}
                onChange={(e) => setList(e.target.value)}
              ></Form.Select>
            </Form.Group> */}
            <Form.Group className='mb-3'>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type='date'
                name='transectionAt'
                placeholder='Date'
                value={transectionAt}
                onChange={(e) => setTransectionAt(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Payment Mode</Form.Label>
              <Form.Select
                name='bank'
                value={bank}
                onChange={(e) => setBank(e.target.value)}
              >
                <option value='paytm'>Paytm</option>
                <option value='hdfc'>HDFC</option>
                <option value='pnb'>Punjab National Bank</option>
                <option value='axis'>Axis</option>
                <option value='sbi'>State Bank of India</option>
                <option value='uboi'>Union Bank of India</option>
                <option value='bob'>Bank of Baroda</option>
                <option value='boi'>Bank of India</option>
                <option value='airtel'>Airtel Payments</option>
              </Form.Select>
            </Form.Group>

            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ExpenseModal;
