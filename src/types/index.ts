  export type Product ={
      id:number ,
      title: string,
      price: number,
      description: string,
      category: string,
      image: string,
      rating: {
         rate: number,
         count: number
       }
  };
  
  export type ProductResponse = {
    token: string;
  };
  
  export type ProductResponseError = {
    error: string;
  };
  
  export type ProductInfo = {
    productRequestPayload?: ProductRequestPayload;
    isLoading: boolean;
    product?: Product;
    productResponseError?: ProductResponseError;
  };
  
  export type AxiosProps = {
    type: any;
    url: any;
    params?: any;
    header?: any;
  };
  
  export type ProductRequestPayload = {
    id: number;
  }
  
  export type DataResponseError = {
    error: string;
  };
  
  