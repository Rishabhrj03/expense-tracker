import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMountainSun from '@iconscout/react-unicons/icons/uil-mountains-sun';
import UilBars from '@iconscout/react-unicons/icons/uil-bars';
function ExpenseModal() {
  const [show, setShow] = useState(false);
  const [showGoalModel, setShowGoalModel] = useState(false);
  const [showLimitModel, setShowLimitModel] = useState(false);
  const [note, setNote] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('other');
  const [type, setType] = useState('debit');
  const [transectionAt, setTransectionAt] = useState('');
  const [bank, setBank] = useState('cash');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleGoalClose = () => setShowGoalModel(false);
  const handleGoalShow = () => setShowGoalModel(true);
  const handleLimitClose = () => setShowLimitModel(false);
  const handleLimitShow = () => setShowLimitModel(true);
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
      <div className='d-flex'>
        <Button
          variant='primary'
          onClick={handleGoalShow}
          className='rounded-circle d-flex p-0 mx-1 justify-content-center align-items-center'
          style={{ width: '30px', height: '30px' }}
        >
          <UilMountainSun size='20' color='#fff' />
        </Button>
        <Button
          variant='primary'
          onClick={handleLimitShow}
          className='rounded-circle d-flex p-0 mx-1 justify-content-center align-items-center'
          style={{ width: '30px', height: '30px' }}
        >
          <UilBars size='20' color='#fff' />
        </Button>

        <Button
          variant='primary'
          onClick={handleShow}
          className='rounded-circle d-flex p-0 justify-content-center align-items-center'
          style={{ width: '30px', height: '30px' }}
        >
          <UilPlus size='20' color='#fff' />
        </Button>
      </div>

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
                placeholder='100'
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

            <Form.Group className='mb-3'>
              <Form.Label>Type</Form.Label>
              <Form.Select
                name='type'
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value='debit'>Debit (Spend/withdraw)</option>
                <option value='investment'>Investment</option>
                <option value='goal'>Goal</option>
                <option value='credit'>Credit (Received)</option>
                <option value='other'>Other</option>
              </Form.Select>
            </Form.Group>
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
                <option value='cash'>Cash</option>
                <option value='paytm'>Paytm</option>
                <option value='phone-pe'>Phone Pe</option>
                <option value='google-pay'>Google Pay/GPay/Taz</option>
                <option value='airtel'>Airtel Payments</option>
                <option value='hdfc'>HDFC</option>
                <option value='pnb'>Punjab National Bank</option>
                <option value='axis'>Axis</option>
                <option value='sbi'>State Bank of India</option>
                <option value='uboi'>Union Bank of India</option>
                <option value='bob'>Bank of Baroda</option>
                <option value='boi'>Bank of India</option>
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

      <Modal show={showGoalModel} onHide={handleGoalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => submit(e)}>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Goal Name</Form.Label>
              <Form.Control
                as='textarea'
                rows={1}
                placeholder='Travel or Wedding or Apartment'
                name='note'
                value={note}
                onChange={(e) => setNote(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Saved Amount for Goal</Form.Label>
              <Form.Control
                type='number'
                placeholder='10000'
                min='1'
                name='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Required Amount</Form.Label>
              <Form.Control
                type='number'
                placeholder='50,00,000'
                min='1'
                name='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Goal Date</Form.Label>
              <Form.Control
                type='date'
                name='transectionAt'
                placeholder='Date'
                value={transectionAt}
                onChange={(e) => setTransectionAt(e.target.value)}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant='secondary' onClick={handleGoalClose}>
                Close
              </Button>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showLimitModel} onHide={handleLimitClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set Montly Limit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => submit(e)}>
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
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type='number'
                placeholder='100'
                min='1'
                name='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant='secondary' onClick={handleLimitClose}>
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
