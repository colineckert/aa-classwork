import React from 'react';
import { uniqueId } from '../../util/utility';

export class TodoForm extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      id: uniqueId(),
      title: '',
      body: ''
    }

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input onChange={this.updateTitle} type="text" value={this.state.title}/>
        </label><br/>

        <label>Body:
          <input onChange={this.updateBody} type="text" value={this.state.body}/>
        </label><br/>

        <input type="submit" value="Create Todo"/>
      </form>
    )
  }
}

export default TodoForm;
