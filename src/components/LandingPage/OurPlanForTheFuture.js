import React from "react";
import styled from "styled-components";

const OurPlanForTheFuture = () => {
  return (
    <section className="ourplan my-5 py-5">
      <div className="container">
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
      </div>
    </section>
  );
};

export default OurPlanForTheFuture;

const Title = styled.p`
  font-family: "StabilGorteskBold";
  font-size: 60px;
  text-align: center;
  margin-bottom: 80px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    padding: 0 25px;
  }
`;

const Button = styled.button`
  font-family: "StabilGorteskBold";
  font-size: 22px;
  letter-spacing: 0.2px;
  color: #71afac;
`;

const Text = styled.p`
  font-size: 18px;
  color: #5a7184;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;
