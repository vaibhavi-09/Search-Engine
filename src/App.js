import React from 'react';
import axios from 'axios';
import { Form,Header ,Segment,Grid,List,Button,Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import TagsInput from 'react-tagsinput';
import './index.css';
import 'react-tagsinput/react-tagsinput.css'


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: [],
     description: '',
     links: []
    };
    
  }
  handleLinksChange(links) {
    this.setState({links})
  }

  handleChange(tags) {
    this.setState({tags})
  }
  onChange = (e) => {
  
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit =  (e) => 
  {
    e.preventDefault();
    // get our form data out of state
    const { title, tags, description } = this.state;
    const searchUrl='https://localhost:5001/api/AddPage/AddPageFunc'
    let sendData={'title':title,'tags':tags,'description':description}
    let axiosConfig ={
      headers:{
        'Content-Type' : 'application/json'
      }
    };
    axios.post(searchUrl,sendData,axiosConfig).then(response => console.log(response))
    .catch(error => console.log(error));

  
  }
 render() {
  //const {title, tags, description } = this.state;
  return (
  <div>
    <Menu inverted color='blue'>
    <Menu.Item name='Home'/>
    <Menu.Item name='Results'/>
    </Menu>
    
    <Segment inverted color='teal'>Add Page</Segment>
   <Segment>
   <div class="ui internally celled grid">
   <div class="ten wide column">
  <Form  class="ui form" onSubmit={this.onSubmit}>
  <div class="field">
  <label>Title <input type="text" name="title" value={this.state.title} onChange={this.onChange}/></label>
  </div>
  <div class="field">
  <label>Description </label>
  <textarea name="description" value={this.state.description} onChange={this.onChange} ></textarea>
  </div>
  <Button color='green' type="submit"  >Add Page</Button>
  </Form>
  </div>
  <div class="six wide column">
      <label>Tags<TagsInput addKeys={[9, 13, 32, 188]} name="tags"  value={this.state.tags} onChange={this.handleChange.bind(this)}/></label>
      <label>Links<TagsInput addKeys={[9, 13, 32, 188]} name="links"  value={this.state.links} onChange={this.handleLinksChange.bind(this)}/></label>
  </div>
  </div>
  </Segment>
  

  <Grid divided inverted stackable style={{height: '30vh'}}>
          <Grid.Row color='blue'>
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
  <Header inverted as='h4' content='Search Express'/> 
  <p>Search Information related to NAV IT Documents ,Links,
  <n>Functionalities etc.</n>
  </p>
  </Grid.Column>
  </Grid.Row>
  </Grid>
 

  
  </div>
);
}
}

export default MyForm