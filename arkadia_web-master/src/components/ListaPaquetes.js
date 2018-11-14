import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "./MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const populateHistorias = historiasDeUsuario => {
  return historiasDeUsuario.map(historia => (
    <ListItem
      button
      key={historia._id}
      component={Link}
      to={historia.referencia}
    >
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText inset primary={historia.nombre} />
    </ListItem>
  ));
};

const ListaPaquetes = ({ paquetes }) => {
  return (
    <div>
      {paquetes.map(paquete => (
        <MenuItem paquete={paquete} key={paquete._id}>
          {populateHistorias(paquete.historiasDeUsuario)}
        </MenuItem>
      ))}
    </div>
  );
};

export default ListaPaquetes;
