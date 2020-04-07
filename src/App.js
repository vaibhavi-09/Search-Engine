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
  <div class="ui form">
  <div class="field">
    <label>Title</label>
    <input type="text" name="Title" placeholder="Enter Title"/>
  </div>
  <div class="field">
    <label>Tags</label>
    <input type="text" name="Tags" placeholder="Enter Tags"/>
  </div>
    <div class="field">
    <label>Description</label>
   <textarea></textarea>
    </div>
    <div>
    <button type="submit" class="ui green button">Submit</button>
    <button class="ui blue button">Like</button>
    </div>
    </div>
  </Form>
  </div>
);
}
}

export default MyForm