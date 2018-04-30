import React from 'react';

const List = ({ list, onRemoveList }) => {
  return (
    <div className="single-list" key={list.id}>
      <h4 onClick={() => onRemoveList(list.id)}>{list.title}</h4>
      <p>{list.excerpt}</p>
    </div>
  )
}

export default List;