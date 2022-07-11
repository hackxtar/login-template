import React from "react";
// import { Formik } from "formik";
import { Input } from "../../MSDesign";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import "./login.scss";

const Login = () => (
  <Container>
    <div className="form-container">
      <Row>
        <Stack gap={2}>
          <Col flex>
            <FontAwesomeIcon icon="fa-thin fa-envelope-circle-check" />
            <Input name="email" type="email" placeholder="Email" />
          </Col>
          <Col>
            I <Input name="password" type="password" placeholder="Password" />
          </Col>

          <Button variant="primary">Primary</Button>
        </Stack>
      </Row>
    </div>
  </Container>
);

export default Login;
