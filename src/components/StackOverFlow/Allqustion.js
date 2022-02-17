import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "./css/Allqustion.css";
function Allqustion() {
  return (
    <div className="all-questions">
      <div className="all-questions">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>Question</span>
            </div>
            <div className="all-option">
              <small>0 views</small>
            </div>
          </div>
          <div className="question-answer">
            <Link>Unable to push commits in git repository</Link>
            <div style={{ width: "100%" }}>
              <div>
                I have made changes to my file and now would like to push those
                commits. I tried using git commit and it is giving me Error $
                git commit npm ERR! could not determine executable to run What
                I've Tried ...
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <span className="question-tags">react</span>
              <span className="question-tags">node</span>
              <span className="question-tags">git</span>
            </div>
          </div>

          <div className="author">
            <small>Date</small>
            <div className="author-details">
              <Avatar />
              <p>user name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allqustion;
