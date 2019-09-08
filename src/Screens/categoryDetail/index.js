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
        style={styles.flipCard}
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
        <Text style={styles.info}>Card Info</Text>
          <Text style={styles.infoText}>{`Cost: ${item.cost}`}</Text>
          <Text style={styles.infoText}>{`Card Set: ${item.cardSet}`}</Text>
          <Text style={styles.infoText}>{`Player Class: ${item.playerClass}`}</Text>
          <Text style={styles.infoText}>{`Card Rarity: ${item.rarity}`}</Text>
          <Text style={styles.infoText}>{`Card Type : ${item.type}`}</Text>
          <Text style={styles.infoText}>{`Race : ${item.race}`}</Text>
          <Text style={styles.infoText}>{`health : ${item.health}`}</Text>
          <Text style={styles.infoText}>{`attack : ${item.attack}`}</Text>
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
