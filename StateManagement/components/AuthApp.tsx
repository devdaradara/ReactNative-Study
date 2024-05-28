import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import AuthButtons from './AuthButtons'
import AuthState from './AuthState'
function AuthApp() {

  return (
    <SafeAreaView style={styles.block}>
      <AuthState />
      <AuthButtons />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});


export default AuthApp