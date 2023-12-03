import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapperLogin: {
    backgroundColor: 'white',
    flex: 1
  },
  imageBackground: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  wrapperDetail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute'
  },

  imageDetailLeft: {
    height: 225,
    width: 90
  },
  imageDetailRight: {
    height: 160,
    width: 65
  },
  imageLogo: {
    height: 180,
    width: 210
  },
  wrapperCreateUser: {
    color: '#3B0458',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingLeft: 5,
    fontSize: 15
  },
  textBtnSubmit: {
    fontSize: 15,
    color: 'black'
  },
  wrapperBtnSubmit: {
    backgroundColor: '#FAAD29',
    marginTop: 6,
    borderRadius: 6,
    width: '45%',
    fontSize: 50,
  },
  wrapperForm: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  messageError: { 
    color: 'red', 
    marginBottom: 10 
  },
  titleLogin: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 15,
    fontWeight: '500',
  },
  wrapperSignUp: {
    flexDirection: 'row',
    marginTop: 12
  },
  recoverPassword: {
    marginBottom: 10,
    marginTop: 4,
    color: '#3B0458',
    fontWeight: 'bold',
    fontSize: 15
  },
  infoRegister: {
    fontSize: 15
  },
  titleRegister: {
    fontSize: 17,
    marginBottom: 25,
    marginTop: 25,
    fontWeight: 'bold'
  },
  termsConditions: {
    marginBottom: 15,
    textAlign: 'center'
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 30,
    borderRadius: 10
  },
  wrapperTermsAndConditions: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '80%',
  },
  column: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 8,
    padding: 16,
    borderRadius: 8,
  },
  wrapperResultGrades: {
    padding: 20, 
    backgroundColor: 'black',
    marginTop: 10, 
    borderRadius: 10
  },
  messageResult: {
    fontSize: 13, 
    textAlign: 'center', 
    color: 'white'
  },
  optionalResult: {
    fontSize: 13, 
    textAlign: 'center', 
    color: 'white', 
    marginTop: 8
  },
  fatalMessage: {
    fontSize: 13, 
    textAlign: 'center', 
    color: 'red', 
    marginTop: 8, 
    fontWeight: 'bold'
  },
  typeStudent: {
    fontSize: 14, 
    textAlign: 'center', 
    color: 'white', 
    marginTop: 3,
    marginBottom: 6
  },
});

export default styles;
