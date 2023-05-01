import React from "react";

const UserItem = (props) => {
  return (
    <div>
      <p>
        {props.name}, {props.age}
      </p>
    </div>
  );
};

export default UserItem;
