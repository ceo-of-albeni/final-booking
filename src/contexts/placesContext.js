import React, { useReducer } from "react";
import axios from "axios";

export const placesContext = React.createContext();

const INIT_STATE = {

}

function reducer(params) {
  
}

const API = '';

const placesContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <div>

    </div>
  )
}

export default placesContext