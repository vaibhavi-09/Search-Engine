import React from 'react';
import axios from 'axios';
import { Form,Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      description: '',
    };
    
  }

  onChange = (e) => {
  
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit =  (e) => {
    e.preventDefault();
    // get our form data out of state
    const { title, tags, description } = this.state;
    let sendData={'title':title,'tags':tags,'description':description}
    let axiosConfig ={
      headers:{
        'Content-Type' : 'application/json'
      }
    };
    axios.post('http://localhost:5000/api/AddPage/AddPageFunc',sendData,axiosConfig).then(response => console.log(response))
    .catch(error => console.log(error));
    
}
 render() {
  const { title, tags, description } = this.state;
  return (
  <div>
  <Header as='h1'>Add Page</Header>
  <Form  class="ui form" onSubmit={this.onSubmit}>
  <div class="field">
  <label>Title <input type="text" name="title" value={title} onChange={this.onChange}/></label>
  </div>
  <div class="field">
  <label>Tags  <input type="text" name="tags" value={tags} onChange={this.onChange}/></label>
  </div>
  <div class="field">
  <label>Description <input type="text" name="description" value={description} onChange={this.onChange}/></label>
  </div>
  <button type="submit" class="ui green button">Submit</button>
  <button class="ui blue button">Like</button>
  </Form>
  </div>
);
}
}

export default MyForm