import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from '@rneui/base';
import { saveGrade } from '../services/GradeServices';
import { updateGrade } from '../services/GradeServices';

export const GradeForm = ({navigation,route}) => {
    let isNew=true;
    let subjectR;
    let gradeR;
    if(route.params.notita != null) {
        isNew=false; 
    }
    if(!isNew) {
        subjectR=route.params.notita.subject;
        gradeR=route.params.notita.grade;
    }
  const [grade, setGrade] = useState(gradeR==null?null:gradeR+'');
  const [subject, setSubject] = useState(subjectR);
  const [errorSubject, setErrorSubject] = useState();
  const [errorGrade, setErrorGrade] = useState();
  const hasError=false;


  const save = () => {
    setErrorGrade(null);
    setErrorSubject(null);
    validate();
    if(!hasError) {
        if(isNew) {
            saveGrade({ subject: subject, grade: grade });
        }else
        {
            updateGrade({ subject: subject, grade: grade });
        }
        navigation.goBack();
        route.params.fnRefresh();
    }
  };

  const validate = () => {
    if(subject == null || subject == '') {
      setErrorSubject('Debe ingresar una materia')
      hasError=true;
    }
    let gradeFloat = parseFloat(grade);
    if(grade == null || isNaN(gradeFloat) || gradeFloat < 0 || gradeFloat > 10) {
      setErrorGrade('Debe ingresar una nota entre 0 y 10');
      hasError=true;    
    }
};

return (
    <View style={styles.container}>
      <Input
        value={subject}
        onChangeText={setSubject}
        placeholder="ejemplo: Matematicas"
        label="Materia"
        errorMessage={errorSubject}
        editable={isNew}
        inputStyle={!isNew && styles.disabledInput}
      />
      <Input
        value={grade}
        onChangeText={setGrade}
        placeholder="0-10"
        label="Nota"
        errorMessage={errorGrade}
        keyboardType="numeric"
      />
      <Button
        title="Guardar"
        icon={{
          name: 'save',
          type: 'entypo',
          color: 'white',
        }}
        buttonStyle={styles.saveButton}
        onPress={save}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  saveButton: {
    backgroundColor: 'green',
    marginTop: 20,
  },
  disabledInput: {
    color: 'gray',
    
  },
});