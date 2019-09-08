import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import FlipCard from 'react-native-flip-card';

class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{name: 'test'}],
    };
  }

  renterItem = data => {
    const {item} = data;
    return (
      <FlipCard
        flipHorizontal={true}
        flipVertical={false}
        friction={6}
        perspective={1000}
        onFlipStart={() => console.log(item)}>
        {/* Face Side */}
        <View style={styles.card}>
          <Text style={styles.title}>{item.name}</Text>
          <Image
            source={{uri: item.img}}
            style={{width: '100%', height: 475}}
          />
        </View>
        {/* Back Side */}
        <View style={styles.card}>
          <Text>{`Card Set: ${item.cardSet}`}</Text>
          <Text>{`Player Class: ${item.playerClass}`}</Text>
          <Text>{`Card Rarity: ${item.rarity}`}</Text>
          <Text>{`Card Type : ${item.type}`}</Text>
          <Text>{`Race : ${item.race}`}</Text>
          <Text>{`health : ${item.health}`}</Text>
          <Text>{`attack : ${item.attack}`}</Text>
        </View>
      </FlipCard>
    );
  };

  render() {
    const {data} = this.props;
    console.log(this.props);
    return (
      <View>
        <FlatList
          contentContainerStyle={styles.container}
          data={data}
          renderItem={this.renterItem}
        />
      </View>
    );
  }
}

export default CategoryDetail;
