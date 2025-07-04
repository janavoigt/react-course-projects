import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialstate = { counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialstate,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }

    }

});

const initialAuthState = { isAuthenticated: false};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        },
    }

})

// const counterReducer = (state = initialstate, action) => {
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.counter
//         };
//     }

//     if(action.type === 'increaseby5'){
//         return{
//             counter: state.counter + action.amount,
//             showCounter: state.counter 
//         }
//     }

//     if(action.type === 'decrement'){
//         return{
//             counter: state.counter - 1,
//             showCounter: state.counter
//         };
//     }

//     if(action.type === 'toggle'){
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// };

const store = configureStore({
    reducer: {counter : counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;