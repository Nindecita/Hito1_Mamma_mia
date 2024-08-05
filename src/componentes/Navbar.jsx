import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { formatCurrency } from "../helpers/format";

function NavbarApp() {
  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <div className="d-flex justify-content-start">
          <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
          <Nav className="gap-1">
            <Button className="btn-sm" variant="outline-light" href="#home">
              🍕Home
            </Button>
            {token ? (
              <>
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#profile"
                >
                  🔓Profile
                </Button>
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#Logout"
                >
                  🔒Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#Login"
                >
                  🔐Login
                </Button>
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#register"
                >
                  🔐Register
                </Button>
              </>
            )}
          </Nav>
        </div>
        <div>
          <Button className="btn-sm" variant="outline-info" href="#total">
            🛒Total: {formatCurrency(total)}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
