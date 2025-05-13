import {createContext, useContext} from "react";

// Build our context object
export const RestaurantContext = createContext();
// Builds the function that will access context
export const useRestaurants = () => useContext(RestaurantContext);