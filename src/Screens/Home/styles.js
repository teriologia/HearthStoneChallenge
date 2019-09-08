import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  button: {
    width: '30%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  mechanics: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },
});
