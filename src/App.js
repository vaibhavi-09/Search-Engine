import React from 'react';
import axios from 'axios';
import { Form,Header ,Segment,Grid,Label,List,Button,Menu} from 'semantic-ui-react';
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
    <Menu inverted color='blue'>
    <Menu.Item name='Home'/>
    <Menu.Item name='Results'/>
    </Menu>
    
    <Segment inverted color='violet'>Add Page</Segment>
   
  <Form  class="ui form" onSubmit={this.onSubmit}>
  <div class="field">
  <Label>Title <input type="text" name="title" value={title} onChange={this.onChange}/></Label>
  </div>
  <div class="field">
  <Label>Tags  <input type="text" name="tags" value={tags} onChange={this.onChange}/></Label>
  </div>
  <div class="field">
  <Label>Description </Label>
  <textarea name="description" value={description} onChange={this.onChange} ></textarea>
  </div>
  <Button color='green' type="submit"  >Submit</Button>
  </Form>
  
  <Segment inverted color='blue'>
  <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3} >
            <Header inverted as='h4' content='About' />
<List link inverted>
    <List.Item icon='users' content='NAV Backoffice'  />
    <List.Item icon='marker' content='Sitapura,Jaipur' />
    <List.Item
      icon='mail'
      content={<a href='mailto:hr@navbackoffice.com'>hr@navbackoffice.com</a>}
    />
    <List.Item
      icon='linkify'
      content={<a href='www.navbackoffice.com'>www.navbackoffice.com</a>}
    />
  </List>
  </Grid.Column>

  <Grid.Column width={3}>
  <Header inverted as='h4' content='Services' />
  <List link inverted>
  <List.Item as='a'>Hedge Funds </List.Item>
  <List.Item as='a'>Private Equity</List.Item>
  <List.Item as='a'>Commodity Pools</List.Item>
  <List.Item as='a'>Multi Advisor Platforms</List.Item>
  </List>
  </Grid.Column>
  <Grid.Column width={7}>
  <Header inverted as='h4' content='NAV Search Engine'/> 
  <p>Search Information related to NAV IT Documents ,Links,
  <n>Functionalities etc.</n>
  </p>
  </Grid.Column>
  </Grid.Row>
  </Grid>
  </Segment>

  
  </div>
);
}
}

export default MyForm