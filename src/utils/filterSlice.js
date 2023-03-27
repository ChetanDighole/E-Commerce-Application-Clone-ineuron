import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        items: []
    },
    reducers: {
        filterData : (state , action) => {

            const { product , text } = action.payload

            if(text === 'All'){
                state.items = product
            }else{
            state.items = product.filter((eachEle)=>eachEle.category.includes(text))
            }
        }
    },
    
})

export const {filterData} = filterSlice.actions;

export default filterSlice.reducer
