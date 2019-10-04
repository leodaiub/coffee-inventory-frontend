import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Add';
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

  render(){
    return (
      <Paper >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Produto</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              <Fab onClick={''} size="small" color="primary" aria-label="add">
                  <AddIcon />
              </Fab>
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
                  className={''}
                  value={row.price}
                  onChange={''}
                  margin="normal"
                  variant="outlined"
                /></TableCell>
                <TableCell align="right">R${row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <IconButton onClick={this.handleDelete.bind(this, row._id)} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={this.handleDelete.bind(this, row._id)} aria-label="delete">
                  <SaveIcon />
                </IconButton>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
