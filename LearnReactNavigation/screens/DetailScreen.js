import React, { useEffect } from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import { useRoute } from '@react-navigation/native';

function IDText() {
  const route = useRoute();
  return <Text style={styles.text}>id: {route.params.id}</Text>;
}

function DetailScreen({route, navigation}) {
  useEffect(() => {
    navigation.setOptions({
      title: `상세정보 - ${route.params.id}`,
    });
  }, [navigation, route.params.id]);

  return (
    <View style={styles.block}>
      <Text style={styles.text}>{route.params.id}</Text>
      <View style={styles.buttons}>
        <Button
          title="다음"
          onPress={() => navigation.navigate('Detail', {id: route.params.id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default DetailScreen