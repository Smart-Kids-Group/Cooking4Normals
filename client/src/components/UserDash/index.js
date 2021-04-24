import React, { Component } from "react";
import {
  StreamApp,
  StatusUpdateForm,
  FlatFeed,
  NotificationDropdown,
  Activity,
  LikeButton,
  CommentField,
  CommentList,
  CommentItem,
} from "react-activity-feed";
import "react-activity-feed/dist/index.es.css";
import { withRouter } from "react-router-dom";
import "./UserDash.css";


class UserDash extends React.Component{
  containerRef = React.createRef();

  render() {
    return(
    <div
      ref={this.containerRef}
      style={{
        maxWidth: "600px",
        // maxHeight: '500px',
        // overflow: 'scroll',
        margin: "0 auto",
      }}
    >
      <StreamApp apiKey='34fxjm7smgpz' appId='1121058' token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoib2xkLWdsaXR0ZXItOCJ9.TpUX6KNbBpTGwvibKYarlocDAq6HcFfqLAJL0nAg5pg'>;
        <div
          style={{
            background: "#fff", //#1A1A14
            height: 60,
            borderRadius: 4,
            margin: "10px 0",
            padding: "0 20px",
            boxShadow: "0px 0px 4px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <h3>React Activity Feed</h3>
          <NotificationDropdown arrow right />
        </div>
        <StatusUpdateForm
        // submitHandler={(e) => {
        //   alert(e);
        // }}
        />
        <FlatFeed
          feedGroup="user" // or timeline
          notify
          options={{
            limit: 6,
            withOwnChildren: true,
            withRecentReactions: true
          }}
          Activity={(activityProps) => (
            <Activity
              {...activityProps}
              Footer={() => (
                <React.Fragment>
                  <CommentField
                    activity={activityProps.activity}
                    onAddReaction={activityProps.onAddReaction}
                  />
                  <CommentList
                    activityId={activityProps.activity.id}
                    CommentItem={(props) => (
                      <React.Fragment>
                        <CommentItem {...props} />
                        <LikeButton
                          reaction={props.comment}
                          {...activityProps}
                        />
                      </React.Fragment>
                    )}
                  />
                </React.Fragment>
              )}
            />
          )}
        />
      </StreamApp>
    </div>
    );
  }
}

export default withRouter(UserDash);
