import React, { Component } from "react";
import axios from "axios";
import SimpleTable from "../../components/SimpleTable";
import Typography from "@material-ui/core/Typography";
import GoogleMapReact from "google-map-react";
import PACKAGE from "../../../package.json";

import "./eco.css";

const PuntoBicicleta = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

const API_URL = PACKAGE.config.api[process.env.NODE_ENV];

class VisualizarEstaciones extends Component {
  static defaultProps = {
    center: {
      lat: 6.2315749,
      lng: -75.6042932
    },
    zoom: 16
  };

  constructor(props) {
    super(props);

    this.state = {
      estaciones: [
        {
          lat: 6.230767,
          lng: -75.609732,
          nombre: "Estacion UdeM"
        },
        {
          lat: 6.237116,
          lng: -75.603474,
          nombre: "Estacion La 80"
        },
        {
          lat: 6.239029,
          lng: -75.585802,
          nombre: "Estacion La 33"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Visualizar Estaciones
        </Typography>

        <div className="ecoWheels-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAHbC2zuS8DRYn6zOCre5z5r0iZhW16kV8"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.state.estaciones.map(estacion => (
              <PuntoBicicleta
                lat={estacion.lat}
                lng={estacion.lng}
                text={estacion.nombre}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default VisualizarEstaciones;
