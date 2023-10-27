import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const TrelloPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={6} style={{ height: "90vh"}}>
          <div
            style={{
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
              width: "82%",
              maxWidth: "600px",
              marginLeft: "8rem",
              textAlign: "left",
            }}
          >
            <h1 className="display-4 text-left font-weight-normal">
              Trello brings all your tasks, teammates, and tools together
            </h1>
            <div className="h5 pt-2 pl-1 " style={{letterSpacing: '0.8px'}}>
              Keep everything in the same place—even if your team isn't.
            </div>
              <Form className="mt-4" style={{width:'300px'}}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Form>
              <div className="pt-4">
                <Button variant="primary" type="submit">
                  Sign up - it's free!
                </Button>
              </div>

            <p className="mt-3">
              <a href="https://www.google.com/">Watch Video</a>
            </p>
          </div>
        </Col>

        <Col sm={6}>
          <Container className="py-5 text-center">
            <Row className="align-items-center">
              <Col sm={6} md={4} lg={9} className="text-center">
                <img
                  src="https://www.designveloper.com/wp-content/uploads/2023/07/Trello.png"
                  alt="Pic1"
                  className="img-fluid ml-5 pt-4"
                  style={{width: '100%', height: '400px', maxWidth: '800px ! important' }} 
                />
              </Col>
            </Row>
 
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default TrelloPage;
