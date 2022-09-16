import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../../../redux/store';
import { Product, ProductInfo, ProductResponseError } from '../../../types';
    
    export const initialState: ProductInfo = {
      isLoading: false,
      product: undefined,
      productResponseError: undefined,
    };
    
    export const productSlice = createSlice({
      name: 'products',
      initialState,
      reducers: {
        callProduct: state => {
          state.isLoading = true;
        },
        productSuccess: (state, action: PayloadAction<Product>) => {
          state.product = action.payload;
          state.isLoading = false;
        },
        productError: (state, action: PayloadAction<ProductResponseError>) => {
          state.productResponseError = action.payload;
          state.isLoading = false;
        },
      }, 
    });
    
    export const {callProduct, productSuccess, productError} = productSlice.actions;
    
   
    export const selectProductInfo = (state: RootState) => state.products;
        const productReducer = productSlice.reducer;
    export default productReducer;