import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const JaldiTechPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6} >
          <div className="p-4 border border-lightgrey" style={{borderRadius: '12px'}}>
            <h2>All Your Leads In One Place</h2>

            <div className='pt-5' style={{width:'500px'}}>
              <span className='h5 font-weight-normal'>Integrate your Leads</span>
              <div className='pt-3'>
              Jaldi integrates with your Facebook and Instagram ads - new leads are auto-assigned to your sales agents who receive instant mobile notifications.
              </div>
            </div>

            <div className='pt-5'>
              <span className='h5 font-weight-normal'>Distribute easily</span>
              <div className='pt-3'>
              Jaldi allows you to upload files and distribute your leads with a few simple clicks.
              </div>
            </div>

            <div className='pt-5'>
              <span className='h5 font-weight-normal'>Call, WhatsApp, SMS or Email with one click</span>
             <div className='pt-3'>
             Instantly respond to your leads through any channel with a simple click.
             </div>
            </div>


          </div>
        </Col>

        <Col md={6}>
          <div className="embed-responsive embed-responsive-16by9 p-4  border border-lightgrey" style={{borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', height:'484px'}}>
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/your-video-id"
              title="Your Video"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JaldiTechPage;
