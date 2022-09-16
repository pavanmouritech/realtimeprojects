import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        padding:10,
    },
    textInput:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontWeight:'bold',
        fontSize:16,
        borderColor:'#ff5c33'
    },
    button: {
        width: '60%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 70,
        marginTop: 30,
        backgroundColor: '#ff99ff',
      },
      textBtn:{
        fontSize:18,
        fontWeight:'bold',
      }, 
});

export default styles;