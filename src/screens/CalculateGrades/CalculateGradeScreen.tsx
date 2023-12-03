import React, { useState } from 'react';
import { 
  Image,
  StatusBar,
  Text, 
  View 
} from 'react-native';
import {
  FontAwesome5,
} from '@expo/vector-icons';

import {
  Button, 
  IconButton, 
  TextInput 
} from 'react-native-paper';
import Animated, { FadeInUp } from 'react-native-reanimated';
import styles from './styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AntDesign } from '@expo/vector-icons';

const imageBackground = '../../assets/login/backTest4.jpeg';
const logoVitafood = '../../assets/grades/glossaryck.png';

type gradesValues = {
  ta: string,
  emc: string,
  efc: string,
};

const CalculateGradeScreen = () => {

  const initialValuesLogin : gradesValues = {
    ta: '',
    emc: '',
    efc: ''
  };

  const initialMessages = {
    result: '',
    optionalResult: '',
    fatalMessage: ''
  };

  const [typeStudentOdontology, setTypeStudentOdontology] = useState(true);
  const [messagesGrades, setMessagesGrades] = useState(initialMessages);

  const validationSchema: Yup.ObjectSchema<any> = Yup.object({
    ta: Yup.string()
      .matches(/^\d{1,2}$/, 'Puede tener hasta 2 dígitos')
      .test('is-less-than-or-equal-to-20', 'La nota debe ser menor o igual a 20', value => {
        if (value) {
          const numericValue = parseInt(value, 10);
          return numericValue <= 20;
        }
        return false;
      })
      .required('La TA es obligatoria'),
    emc: Yup.string()
      .matches(/^\d{1,2}$/, 'Puede tener hasta 2 dígitos')
      .test('is-less-than-or-equal-to-20', 'La nota debe ser menor o igual a 20', value => {
        if (value) {
          const numericValue = parseInt(value, 10);
          return numericValue <= 20;
        }
        return false;
      })
      .required('El EMC es obligatorio'),
    // efc: Yup.string()
    //   .matches(/^\d{1,2}$/, 'Puede tener hasta 2 dígitos')
    //   .test('is-less-than-or-equal-to-20', 'La nota debe ser menor o igual a 20', value => {
    //     if (value) {
    //       const numericValue = parseInt(value, 10);
    //       return numericValue <= 20;
    //     }
    //     return false;
    //   })
  });


  const handleSubmit = (values: gradesValues) => {

    setMessagesGrades(initialMessages);

    let messageResult = '';
    let fatalMessage = '';
    let optionalResult = '';

    if(typeStudentOdontology){
      
      let PTA = Number(values.ta);
      let EMC = Number(values.emc);
      let EFC = Number(values.efc);

      if(EFC === 0){

        let resultFinal = Number(Math.abs((11 - ((PTA * 0.40) + (EMC * 0.30))) / 0.30).toFixed(1));
        messageResult = `Te falta ${resultFinal} en tu EFC`;

        if(resultFinal > 15 && resultFinal <= 40){
          optionalResult = Math.abs(resultFinal / 2).toFixed(1);
        }else if(resultFinal > 40){
          fatalMessage = 'JALASTE !! :v';
        }

      }else{
        let resultFinalWithoutSus = Number(Math.abs((PTA * 0.40) + (EMC * 0.30) + (EFC * 0.30)).toFixed(1));
        if(resultFinalWithoutSus >= 11){
          messageResult = `No necesitas ir a SUS ya aprobaste el curso con ${resultFinalWithoutSus}`;
        }else{
          let MAX = Math.max(EMC, EFC);
          let resultFinal = Number(Math.abs((11 - ((PTA * 0.40) + (MAX * 0.30))) / 0.30).toFixed(1));
          messageResult = `Te falta ${resultFinal} en tu SUS`;
          if(resultFinal>20){
            fatalMessage = 'JALASTE !! :v';
          }
        }
      }

    }else{
      
      let PTA = Number(values.ta);
      let EMC = Number(values.emc);
      let EFC = Number(values.efc);

      if(EFC === 0){

        let resultFinal = Number(Math.abs(33 - (PTA + EMC)).toFixed(1));
        messageResult = `Te falta ${resultFinal} en tu EFC`;

        if(resultFinal > 15 && resultFinal <= 40){
          optionalResult = Math.abs(resultFinal / 2).toFixed(1);
        }else if(resultFinal > 40){
          fatalMessage = 'JALASTE !! :v';
        }

      }else{
        let resultFinalWithoutSus = Number(Math.abs((PTA + EMC + EFC)).toFixed(1));

        if(resultFinalWithoutSus >= 11){
          messageResult = `No necesitas ir a SUS ya aprobaste el curso con ${resultFinalWithoutSus}`;
        }else{
          let MAX = Math.max(EMC, EFC);
          let resultFinal = Number(Math.abs(33 - (PTA + MAX)).toFixed(1));
          messageResult = `Te falta ${resultFinal} en tu SUS`;
          if(resultFinal>20){
            fatalMessage = 'JALASTE !! :v';
          }
        }
      }

    }

    setMessagesGrades({
      result: messageResult,
      optionalResult,
      fatalMessage
    });
  };
  
  return (
    <View style={styles.wrapperLogin}>
      <StatusBar barStyle={'light-content'} />
      <Image 
        style={styles.imageBackground} 
        source={require(imageBackground)}
      />
      
      <View style={styles.wrapperForm}>

        <View>
          <Animated.Image 
            entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
            style={styles.imageLogo} 
            source={require(logoVitafood)}/>
        </View>
        
        <Text style={styles.titleLogin}>
          Deseas saber cuanto te falta para aprobar ?
        </Text>

        <View style={styles.wrapperTermsAndConditions}>
          <Text style={styles.infoRegister}>
            Soy alumno de Odontología
          </Text>
          <IconButton
            icon={()=>
              (typeStudentOdontology)
                ? <FontAwesome5 name="tooth" size={24} color="black" />
                : <FontAwesome5 name="tooth" size={24} color="white" />
            }
            size={18}
            onPress={() => {
              setMessagesGrades(initialMessages);
              setTypeStudentOdontology(!typeStudentOdontology);
            }}
            style={{
              padding: 0
            }}
          />
        </View>

        <Formik
          initialValues={initialValuesLogin}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.container}>
                  <TextInput
                    label=" TA"
                    value={values.ta}
                    onChangeText={(text) => {
                      setMessagesGrades(initialMessages);
                      const numericValue = text.replace(/[^0-9]/g, '');
                      handleChange('ta')(numericValue);
                    }}
                    style={[
                      styles.input,
                      (touched.ta && errors.ta)
                        ? { borderWidth: 2, borderColor: 'red', borderRadius: 5 } 
                        : {},
                    ]}
                    keyboardType="numeric"
                    maxLength={2}
                  />

                  <TextInput
                    label="EMC"
                    value={values.emc}
                    onChangeText={(text) => {
                      setMessagesGrades(initialMessages);
                      const numericValue = text.replace(/[^0-9]/g, '');
                      handleChange('emc')(numericValue);
                    }}
                    style={[
                      styles.input,
                      (touched.emc && errors.emc)
                        ? { borderWidth: 2, borderColor: 'red', borderRadius: 5 } 
                        : {},
                    ]}
                    keyboardType="numeric"
                    maxLength={2}
                  />

                  <TextInput
                    label="EFC"
                    value={values.efc}
                    onChangeText={(text) => {
                      setMessagesGrades(initialMessages);
                      const numericValue = text.replace(/[^0-9]/g, '');
                      handleChange('efc')(numericValue);
                    }}
                    style={[
                      styles.input,
                      (touched.efc && errors.efc)
                        ? { borderWidth: 2, borderColor: 'red', borderRadius: 5 } 
                        : {},
                    ]}
                    keyboardType="numeric"
                    maxLength={2}
                  />
              </View>

              <Button
                icon={() => (
                  <AntDesign name="eye" size={24} color="black" />
                )}
                mode="contained"
                onPress={() => handleSubmit()}
                style={styles.wrapperBtnSubmit}
              >
                <Text style={styles.textBtnSubmit}>
                  REVELAR
                </Text>
              </Button>

              {
                (messagesGrades.result)
                  &&
                    <View style={styles.wrapperResultGrades}>
                      {
                        (typeStudentOdontology)
                          &&
                            <Text style={styles.typeStudent}>
                              Odontólog@
                            </Text>
                      }
                      <Text style={styles.messageResult}>
                        {messagesGrades.result}
                      </Text>
                      {
                        (messagesGrades.optionalResult)
                          &&
                            <Text style={styles.optionalResult}>
                              Intenta con {messagesGrades.optionalResult} en el EFC y SUS
                            </Text>
                      }
                      {
                        (messagesGrades.fatalMessage)
                          &&
                            <Text style={styles.fatalMessage}>
                              {messagesGrades.fatalMessage}
                            </Text>
                      }
                    </View>
              }

            </>
          )}
        </Formik>

      </View>

    </View>
  )
}

export default CalculateGradeScreen;
