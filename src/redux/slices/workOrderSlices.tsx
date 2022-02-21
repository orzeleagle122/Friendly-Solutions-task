import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IWorkOrders} from "../../types/IWorkOrders";

const initialState = [] as IWorkOrders[];

export const workOrderSlices = createSlice({
    name: "workOrder",
    initialState: initialState,
    reducers: {
        getWorkOrderData: (state, action: PayloadAction<IWorkOrders[]>) => {
            state = action.payload;
            return state;
        }
    },
})

export const {getWorkOrderData} = workOrderSlices.actions;

export default workOrderSlices.reducer;