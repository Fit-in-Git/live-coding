// NOTICE: you can give this import in App.jsx as well
// import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card } from "react-bootstrap";

const BootstrapExample = () => {
  return (
    <div>
      <Button variant="secondary">Click</Button>
      <Button variant="success">Click</Button>
      <Button variant="danger">Click</Button>
      <Button variant="primary">Click</Button>
      {/* you can use div here as well. you don't have to use Container */}
      {/*  <div className="d-flex justify-content-center"></div> */}
      <Container className="d-flex justify-content-center">
        <p>Welcome</p>
        <p>Here is my Website</p>
      </Container>
      <Card>
        <Card.Body>
          <Card.Title>Movies</Card.Title>
          <Card.Text>All Movies here</Card.Text>
          <Button>Pay Now</Button>
          <Card.Img src="" alt="" />
        </Card.Body>
      </Card>
      <Button as="a" variant="danger" href="https://google.com">
        Click me
      </Button>
    </div>
  );
};

export default BootstrapExample;
