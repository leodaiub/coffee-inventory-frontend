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
      list: [],
      itens: []
    };
}
  async componentDidMount() {
    const response = await api.get('/sales')
    this.setState({list: response.data});
    const itens = await api.get('/products');
    this.setState({itens: itens.data});

  }

  handleDelete = async id => {
    const r = window.confirm("Quer mesmo apagar esse registro?"); 
      if(r === true){
        await api.delete(`/sales/${id}/`);
        await this.props.history.push('/');
    }
  }

  handleChange = e => {
    console.log(this.state)
    this.setState({ [e.target.name]: e.target.value });
 }

  handleSubmit = async id => {
    await api.put(`/sales/${id}/`, this.state);
    this.props.history.push('/');
  }  

  render(){
    return (
      <Paper >
        <New></New>
        <Table>        
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Produto</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.item}
                </TableCell>
                <TableCell align="right"><TextField
                  id="outlined-name"
                  label="Name"
                  name="itemName"
                  defaultValue={row.itemName}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                /></TableCell>
                <TableCell align="right"><TextField
                  id="outlined-name"
                  label="Name"
                  name="price"
                  defaultValue={row.price}
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
