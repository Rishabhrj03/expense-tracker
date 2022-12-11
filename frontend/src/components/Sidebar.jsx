import Col from 'react-bootstrap/Col';

export default () => {
  return (
    <Col xs={6} md={3}>
      <h4>Categories</h4>
      <div
        className='d-flex justify-content-center py-2'
        style={{ backgroundColor: '#fbf4f4' }}
      >
        <div>GRA</div>
        <div>
          <p>Food & Beverage</p>
          <div>Rs. 200</div>
        </div>
        <div>47%</div>
      </div>
    </Col>
  );
};
