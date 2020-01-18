import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../App.css";

const UserCard = props => {
  return (
    <div>
      <Card className="user-card ">
        <CardImg width="100%" src={props.data.avatar_url} alt="GH-Image" />
        <CardBody>
          <CardTitle className="user-name">{props.data.name}</CardTitle>
          <CardSubtitle>{props.data.bio}</CardSubtitle>
          <CardText>
            Followers: {props.data.followers} Following: {props.data.following}
          </CardText>
          <CardLink href={props.data.html_url} target="_blank">
            <Button color="primary">See my Profile</Button>
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
