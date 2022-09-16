import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  
    container: {
          flex:1,
        },
    ccontainer:{
          flex:1,
          alignItems:'center',
          backgroundColor:'#fff'
        },
    Productcontainer:{
          padding:10,
        },
    image:{
          width:50,
          height:60,
        },
    errorText:{
          alignContent: 'center',
    },
    title: {
          marginLeft: 70,
          textAlign: 'center',
          top: 20,
          color: 'black',
          fontSize: 15,
    },
    price: {
          color: 'black',
          width: 70,
    },
    category: {
          color: 'black',
          width: 70,
    },
    disscription: {
          paddingLeft: 100,
          top: 40,
    },
    rating: {
          paddingLeft: 100,
          top: 60,
          fontSize: 15,
          color: 'black',
    },
    mainCardView: {
          height: 300,
          backgroundColor: '#fff',
          borderRadius: 15,
          shadowColor: '#92989c',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 1,
          shadowRadius: 8,
          elevation: 8,
          paddingLeft: 16,
          paddingRight: 14,
          marginTop: 6,
          marginBottom: 6,
    },
    subCardView: {
          height: 50,
          width: 50,
    },
    });

export default styles;