import React from "react";
import styled from "styled-components";

const OurPlanForTheFuture = () => {
  return (
    <OuterWrapper>
      <Title>Our plan for the future</Title>
      <Wrapper className="row">
        <div className="col-11 mx-auto">
          <div className="accordion mb-3" id="faq-accord1">
            <div className="accordion-item">
              <Button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Q2 2021
              </Button>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faq-accord1"
              >
                <div className="accordion-body">
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion mb-3" id="faq-accord2">
            <div className="accordion-item">
              <Button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Q2 2021
              </Button>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faq-accord2"
              >
                <div className="accordion-body">
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion mb-3" id="faq-accord3">
            <div className="accordion-item">
              <Button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Q2 2021
              </Button>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faq-accord3"
              >
                <div className="accordion-body">
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion mb-3" id="faq-accord4">
            <div className="accordion-item">
              <Button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
              >
                Q2 2021
              </Button>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faq-accord4"
              >
                <div className="accordion-body">
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion mb-3" id="faq-accord5">
            <div className="accordion-item">
              <Button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="true"
                aria-controls="collapseFive"
              >
                Q2 2021
              </Button>

              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faq-accord5"
              >
                <div className="accordion-body">
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                  <Text>You can pay with credit.</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};

export default OurPlanForTheFuture;
const OuterWrapper = styled.div`
  padding: 0 5vw;
  padding-top: 10vw;
  @media (max-width: 425px) {
    padding: 0 0;
    padding-top: 10vw;
  }
`;

const Title = styled.p`
  font-family: "StabilGorteskBold";
  font-size: 3vw;
  text-align: center;
  margin-bottom: 4vw;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 425px) {
    padding: 0 25px;
  }
`;

const Button = styled.button`
  font-family: "StabilGorteskBold";
  font-size: 1.3vw;
  letter-spacing: 0.2px;
  color: #71afac;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Text = styled.p`
  font-size: 1.1vw;
  color: #5a7184;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
