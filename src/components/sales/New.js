import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "react-router-dom";
import api from "../../services/api";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      quantity: 0
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNew = async (e) => {
    await api.post(`/sales/`, this.state);
    //this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Container>
          <TextField
            id="outlined-name"
            label="ID do produto"
            name="item"
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Quantidade"
            name="quantity"
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <IconButton
            onClick={this.handleNew}
            style={{ margin: 17 }}
            aria-label="add"
          >
            <AddIcon />
          </IconButton>
        </Container>
      </div>
    );
  }
}
export default withRouter(New);
