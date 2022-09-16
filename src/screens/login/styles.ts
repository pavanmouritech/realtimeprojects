import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logoContainer:{
        resizeMode: 'center',
        width: 200,
        height: 200,
        borderRadius: 100 / 1,
        alignSelf: 'center',
        margin:10, 
    },
    textInput:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontWeight:'bold',
        fontSize:16,
        marginTop: 20,
        borderColor:'#ff5c33'
    },
    loginBn: {
        width: '60%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 70,
        marginTop: '10%',
        backgroundColor: '#ffffb3',
        shadowColor: '#171717',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation:6,
      },
      textBtn:{
        fontSize:18,
        fontWeight:'bold',
      },
      resBtn: {
        width: '60%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 70,
        marginTop: '20%',
        backgroundColor:'#ffcce6',
      }, 
});

export default styles;