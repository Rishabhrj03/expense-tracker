import Col from 'react-bootstrap/Col';
import UilWebcam from '@iconscout/react-unicons/icons/uil-webcam';

const Sidebar = () => {
  return (
    <Col xs={6} md={3}>
      <h4>Categories</h4>
      <div
        className='d-flex justify-content-center py-2 hidden'
        style={{ backgroundColor: '#fbf4f4' }}
      >
        <div>GRA</div>
        <div>
          <p>Food & Beverage</p>
          <div>Rs. 200</div>
        </div>
        <div>47%</div>
        <UilWebcam size='20' color='#61DAFB' className='buttonPosition' />
      </div>
    </Col>
  );
};

export default Sidebar;
