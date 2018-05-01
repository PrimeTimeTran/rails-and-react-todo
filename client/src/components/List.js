import React from 'react';
import { Panel } from 'react-bootstrap'

const List = ({ list, onRemoveList }) => {
  return (
    <Panel bsStyle="primary key={list.id}">
      <Panel.Heading onClick={() => onRemoveList(list.id)}>
        <Panel.Title componentClass="h3">{list.title}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>{list.excerpt}</Panel.Body>
    </Panel>
  )
}

export default List;