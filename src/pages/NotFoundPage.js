import { Link } from "react-router-dom";
import { Container, Row, Col  } from "react-bootstrap";
import routes from "../Helpers/Routes";

const NotFoundPage = () => {
    return (
        <Container>
            <Row className="mt-1">
                <Col className="text-center">
                    <img
                    style={{ width: '100%'}}
                    src="/img/error_404.png"
                    alt="error-404"
                    />
                    <h2>Vuelve al <Link to={routes.HomePage}>inicio</Link></h2>
                </Col>              
            </Row>
        </Container>
    )
};

export default NotFoundPage;