import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import api from '../../services/api';
import New from './New';

export default class SimpleTable extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      list: []
    };
}
  async componentDidMount() {
    const response = await api.get('/products')
    this.setState({list: response.data});
  }

  handleDelete = async id => {
    const r = window.confirm("Quer mesmo apagar esse registro?"); 
      if(r === true){
        await api.delete(`/products/${id}/`);
      }
    await this.props.history.push('/estoque/new')
  }
    
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async id => {
    await api.put(`/products/${id}/`, this.state);
  }  

  handleUpdate = e => {
    this.props.history.push('/estoque/new')
  }

  render(){
    return (
      <Paper >
        <New handleUpdate={this.handleUpdate.bind(this)}></New>
        <Table>        
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Produto</TableCell>
              <TableCell align="right">Preço de custo</TableCell>
              <TableCell align="right">Preço de venda</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="right"><TextField
                  id="outlined-name"
                  label="Name"
                  name="itemName"
                  defaultValue={row.name}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                /></TableCell>
                <TableCell align="right"><TextField
                  id="outlined-name"
                  label="Name"
                  name="price"
                  defaultValue={row.costPrice}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                /></TableCell>
                <TableCell align="right"><TextField
                  id="outlined-name"
                  label="Name"
                  name="quantity"
                  defaultValue={row.sellingPrice}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                /></TableCell>
                <TableCell align="right"><TextField
                  id="outlined-name"
                  label="Name"
                  name="quantity"
                  defaultValue={row.quantity}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                /></TableCell>
                <TableCell align="right">
                <IconButton onClick={this.handleDelete.bind(this, row._id)} aria-label="delete">
                  <DeleteIcon />
                </IconButton> 
                <IconButton onClick={this.handleSubmit.bind(this, row._id)} aria-label="delete">
                  <SaveIcon />
                </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
