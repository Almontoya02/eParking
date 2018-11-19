import React, { Fragment, Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from "@material-ui/core/Snackbar";
import Select from "@material-ui/core/Select";
import PACKAGE from "../../../package.json";

const API_URL = "http://localhost:3001/api";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class ReportarNovedad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Cedula: 0,
      Tipo: "",
      Descripcion:"",
      Zona:"",
      Zonas:[],
      open: false
    };

    this.crearNovedad = this.crearNovedad.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ open: false });
  }

  getZonas() {
    axios.get(`${API_URL}/zonas`).then(res => {
      const { data } = res;
      this.setState({
        estaciones: data
      });
    });
  }
  crearNovedad(e) {
    e.preventDefault();

    axios
      .post(`${API_URL}/novedad/`, {
        Cedula: this.state.Cedula,
        Tipo: this.state.Tipo,
        Descripcion: this.state.Descripcion,
        Zona: this.state.Zona
      })
      .then(res => {
        this.setState({
          Cedula: 0,
          Tipo: "",
          Descripcion:"",
          Zona:"",
          open: true
        });
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={this.state.open}
          onClose={this.handleClose}
          message={<span id="message-id">Novedad creada con exito</span>}
        />
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
             Novedad
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="Cedula">Cedula</InputLabel>
                <Input
                  id="Cedula"
                  name="Cedula"
                  autoFocus
                  value={this.state.Cedula}
                  onChange={e => this.setState({ Cedula: e.target.value })}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="Tipo">Tipo</InputLabel>
                <Input
                  id="Tipo"
                  name="Tipo"
                  value={this.state.Tipo}
                  onChange={e => this.setState({ Tipo: e.target.value })}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="Descripcion">Descripcion</InputLabel>
                <Input
                  id="Descripcion"
                  name="Descripcion"
                  autoFocus
                  value={this.state.Descripcion}
                  onChange={e => this.setState({ Descripcion: e.target.value })}
                />
              </FormControl>
              <FormControl margin="Zona" required fullWidth>
                <InputLabel htmlFor="Zona">Zona</InputLabel>
                <Select
                  id="Zona"
                  name="Zona"
                  autoFocus
                  value={this.state.Zona}
                  onChange={e => this.setState({ Zona: e.target.value })}
                >
                    {this.state.Zonas.map(Zona => (
                    <MenuItem value={Zona.nombre}>
                      {Zona.nombre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.crearNovedad}
              >
              Crear Novedad
              </Button>
            </form>
          </Paper>
        </main>
      </Fragment>
    );
  }
}

ReportarNovedad.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReportarNovedad);
