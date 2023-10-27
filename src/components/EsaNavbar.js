import React from "react";
import {
  Navbar,
  Nav,
  Button,
  OverlayTrigger,
  Popover,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const popoverStyle = {
  maxWidth: "600px",
  marginTop: "60px",
};

const EsaNavbar = () => {
  const expertisePopover = (
    <Popover
      id="popover-trigger-hover-focus"
      title="Popover bottom"
      style={popoverStyle}
    >
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6">
            <h4 className="my-3">OUR EXPERTISE</h4>
            <p className="text-muted">
              Optimize your B2B data exchanges to benefit your productivity in
              line with your sectoral requirements.
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="my-3">EDI - Electronic Data Interchange</h4>
            <p className="text-muted">Electronic invoicing</p>
          </div>
        </div>
      </div>
    </Popover>
  );

  const solutionPopover = (
    <Popover
      id="popover-trigger-hover-focus"
      title="Popover bottom"
      style={popoverStyle}
    >
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6">
            <h4 className="my-3"> OUR SOLUTIONS</h4>
            <p className="text-muted">
              Catalyze collaboration within your ecosystem through a wide range
              of dematerialization solutions adapted to your needs
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="my-3">Our solutions</h4>
            <p className="text-muted">
              On premise TradeExpress IBM Sterling Cleo Cloud Hubtimize®
            </p>
          </div>
        </div>
      </div>
    </Popover>
  );

  const servicePopover = (
    <Popover
      id="popover-trigger-hover-focus"
      title="Popover bottom"
      style={popoverStyle}
    >
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6">
            <h4 className="my-3"> OUR SERVICES</h4>
            <p className="text-muted">
              Optimize your B2B data exchanges to benefit your productivity in
              line with your sectoral requirements
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="my-3"> Our services</h4>
            <p className="text-muted">
              TMA - Third-party application maintenance Management{" "}
            </p>
          </div>
        </div>
      </div>
    </Popover>
  );

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <span
          className="h1 font-weight-normal"
          style={{ lineHeight: "40px", letterSpacing: "1px" }}
        >
          EsaLink
        </span>
        <span
          className="d-block h6 text-sm pl-4 ml-3 text-uppercase"
          style={{ fontSize: "9px", letterSpacing: "1px" }}
        >
          Data Integration
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Button
            variant="outline-secondary"
            className="mr-3 text-uppercase font-weight-bold"
            style={{ fontSize: "15px" }}
          >
            {" "}
            Electronic Invoicing 2024{" "}
          </Button>
          <OverlayTrigger
            trigger={["hover", "focus"]}
            placement="right"
            overlay={expertisePopover}
          >
            <Nav.Link className="pr-3">Expertise</Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger
            trigger={["hover", "focus"]}
            placement="right"
            overlay={solutionPopover}
          >
            <Nav.Link className="pr-3">Solutions</Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger
            trigger={["hover", "focus"]}
            placement="left"
            overlay={servicePopover}
          >
            <Nav.Link className="pr-3">Services</Nav.Link>
          </OverlayTrigger>
          <Nav.Link href="https://www.google.com">Blog</Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <Nav.Link
            href="https://www.google.com"
            className="pr-3 text-uppercase font-weight-bold"
            style={{ fontSize: "14px" }}
          >
            Tma connection
          </Nav.Link>
          <Button
            variant="outline-secondary"
            className="font-weight-bold"
            style={{ fontSize: "14px" }}
          >
            Get a Demo
          </Button>
          <Nav.Item className="ml-auto">
            <NavDropdown
              title="fr"
              id="nav-dropdown"
              className="pl-3 text-uppercase"
            >
              <NavDropdown.Item>en</NavDropdown.Item>
              <NavDropdown.Item>tr</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default EsaNavbar;
