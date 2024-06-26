import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const messages = {
  NOT_FOUND: '검색 결과가 없습니다.',
  EMPTY_KEYWORD: '검색어를 입력해주세요.',
};

function EmptySearchResult({type}) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{messages[type]}</Text>
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
    fontSize: 16,
    color: '#9e9e9e',
  },
});

export default EmptySearchResult