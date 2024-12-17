import React from 'react';
import { View, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { ListItem, Avatar, FAB } from '@rneui/base';
import { getGrades } from '../services/GradeServices';
import {useState} from 'react';

export const ListForm = ({ navigation }) => {
    const [time, setTime] = useState();
    const refreshList = () => {
        setTime(new Date().getTime());
    };
  const ItemGrade = ({ nota }) => {
    return (
      <TouchableHighlight 
        onPress={() => navigation.navigate('GradeForm', { notita: nota,fnRefresh:refreshList })} 
      >
        <ListItem bottomDivider>
          <Avatar 
            title={nota.subject[0]}
            containerStyle={{ backgroundColor: '#6733b9' }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>{nota.subject}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Subtitle>{nota.grade}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={getGrades()} 
        renderItem={({ item }) => (
          <ItemGrade nota={item} />
        )}
        keyExtractor={(item) => {return item.subject}}
        extraData={time}
      />
      <FAB
        icon={{
          name: 'add',
          type: 'material',
          color: 'white',
        }}
        placement='right'
        onPress={() => navigation.navigate('GradeForm',{notita:null,fnRefresh:refreshList})}    
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});