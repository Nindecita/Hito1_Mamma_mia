import React from "react";
import { Button, Container } from "react-bootstrap";

const Profile = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-4">
        
      <Button type="submit" className="btn btn-dark">
        Cerrar sesión
      </Button>
    </Container>
  );
};

export default Profile;
