import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  flipCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  card: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 15,
    width: '100%',
    height: 550,
    marginBottom: 15,
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 1,
  },
  info: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 21,
    borderBottomWidth: 1,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 15,
    borderBottomWidth: 1,
    color: '#333',
  },
});
