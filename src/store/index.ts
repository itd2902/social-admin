import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { accountReducer } from "./account/reducer";

const rootReducer = combineReducers({
    account: accountReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//strong type toàn bộ db. add strong type
//lấy được bất cứ state nào từ AppState
export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunk];
    const middlewaresEnhancer = applyMiddleware(...middlewares);
    return createStore(rootReducer, composeEnhancers(middlewaresEnhancer));
}