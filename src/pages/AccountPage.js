import { Container, Row, Col  } from "react-bootstrap";
import { layout } from '../components/Layouts/layoutTemplate';
import {PersonFill} from "react-bootstrap-icons";

const AccountPage = () => {
    return (
        <Container>
            <Row className="mt-1">
                <Col className="text-center">
                            <div class={layout.mainClass}>
                        <div class={layout.mainRow}>
                            <div class={layout.mainCol}>
                                <div class={layout.cardTitleMain}>
                                    <div class={layout.cardTitleBody}>
                                        <h4 class={layout.cardTitleText}> <PersonFill color="#172c45" size="30" /> My Profile </h4>
                                    </div>
                                </div>
                                <div class={layout.cardContentMain}>
                                    <div  class={layout.cardContentBody}>
                                        <p class={layout.cardContentP}>
                                        <p>Hello everyone.</p>
                                        <p>
                                        I mainly thank Karen Villamil for her great work and the opportunity she gave me to take the technical test and demonstrate my skills.
                                        </p>
                                        <p>
                                        I would like to be part of HELLO BUILD.
                                        </p>
                                        <p>
                                        This test is also adapted for mobile devices. As it is a application of React.
                                        </p>
                                        <p>
                                        In the upper right you will find a button of logout.
                                        </p>
                                        THANKS FOR ALL. 
                                        </p>
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

export default AccountPage;