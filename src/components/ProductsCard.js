import React from 'react';
import { View,Image,Text } from 'react-native';
import styles from './ProductsCardStyle';

const ProductsCard = ({ products }) => {
    return (

        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: products.imgURL }}></Image>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
            </View>
        </View>
    );
}

export default ProductsCard;