import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {getAllCards} from '../../Store/getCards/action';
import styles from './styles';

export class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    filterData: [],
    mechanics: [],
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
      this.setState({
        mechanics: Object.keys(data).filter(el => el !== 'Promo'),
      });
      Object.values(data).forEach(el => {
        el.map(e => (e.mechanics ? rawData.push(e) : null));
        this.setState({filterData: rawData});
      });
    }
  };

  render() {
    const {mechanics} = this.state;
    const {processing} = this.props;
    return processing ? (
      <Text>LOADİNG</Text>
    ) : (
      <ScrollView contentContainerStyle={styles.container}>
        {mechanics.map(el => (
          <TouchableOpacity key={el} style={styles.button}>
            <Text style={styles.mechanics}>{el}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
