import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 35,
    marginHorizontal: 25
  },
  containerSocialButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textLogin: {
    fontFamily: 'Averta',
    color: '#000',
    fontWeight: '600',
    fontSize: 30
  },
  textSocialButton: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Averta',
    color: '#431485',
    fontSize: 20,
    fontWeight: '600'
  },
  buttonSocialMedia: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9fa',
    flex: 0.47,
    height: 70,
    borderRadius: 25
  },
  containerOr: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 40
  },
  textOr: {
    fontFamily: 'Averta',
    fontSize: 18,
    color: '#dbdcdc'
  },
  textboxfieldd: {
    height: 45,
    backgroundColor: '#ffffff',
    marginBottom:0,
    fontFamily:'Averta',
    fontSize: 20
  },
  containerInputs: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 225
  },
  containerTextInput: {
    borderBottomWidth: 1,
    borderColor: '#dbdcdc'
  },
  textInputPlaceholder: {
    zIndex: -1,
    color: "blue",
    position: "absolute",
    backgroundColor: "transparent"
  },
  containerCreateAccount:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textCreateAccount: {
    fontFamily: 'Averta',
    color: '#431485',
    fontSize: 17
  },
  containerNextAccount: {
    flex: 0.25,
    flexDirection: 'row',
    backgroundColor: '#431485',
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 29
  },
  containerTextCreateAccount: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles