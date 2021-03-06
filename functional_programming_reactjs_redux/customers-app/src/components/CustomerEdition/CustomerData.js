import React from "react";
import PropTypes from "prop-types";
import CustomerActions from "../CustomerActions";

const CustomerData = ({ name, dni, age, onBack, onDelete }) => {
  return (
    <div>
      <div className={"customer-data"}>
        <h2>Datos del cliente</h2>
        <div>
          <b>Nombre: </b>
          {name}
        </div>
        <div>
          <b>DNI: </b>
          {dni}
        </div>
        <div>
          <b>Edad: </b>
          {age}
        </div>

        <CustomerActions>
          {onDelete && (
            <button type="button" onClick={() => onDelete({ name, dni, age })}>
              Eliminar
            </button>
          )}
          <button type="button" onClick={onBack}>
            Cancelar
          </button>
        </CustomerActions>
      </div>
    </div>
  );
};

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
};

export default CustomerData;
