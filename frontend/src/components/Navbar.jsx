import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ExpenseModel from './ExpenseModel';
import UilImage from '@iconscout/react-unicons/icons/uil-image';
import UilWebcam from '@iconscout/react-unicons/icons/uil-webcam';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createWorker } from 'tesseract.js';
import { useEffect } from 'react';

function ColorSchemesExample() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const worker = createWorker();

  const convertImageToText = async () => {
    console.log('I am calling or not');
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data } = await worker.recognize(selectedImage);
    // const { data } = await worker.recognize(
    //   'https://tesseract.projectnaptha.com/img/eng_bw.png'
    // );
    console.log('data', data.text);
  };

  useEffect(() => {
    convertImageToText();
  }, [selectedImage]);
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>ExpenTrack</Navbar.Brand>
          {/* <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav> */}
          <ExpenseModel />

          <label htmlFor='file-upload' className='file-upload'>
            <div className='fileUploadButton'>
              <UilImage size='20' color='#61DAFB' />
              <input
                id='file-upload'
                type='file'
                accept='image/*'
                className='d-none'
                onChange={(e) => {
                  setSelectedImage(e.target.files[0]);
                  setShow(true);
                }}
              />
            </div>
          </label>
          {selectedImage ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Image</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt='invoice'
                  className='w-100'
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                  Close
                </Button>
                <Button variant='primary' onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ''
          )}
          <UilWebcam size='20' color='#61DAFB' />
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
