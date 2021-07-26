import React, {createContext,useContext,useReducer } from 'react';

//used for preparing data layer
export const StateContext=createContext();

//Wrapping data and providing data layer
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//pulling information from data layer
export const useStateValue=()=>useContext(StateContext);
