import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
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
        fontWeight: "bold",
        borderBottomWidth: 1,
    }
});
