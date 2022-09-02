import React from "react";
import styled from "styled-components";

const ImageDescription = ({
  title,
  subtitle,
  description,
  list1,
  list2,
  list3,
  list4,
  image1,
  image2,
}) => {
  return (
    <Wrapper>
      <Left>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        <ul className="fa-ul funge-list font-face-thin">
          <li
            className="d-flex align-items-center"
            style={{ marginBottom: 20 }}
          >
            <span class="fa-li fa-stack">
              <i class="fa-solid fa-circle fa-stack-1x fs-18px funge-color"></i>
            </span>
            <ListItem class="item-text w-400">{list1}</ListItem>
          </li>
          <li
            className="d-flex align-items-center"
            style={{ marginBottom: 20 }}
          >
            <span class="fa-li fa-stack">
              <i class="fa-solid fa-circle fa-stack-1x fs-18px funge-color"></i>
            </span>
            <ListItem class="item-text w-400">{list2}</ListItem>
          </li>
          <li
            className="d-flex align-items-center"
            style={{ marginBottom: 20 }}
          >
            <span class="fa-li fa-stack">
              <i class="fa-solid fa-circle fa-stack-1x fs-18px funge-color"></i>
            </span>
            <ListItem class="item-text w-400">{list3}</ListItem>
          </li>
          {list4 ? (
            <li
              className="d-flex align-items-center"
              style={{ marginBottom: 20 }}
            >
              <span class="fa-li fa-stack">
                <i class="fa-solid fa-circle fa-stack-1x fs-18px funge-color"></i>
              </span>
              <ListItem class="item-text w-400">{list4}</ListItem>
            </li>
          ) : null}
        </ul>
      </Left>
      <Right>
        {image1 ? <Image src={image1} /> : null}
        {image2 ? <Image src={image2} /> : null}
      </Right>
    </Wrapper>
  );
};

export default ImageDescription;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 200px;
  margin-bottom: 235px;
  @media (max-width: 1024px) {
    margin: 0 100px;
    margin-bottom: 100px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    margin: 0 20px;
    margin-bottom: 32px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 50px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #71afac;
  font-family: "StabilGorteskBold";
`;

const Subtitle = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: #000;
  letter-spacing: 0.2;
  font-family: "StabilGorteskMedium";
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #000;
  line-height: 1.7;
  margin-bottom: 40px;
  font-family: "StabilGorteskThin";
  @media (max-width: 1024px) {
    font-size: 17px;
    margin-bottom: 30px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const ListItem = styled.span`
  font-size: 18px;
  margin-left: 10px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 425px) {
    font-size: 12px;
    margin-left: 0;
  }
`;

const Image = styled.img`
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
