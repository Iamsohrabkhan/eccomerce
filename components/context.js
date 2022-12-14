import React, {  useContext,useState,useEffect } from "react";
const AppContext = React.createContext();

// Create our number formatter.
const formatter = new Intl.NumberFormat('ur-PK', {
  style: 'currency',
  currency: 'PKR',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

// console.log(formatter.format(2500)); /* $2,500.00 */

function toCapitilize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const AppProvider = ({children}) => {
  return  <AppContext.Provider value={{formatter,toCapitilize}}>{children}</AppContext.Provider>;
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext)
};
export { AppContext,AppProvider ,useGlobalContext};
