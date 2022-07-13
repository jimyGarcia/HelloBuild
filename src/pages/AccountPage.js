import { Container, Row, Col } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";

import { layout } from "../components/Layouts/layoutTemplate";

const AccountPage = () => {
  return (
    <Container>
      <Row className="mt-1">
        <Col className="text-center">
          <div className={layout.mainClass}>
            <div className={layout.mainRow}>
              <div className={layout.mainCol}>
                <div className={layout.cardTitleMain}>
                  <div className={layout.cardTitleBody}>
                    <h4 className={layout.cardTitleText}>
                      <PersonFill color="#172c45" size="30" /> My Profile{" "}
                    </h4>
                  </div>
                </div>
                <div className={layout.cardContentMain}>
                  <div className={layout.cardContentBody}>
                    <div className={layout.cardContentP}>
                      <p>Hello everyone.</p>
                      <p>
                        I mainly thank Karen Villamil for her great work and the
                        opportunity she gave me to take the technical test and
                        demonstrate my skills.
                      </p>
                      <p>I would like to be part of HELLO BUILD.</p>
                      <p>
                        This test is also adapted for mobile devices. As it is a
                        application of React.
                      </p>
                      <p>
                        In the upper right you will find a button of logout.
                      </p>
                      THANKS FOR ALL.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountPage;
