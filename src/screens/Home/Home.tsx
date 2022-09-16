import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { callProduct, selectProductInfo } from '../../redux/Productlist/slice';
import styles from "./styles";


const Product = ({navigation}) => {
   
    const dispatch = useAppDispatch();
    const { isLoading, product, productResponseError } = useAppSelector(selectProductInfo);
    useEffect(() => {
        dispatch(callProduct());
    }, [dispatch]);
    return isLoading ?
        (
            <View style={styles.ccontainer}>
                <ActivityIndicator size="large" color="#00ff" />
            </View>

        )
        : productResponseError ? (<View style={styles.container}>
            <Text style={styles.errorText}>{productResponseError}</Text>
        </View>) :
            (
                <FlatList
                        data={product}
                        keyExtractor={item => item.id}
                        renderItem={
                            ({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen',
                                        { item: item })}>
                        <View style={styles.mainCardView}>
                                  <Text>{item.id}</Text> 
                                  <Text style={styles.title}>{item.title}</Text>
                                  <Text style={styles.disscription}>{item.description}</Text>
                                  <Text style={styles.rating}> Ratings :{item.rating.rate}</Text>
                                  
                            <View style={styles.subCardView}>
                                  <Image style={styles.image} source={{ uri: item.image }} />
                                  <Text style={styles.price}>RS.{item.price}</Text>
                                  <Text style={styles.category}>{item.category}</Text>
                            </View>
                        </View>
                          </TouchableOpacity>
                                );
                            }}
                />
            );
}
export default Product;
