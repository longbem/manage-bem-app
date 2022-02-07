import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
  },
  boxInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#CDCDCD',
    padding: 8,
    borderRadius: 7,
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    // marginBottom: '5%',
  },
  check: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnTinhNgay: value => ({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: value ? '#A5DA67' : '#CDCDCD',
    marginHorizontal: 20,
    borderRadius: 7,
    padding: 10,
  }),
  dateDuKien: {
    margin: 20,
    fontWeight: '500',
  },
  note: {
    color: 'red',
    fontWeight: 'bold',
  },
  select: {
    marginLeft: 10,
  },
});
