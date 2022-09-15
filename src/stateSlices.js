import { createSlice, configureStore} from '@reduxjs/toolkit'

const stateSlices = createSlice({
    name: 'stateSlices',
    initialState: {
        token: "",
        tokendate: "",
        userid: "",
        useremail: ""
    },
    reducers: {
        updateSession: (state, action) => {
            console.log(`stateSlices Reducers ${action.token}::${action.tokendate}::${action.userid}`)
            
        }
    }
})

export const { updateSession } = stateSlices.actions
export default stateSlices.reducer

