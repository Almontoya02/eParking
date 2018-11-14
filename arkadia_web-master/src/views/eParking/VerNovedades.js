import React, { Component } from "react";
import axios from "axios";
import SimpleTable from "../../components/SimpleTable";
import Typography from "@material-ui/core/Typography";

import PACKAGE from "../../../package.json";

const API_URL = "http://localhost:3001/api";

class VerNovedades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      novedades: []
    };

    this.getNovedades = this.getNovedades.bind(this);
  }

  componentDidMount() {
    this.getNovedades();
  }

  getNovedades() {
    axios.get(`${API_URL}/novedad/`).then(res => {
      const { data } = res;

      this.setState({
        novedades: data
      });
    });
  }

  render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Novedades
        </Typography>

        <div>
          <SimpleTable
            lista={this.state.novedades}
            columns={["Cedula", "Tipo","Descripción", "Zona"]}
          />
        </div>
      </div>
    );
  }
}

export default VerNovedades;
