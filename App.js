import React from 'react'
import { Button, Form,Header } from 'semantic-ui-react'

const FormExampleForm = () => (
<div>
  <Header as='h1'>Add Page</Header>
  <Form>
    <Form.Field>
      <label>Title</label>
      <input placeholder='Title' />
    </Form.Field>
    <div class="ui right labeled left icon input">
    <i class="tags icon"></i>
    <input type="text" placeholder="Enter tags"/>
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
    <Button type='submit'>Submit</Button>
  </Form>
  </div>
)

export default FormExampleForm