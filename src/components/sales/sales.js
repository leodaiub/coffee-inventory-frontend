import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import Fab from '@material-ui/core/Fab';
import api from '../../services/api';

export default class SimpleTable extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      list: []
    };
}
  async componentDidMount() {
    const response = await api.get('/sales')

    this.setState({list: response.data});
    console.log(this.state.list);
  }

  handleDelete = async id => {
    await api.delete(`/sales/${id}/`);
    await this.props.history.push('/');
  }

  handleChange = e => {
    console.log(this.state)
    this.setState({ [e.target.name]: e.target.value });
 }

  handleSubmit = async id => {
    await api.put(`/sales/${id}/`, this.state);
    this.props.history.push('/');
  }

  handleNew = async e => {
    console.log(this.state)
    await api.post(`/sales/`, this.state);
    this.props.history.push('/');
  }
  

  render(){
    return (
      <Paper >
        <Container>
          <TextField
              id="outlined-name"
              label="Name"
              name="itemName"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Name"
              name="price"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Name"
              name="quantity"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <IconButton onClick={this.handleNew} style={{margin:17}} aria-label="add">
              <AddIcon />
            </IconButton>
          </Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Produto</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Quantidade</TableCell>
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
                <div>
                <IconButton onClick={this.handleDelete.bind(this, row._id)} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                </div>
                <div>
                <IconButton onClick={this.handleSubmit.bind(this, row._id)} aria-label="delete">
                  <SaveIcon />
                </IconButton>
                </div>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
