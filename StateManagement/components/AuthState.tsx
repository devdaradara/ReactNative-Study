import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import useAuthActions from '../hooks/useAuthActions'
import useUser from '../hooks/useUser'

function AuthState() {
  const user = useUser();

  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName : '로그인하세요'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  status: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default AuthState