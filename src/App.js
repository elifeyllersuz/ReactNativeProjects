// import React from "react";
// import { SafeAreaView, StyleSheet, TextInput} from "react-native";



// const App = () => {
//     const [text,onChangeText] = React.useState("Ara...");
//     return(
//         <SafeAreaView>
//             <TextInput 
//                style={styles.input}
//                onChangeText={onChangeText}
//                value={text}
//             />
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     input: {
//         height:40,
//         margin12,
//         borderWidth:1,
//         padding:10
//     }
// })

// export default App;
import React from "react";
import { SafeAreaView, FlatList, StyleSheet, TextInput,View,Text } from "react-native";
import ProductsCard from './components/ProductsCard';
import products_data from './products_data.json';

const App = () => {
    const renderProducts = ({ item }) => <ProductsCard products={item} />;
    const [text, onChangeText] = React.useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.header_text}>PATIKASTORE</Text>
            </View>
            <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Ara..."
            />
            </View>

            <FlatList
                keyExtractor={item => item.u_id.toString()}
                numColumns={2}
                data={products_data}
                renderItem={renderProducts}

            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'eceff1',
        margin:10
    },
    header_text:{
        color:'purple',
        fontSize: 40,
        textAlign:"center"
    }
});

export default App;