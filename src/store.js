import { configureStore } from "@reduxjs/toolkit";
import stateSlices from './stateSlices'

export default configureStore({
    reducer: {
        stateSlices: stateSlices
    }
})