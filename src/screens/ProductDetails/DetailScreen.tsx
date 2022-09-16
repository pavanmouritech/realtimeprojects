import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

function Separator() {
  return <View style={{borderBottomWidth: 1, borderBottomColor: '#a9a9a9'}} />;
}
const DetailsScreen = ({route}) => {
  const {item} = route.params;
  console.log(item);
  return (
    <View>
      <View style={styles.mainCardView}>
        <Text>{item.id}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.disscription}>{item.description}</Text>
        <Text style={styles.rating}> Ratings :{item.rating.rate}</Text>

        <View style={styles.subCardView}>
          <Image style={styles.image} source={{uri: item.image}} />
          <Text style={styles.price}>RS.{item.price}</Text>
          <Text style={styles.category}>{item.category}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
