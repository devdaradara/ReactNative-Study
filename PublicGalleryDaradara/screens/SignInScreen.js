import React, {useState, useRef} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Keyboard, KeyboardAvoidingView} from 'react-native';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';
import SignButtons from '../components/SignButtons';
import SignForm from '../components/SignForm';

function SignInScreen({navigation, route}) {
  const {isSignUp} = route.params || {};
  const [form, setForm] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const createChangeTextHandler = (name) => (value) => {
    setForm({...form, [name]: value});
  }
  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(form);
  }

  return (
    <KeyboardAvoidingView
    style={styles.keyboardAvoidingView}
    behavior={Platform.select({ios:'padding'})}>
    <SafeAreaView style={styles.fullscreen}>
      <Text style={styles.text}>Public Gallery</Text>
      <View style={styles.form}>
        <SignForm
          isSignUp={isSignUp}
          onSubmit={onSubmit}
          form={form}
          createChangeTextHandler={createChangeTextHandler}
        />
        <SignButtons isSignUp={isSignUp} onSubmit={onSubmit} />
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default SignInScreen;
