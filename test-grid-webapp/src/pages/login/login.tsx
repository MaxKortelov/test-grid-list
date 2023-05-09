import React from "react";
import classNames from "classnames";
import { Button, Form } from "react-bootstrap";
import styles from "./login.module.scss";

function Login() {
  const login = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    const formData = new FormData(event.target as HTMLFormElement);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
    <div className={classNames("d-flex justify-content-center align-items-center full-screen")}>
      <Form
        className={classNames("d-flex flex-column align-items-center w-50 py-5 rounded-2", styles.loginForm)}
        onSubmit={login}
      >
        <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
