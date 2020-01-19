import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardLink,
  CardTitle,
  Button
} from "reactstrap";

const FollowerCard = props => {
  return (
    <div className="follower-container">
      {props.data.map((follower, index) => {
        return (
          <Card className="follower-card" key={index}>
            <CardImg
              width="100%"
              src={props.data[index].avatar_url}
              alt="GH-Image"
            />
            <CardBody>
              <CardTitle className="user-name">
                {props.data[index].login}
              </CardTitle>

              <CardLink href={props.data[index].html_url} target="_blank">
                <Button color="primary">See my Profile</Button>
              </CardLink>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default FollowerCard;
