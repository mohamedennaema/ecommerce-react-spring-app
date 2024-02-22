import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";
import productReducer from "./product/Reducer";
import cartReducer from "./cart/Reducer";
import orderReducer from "./order/Reducer";
import reviewReducer from "./review/reducer";
import ratingReducer from "./rating/reducer";
import ProductHomeReducer from "./home/Reducer";

const rootReducers=combineReducers(
    {
     auth:authReducer,
     products:productReducer,
     card:cartReducer,
     order:orderReducer,
     review: reviewReducer,
     rating: ratingReducer,
     productsHome:ProductHomeReducer
    }
)
export const store=legacy_createStore(rootReducers,applyMiddleware(thunk))