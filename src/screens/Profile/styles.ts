import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor:'green',
        padding: 10,
        fontSize:16,
        fontWeight:'bold',
      },
    image:{
        resizeMode: 'center',
        width: 150,
        height: 150,
        borderRadius: 100 / 1,
        alignSelf: 'center',
        margin:10,
    },
})

export default styles;