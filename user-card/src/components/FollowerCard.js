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

const FollowerCard = props => {
  return (
    <div>
      {props.data.map((follower, index) => {
        return (
          <Card className="user-card">
            <CardBody>
              <CardTitle className="user-name">
                {props.data[index].login}
              </CardTitle>
            </CardBody>
            <img
              width="100%"
              src={props.data[index].avatar_url}
              alt="GH-Image"
            />
            <CardBody>
              <CardText>{props.data[index].bio}</CardText>
              <CardLink href={props.data[index].html_url} target="_blank">
                See my Profile
              </CardLink>
              <CardText></CardText>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default FollowerCard;
