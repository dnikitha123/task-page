import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const megaMenuData = [
  {
    title: "Monday",
    links: [
      "Pricing",
      "Contact Us",
      "Templates",
      "SMB",
      "Enterprise",
      "Nonprofits",
      "App Marketplace",
      "24/7 Support",
    ],
  },
  {
    title: "Features",
    links: [
      "Docs",
      "Integrations",
      "Automations",
      "Files",
      "Dashboards",
      "Kanban",
      "Gantt",
    ],
  },
  {
    title: "Monday Products",
    links: [
      "Footer WM Logo",
      "Monday Work Management",
      "CRM Icon Footer",
      "Monday Sales CRM",
      "Dev New Mobile Footer Logo",
      "Monday Dev",
      "More by Monday.com",
      "WorkCanvas Icon Footer",
      "WorkCanvas",
      "WorkForms Icon Footer",
      "WorkForms",
    ],
  },
  {
    title: "Use Cases",
    links: [
      "Marketing",
      "Project Management",
      "Sales",
      "Developers",
      "HR",
      "IT",
      "Operations",
      "Construction",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Careers - We're Hiring!",
      "Monday-U",
      "Press",
      "Customer Stories",
      "Become a Partner",
      "Sustainability & ESG",
      "Affiliates",
      "Digital Lift",
      "Investor Relations",
    ],
  },
  {
    title: "Resources",
    links: [
      "Help Center",
      "Community",
      "Blog",
      "What's New",
      "Monday Spaces",
      "Webinars",
      "Startup for Startup",
      "Global Events",
      "App Development",
      "Find a Partner",
      "Compare",
    ],
  },
];

const MegaMenu = () => {
  return (
    <>
    <Container className="mega-menu pt-5">
      <Row style={{ width: "110%", maxWidth: "1600px" }}>
        {megaMenuData.map((column, columnIndex) => (
          <Col key={columnIndex}>
            <div className="pl-3">{column.title}</div>
            <Nav defaultActiveKey="/home" className="flex-column">
              {column.links.map((link, linkIndex) => (
                <Nav.Link
                  key={linkIndex}
                  href="#"
                  style={{ color: "grey", fontSize: "12px" }}
                >
                  {link}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
        ))}
      </Row>
    </Container>
    <div style={{borderBottom: '1px solid grey', paddingBottom: '30px' ,  width: '90%', margin: '0 auto'}}></div>
    </>
  );
};

export default MegaMenu;
