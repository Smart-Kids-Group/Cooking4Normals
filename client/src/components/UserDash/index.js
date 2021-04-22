import React from "react";
import {
  StreamApp,
  NotificationDropdown,
  FlatFeed,
  LikeButton,
  Activity,
  CommentList,
  CommentField,
  StatusUpdateForm,
} from "react-activity-feed";
import "react-activity-feed/dist/index.css";
import { withRouter } from "react-router-dom";
import "./UserDash.css";

class UserDash extends React.Component {
  render() {
    return (
      <StreamApp
        apiKey="34fxjm7smgpz"
        appId="1121058"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2VhdGhlcmVkLWZvZy0wIn0.xcPAM2Yybwr8beNvC5n3d1bWNKOVb9KMXvvk-Ne5S24"
      >
        <NotificationDropdown notify />
        <StatusUpdateForm />
        <FlatFeed
          options={{ reactions: { recent: true } }}
          notify
          Activity={(props) => (
            <Activity
              {...props}
              Footer={() => (
                <div style={{ padding: "8px 16px" }}>
                  <LikeButton {...props} />
                  <CommentField
                    activity={props.activity}
                    onAddReaction={props.onAddReaction}
                  />
                  <CommentList activityId={props.activity.id} />
                </div>
              )}
            />
          )}
        />
      </StreamApp>
    );
  }
}

export default withRouter(UserDash);
