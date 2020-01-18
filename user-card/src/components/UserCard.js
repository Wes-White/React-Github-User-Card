import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const UserCard = props => {
  return (
    <div>
      <Card className="user-card">
        <CardBody>
          <CardTitle>{props.data.name}</CardTitle>
          <CardSubtitle>{props.data.bio}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.data.avatar_url} alt="GH-Image" />
        <CardBody>
          <CardText>{props.data.bio}</CardText>
          <CardText>Followers: {props.data.followers}</CardText>
          <CardText>Following: {props.data.following}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
