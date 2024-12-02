import React from "react";

const TaskCardDescription = ({ description }: { description: string }) => {
  return (
    <div className="line-clamp-2 caption-c1 2xl:body-b1 text-custom-dark-400 break-words">
      {description}
    </div>
  );
};

export default TaskCardDescription;
