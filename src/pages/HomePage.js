import { Container, Row, Col  } from "react-bootstrap";
import {CheckLg } from "react-bootstrap-icons";
import { layout } from '../components/Layouts/layoutTemplate';
import routes from "../Helpers/Routes";

const HomePage = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col className="text-center">                  
                    <div class={layout.mainClass}>
                        <div class={layout.mainRow}>
                            <div class={layout.mainCol}>
                                <div class={layout.cardTitleMain}>
                                    <div class={layout.cardTitleBody}>
                                        <h4 class={layout.cardTitleText}>Welcome to my Hellobuild test <CheckLg color="#172c45" size="30"/> </h4>
                                    </div>
                                </div>
                                <div class={layout.cardContentMain}>
                                    <div className={layout.cardContentBody}>
                                        <p class={layout.cardContentP}>
                                        <p>Hello everyone.</p>
                                        <p>
                                        I mainly thank Susana Mejia for her great work and the opportunity she gave me to take the technical test and demonstrate my skills.
                                        </p>
                                        <p>
                                        I would like to be part of HELLO BUILD.
                                        </p>
                                        <p>
                                        This test is also adapted for mobile devices. As it is a hybrid application of React native.
                                        </p>
                                        <p>
                                        In the upper right you will find a  button of sign Up and Login.
                                        </p>
                                        THANKS FOR ALL. 
                                        </p>
                                        <a href={routes.LoginPage} class={layout.cardContentButton}> START NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>              
            </Row>
        </Container>
    )
};

export default HomePage;