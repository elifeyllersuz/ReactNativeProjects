import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginLeft:1,
        marginRight:1,
        borderRadius:10
    
    },
    inner_container: {
        padding: 1
    },
    image: {
        height: Dimensions.get('window').height / 3,
        width:Dimensions.get('window').width/2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 12 
    },
    price: {
        fontWeight: 'bold',
        fontSize: 15
    }
})