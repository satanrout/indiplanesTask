import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "./loginpage.css";
// import axios from "axios";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [jwt, setJwt] = useState({});

  if (localStorage.getItem("access")) {
    history.push("/");
  }

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch("https://workindipl.herokuapp.com/login/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setJwt({
          emailAddress: data.email,
          access: data.access_token,
          refresh: data.refresh_token,
        });
        if (data.access_token) {
          localStorage.setItem("access", data.access_token);
          setLoading(false);
          history.push("/");
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="Login ">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            {loading ? "Loading" : "Login"}
          </Button>
          {error ? (
            <Alert className="mt-2" variant={"danger"}>
              Email or Password is incorrect.
            </Alert>
          ) : null}
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
