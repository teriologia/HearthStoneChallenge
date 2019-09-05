import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getAllCards} from '../../Store/getCards/action';

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCards();
  }

  render() {
    const {data, processing, error} = this.props;
    return processing ? (
      <Text>LOADİNG</Text>
    ) : (
      <View>
        <Text> Home </Text>
      </View>
    );
  }
}
const MapStateToProps = state => {
  const {error, processing, data} = state.cardData;
  return {error, processing, data};
};
export default connect(
  MapStateToProps,
  {getAllCards},
)(Home);
