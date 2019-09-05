import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getAllCards} from '../../Store/getCards/action';

export class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    filterData: [],
    test: 0,
  };

  componentDidMount() {
    this.props.getAllCards();
  }

  componentWillReceiveProps(nextProps) {
    this.filter(nextProps.data);
  }

  filter = data => {
    const rawData = this.state.filterData;
    if (data) {
      Object.values(data).forEach(el => {
        el.map(e => (e.mechanics ? rawData.push(e) : null));
        this.setState({filterData: rawData});
      });
    }
  };

  render() {
    const {processing, error} = this.props;
    console.log(this.state.filterData);
    console.log(this.state.test);
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
