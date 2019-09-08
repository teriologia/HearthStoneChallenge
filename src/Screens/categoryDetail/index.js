import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renterItem = data => {
    return <Text>{data.item.name}</Text>;
  };

  render() {
    const {data} = this.props;
    console.log(data);
    return (
      <View>
        <FlatList data={data} renderItem={this.renterItem} />
      </View>
    );
  }
}

export default CategoryDetail;
