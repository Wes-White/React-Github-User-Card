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
          <CardTitle className="user-name">{props.data.name}</CardTitle>
          <CardSubtitle>{props.data.bio}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.data.avatar_url} alt="GH-Image" />
        <CardBody>
          <CardText>{props.data.bio}</CardText>
          <CardLink href={props.data.html_url} target="_blank">
            See my Profile
          </CardLink>
          <CardText>
            Followers: {props.data.followers} Following: {props.data.following}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
