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
            <span class="fa-li fa-stack" style={{ marginRight: 10 }}>
              <i class="fa-solid fa-circle fa-stack-1x fs-18px funge-color"></i>
            </span>
            <span class="item-text w-400 fs-18px">{list1}</span>
          </li>
          <li
            className="d-flex align-items-center"
            style={{ marginBottom: 20 }}
          >
            <span class="fa-li fa-stack" style={{ marginRight: 10 }}>
              <i class="fa-solid fa-circle fa-stack-1x fs-18px funge-color"></i>
            </span>
            <span class="item-text w-400 fs-18px">{list2}</span>
          </li>
          <li
            className="d-flex align-items-center"
            style={{ marginBottom: 20 }}
          >
            <span class="fa-li fa-stack" style={{ marginRight: 10 }}>
              <i class="fa-solid fa-circle fa-stack-1x fs-18px funge-color"></i>
            </span>
            <span class="item-text w-400 fs-18px">{list3}</span>
          </li>
          {list4 ? (
            <li
              className="d-flex align-items-center"
              style={{ marginBottom: 20 }}
            >
              <span class="fa-li fa-stack" style={{ marginRight: 10 }}>
                <i class="fa-solid fa-circle fa-stack-1x fs-18px funge-color"></i>
              </span>
              <span class="item-text w-400 fs-18px">{list4}</span>
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
`;

const Subtitle = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: #000;
  letter-spacing: 0.2;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #000;
  line-height: 1.7;
  margin-bottom: 40px;
  font-family: "StabilGorteskThin";
`;

const Image = styled.img``;
