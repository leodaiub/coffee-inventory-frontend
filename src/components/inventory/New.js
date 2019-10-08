import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import api from '../../services/api';

export default class New extends Component {
  constructor(props){
    super(props)
    this.state ={
      name: '',
      costPrice: 0,
      sellingPrice: 0,
      quantity: 0
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleNew = async e => {
    await api.post(`/products/`, this.state);
    this.props.handleUpdate();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleUpdate}>
          <TextField
              id="outlined-name"
              label="Produto"
              name="name"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Preço de custo"
              name="costPrice"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Preço de venda"
              name="sellingPrice"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Quantidade em estoque"
              name="quantity"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <IconButton onClick={this.handleNew} style={{margin:17}} aria-label="add">
              <AddIcon />
            </IconButton>
          </form>
      </div>
    )
  }
}