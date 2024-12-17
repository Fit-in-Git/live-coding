import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  border: 2px solid red;
  box-shadow: 2px 2px 2px;
`;

const CardHeader = styled.h4`
  background-color: #06b6d4;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardText = styled.p`
  padding: 1em;
`;
const MyCard = ({ title, imgUrl, content }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardImage src={imgUrl} alt="card"></CardImage>
      <CardText>{content}</CardText>
    </Card>
  );
};

export default MyCard;
