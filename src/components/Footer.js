import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="pt-4 pb-5">
        <Row>
          <Col md={6}>
            <div className="footer-social" >
            <a href="https://www.reddit.com" className="pr-3" style={{paddingLeft:'10rem'}}>
                <img
                  style={{ height: "3vh", width: "3.4%" }}
                  src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_reddit-512.png"
                  alt="redditlogo"
                />
              </a>

              <a href="https://www.linkedin.com" className="pr-3">
                <img
                  style={{ height: "3.2vh" }}
                  src="https://e7.pngegg.com/pngimages/170/728/png-clipart-computer-icons-social-media-linkedin-small-business-social-media-angle-text.png"
                  alt="LinkedIn"
                />
              </a>

              <a href="https://www.facebook.com" className="pr-3">
                <img
                  style={{ height: "3vh", width: "4%" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxbVbSyMXwn5MTs4aD87jbA17UAUAkmzy1w&usqp=CAU"
                  alt="facebook"
                />
              </a>

              <a href="https://www.instagram.com" className="pr-3">
                <img
                  style={{ height: "3.4vh" }}
                  src="https://cdn-icons-png.flaticon.com/512/3621/3621464.png"
                  alt="instagram"
                />
              </a>
           
              <a href="https://www.youtube.com" className="pr-3">
                <img
                  style={{ height: "3vh" }}
                  src="https://www.seekpng.com/png/detail/328-3289308_black-youtube-icon-download-logo-youtube-grey.png"
                  alt="youtube"
                />
              </a>
              
              <a href="https://www.twitter.com" className="pr-3">
                <img
                  style={{ height: "3vh" }}
                  src="https://static.vecteezy.com/system/resources/previews/028/574/405/original/twitter-x-new-logo-vcetor-x-new-twitter-icon-twitter-rebrand-little-bird-to-x-letter-symbol-elon-musk-change-social-media-logo-novation-set-of-twitter-new-and-old-round-and-square-logo-free-vector.jpg"
                  alt="youtube"
                />
              </a>
              <a href="https://www.tiktok.com" className="pr-3">
                <img
                  style={{ height: "3vh" }}
                  src="https://cdn-icons-png.flaticon.com/512/3621/3621471.png"
                  alt="tiktok"
                />
              </a>
            </div>
          </Col>

          <Col md={12} className="pt-4 pl-4">
            <Row >

            <a href="https://www.tiktok.com" className="pr-2">
                <img
                  style={{ height: "3vh" }}
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/gdpr-logo.png"
                  alt="tiktok"
                />
              </a>
              <a href="https://www.tiktok.com" className="pr-2">
                <img
                  style={{ height: "3vh" }}
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/iso-logo1.png"
                  alt="tiktok"
                />
              </a>
              <a href="https://www.tiktok.com" className="pr-2">
                <img
                  style={{ height: "3vh" }}
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/soc-logo.png"
                  alt="tiktok"
                />
              </a>
            <a href="https://www.tiktok.com" className="pr-2">
                <img
                  style={{ height: "3vh" }}
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/hipaa-logo.png"
                  alt="tiktok"
                />
              </a>
            
            <span className="pr-3 pl-5" >
              <a href="/#" style={{color:'grey', fontSize:'14px'}}>Security</a>
            </span>
            <span className="pr-3">
              <a href="/#" style={{color:'grey', fontSize:'14px'}}>Terms and Privacy</a>
            </span>
            <span className="pr-3">
              <a href="/#" style={{color:'grey', fontSize:'14px'}}>Privacy Policy</a>
            </span>
            <span className="pr-3">
              <a href="/#" style={{color:'grey', fontSize:'14px'}}>Cookie Settings</a>
            </span>
            <span className="pr-3">
              <a href="/#" style={{color:'grey', fontSize:'14px'}}>Status</a>
            </span>
            <span className="pr-4 pt-1 pl-2" style={{color:'grey', fontSize:'13px'}}>
              All Rights Reserved © monday.com
              </span>
            <span className="pr-3 ml-auto">
              <a href="/#" style={{color:'grey', fontSize:'14px'}}>Accessibility Statement</a>
            </span>
            </Row>
          

          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
