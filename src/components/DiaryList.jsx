import React from "react";
import DiaryItem from "./DiaryItem";

const DiaryList = ({ allDiary, onRemove }) => {
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>{allDiary.length}개의 내용이 있습니다.</h4>
      <div>
        {allDiary.map((item) => {
          return <DiaryItem key={item.id} {...item} onRemove={onRemove} />;
        })}
      </div>
    </div>
  );
};

export default DiaryList;
