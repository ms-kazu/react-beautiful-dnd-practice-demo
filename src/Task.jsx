import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd' // 追加

const List = styled.li`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`

export default class Task extends React.Component {
  render() {
    return(
      <Draggable 
        draggableId={this.props.task.id} // 追加
        index={this.props.index} // 追加
      >
      {(provided) => ( // 追加
        <List 
          ref={provided.innerRef} // 追加
          {...provided.draggableProps} // 追加
          {...provided.dragHandleProps} // 追加
        >
          {this.props.task.content}
        </List>
      )}
      </Draggable>
    )
  }
}