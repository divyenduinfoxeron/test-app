import {StyleSheet} from 'react-native';

const externalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
  },
  postRow: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  friendProfilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  bioText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#9C7E5A',
  },

  proPic: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 18,
  },
  buttonBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    padding: 8,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#9F8462',
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default externalStyle;
