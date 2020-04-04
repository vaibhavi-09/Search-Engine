import React from 'react'
import { Form,Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('http://localhost:5000/api/AddPage', {
      method: 'POST',
      body: data,
    });
  }
 render() {
  return (
  <div>
  <Header as='h1'>Add Page</Header>
  <Form onSubmit={this.handleSubmit}>
    <Form.Field>
      <label>Title</label>
      <input type="text" name="title" placeholder='Title'/>
    </Form.Field>
    <div class="ui right labeled left icon input">
    <i class="tags icon"></i>
    <input type="text" name="tags" placeholder="Enter tags" />
    <a class="ui tag label">
    Add Tag
    </a>
    </div>
    <div class="ui form">
    <div class="field">
    <label>Description</label>
   <textarea></textarea>
    </div>
    </div>
    <div>
    <button class="ui green button">Submit</button>
    <button class="ui blue button">Like</button>
    </div>
  </Form>
  </div>
);
}
}

export default MyForm