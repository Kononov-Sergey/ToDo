import React from "react";

import "./CourseGoalItem.css";

function CourseGoalItem(props) {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item">
      {props.children}
      <div className="close-icon" onClick={deleteHandler}></div>
    </li>
  );
}

export default CourseGoalItem;
