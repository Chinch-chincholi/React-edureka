import React from "react";
import { Link } from "react-router-dom";

const PostView = (props) => {
  // console.log(props.listData);

  const listAll = ({ listData }) => {
    if (listData) {
      return listData.map((item) => {
        return (
          <div key={item.id}>
            <Link className="btn btn-info" to={`/posts/${item.id}`}>
              Details
            </Link>
          </div>
        );
      });
    }
  };
  return <>{listAll(props)}</>;
};

export default PostView;
