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
  noMarginBottom,
}) => {
  return (
    <Wrapper noMarginBottom={noMarginBottom}>
      <Left>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        <RowWrapper>
          <Dot />
          <ListItem>{list1}</ListItem>
        </RowWrapper>
        <RowWrapper>
          <Dot />
          <ListItem>{list2}</ListItem>
        </RowWrapper>
        <RowWrapper>
          <Dot />
          <ListItem>{list3}</ListItem>
        </RowWrapper>
        {list4 ? (
          <RowWrapper>
            <Dot />
            <ListItem>{list1}</ListItem>
          </RowWrapper>
        ) : null}
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
  padding: 0 10vw;
  margin-bottom: ${(props) => (props.noMarginBottom ? 0 : 10)}vw;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 7vw;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 50px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.p`
  font-size: 1.1vw;
  color: #71afac;
  font-family: "StabilGorteskBold";
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 9px;
  }
`;

const Subtitle = styled.p`
  font-size: 2vw;
  color: #000;
  letter-spacing: 0.2;
  font-family: "StabilGorteskMedium";
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 9px;
  }
`;

const Description = styled.p`
  font-size: 1.2vw;
  color: #000;
  font-family: "StabilGorteskThin";
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 9px;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Dot = styled.div`
  width: 1vw;
  height: 1vw;
  border-radius: 100px;
  background-color: #71afac;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

const ListItem = styled.span`
  font-size: 1.1vw;
  font-family: "StabilGorteskThin";
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Image = styled.img`
  width: 100%;
`;
