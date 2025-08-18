import React from "react";

import author1 from "../../assets/img/others/author_1.jpg";
import author2 from "../../assets/img/others/author_2.jpg";
import author3 from "../../assets/img/others/author_3.jpg";

export const BlogComments = () => {
  return (
    <div id="comments" className="comments-area">
      <h2 className="comments-title td_fs_20 td_semibold">02 Comments</h2>
      <ol className="comment-list">
        <li className="comment">
          <div className="comment-body">
            <div className="comment-author vcard">
              <img className="avatar" src={author2} alt="Author" />
              <a href="#" className="url">
                Jessica Rose
              </a>
            </div>
            <div className="comment-meta">
              <a href="#">July 31, 2024</a>
            </div>
            <p>
              Finanappreciate your trust greatly Our clients choose dentace
              ducts because know we are the best area Awaitingare really.
            </p>
            <div className="reply">
              <a className="comment-reply-link" href="#">
                Reply
              </a>
            </div>
          </div>
          <ol className="children">
            <li className="comment">
              <div className="comment-body">
                <div className="comment-author vcard">
                  <img className="avatar" src={author3} alt="Author" />
                  <a href="#" className="url">
                    Sarah Taylor
                  </a>
                </div>
                <div className="comment-meta">
                  <a href="#">July 31, 2024</a>
                </div>
                <p>Thanks bro 🙂</p>
                <div className="reply">
                  <a className="comment-reply-link" href="#">
                    Reply
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </li>
        <li className="comment cs-accent_4_bg">
          <div className="comment-body">
            <div className="comment-author vcard">
              <img className="avatar" src={author1} alt="Author" />
              <a href="#" className="url">
                Parker Willy
              </a>
            </div>
            <div className="comment-meta">
              <a href="#">July 31, 2024</a>
            </div>
            <p>
              Finanappreciate your trust greatly Our clients choose dentace
              ducts because know we are the best area Awaitingare really.
            </p>
            <div className="reply">
              <a className="comment-reply-link" href="#">
                Reply
              </a>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};
