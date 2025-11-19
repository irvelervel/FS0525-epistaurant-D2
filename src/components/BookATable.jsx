// Creeremo ora un componente per generare un FORM in React!
// OGNI volta che un componente React ha bisogno di interagire con un
// campo input (o ancora di più con un <form>) avete bisogno di UNO STATE
// -> il componente deve venire creato come CLASS COMPONENT

import { Component } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

// ogni volta che dovete fare un form lo dovete modellare intorno al DATO
// che dovete inviare alle API

// l'API di oggi si aspetta un oggetto così strutturato:
// name --> string
// phone --> string/number
// numberOfPeople --> string/number
// smoking --> boolean
// dateTime --> string (data) in formato ISO
// specialRequests --> string, opzionale

class BookATable extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="text-center my-3">Prenota un Tavolo!</h2>
            {/* form */}
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nome prenotazione</Form.Label>
                <Form.Control type="text" placeholder="Giangiorgio" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Numero di telefono</Form.Label>
                <Form.Control type="tel" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>In quanti siete</Form.Label>
                <Form.Select aria-label="number of people">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6+</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Tavolo fumatori" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Data e ora</Form.Label>
                <Form.Control type="datetime-local" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Allergie/cani/bambini</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>

              <Button variant="success" type="submit">
                Prenota!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BookATable
