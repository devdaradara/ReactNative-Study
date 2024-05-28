import React from 'react';
import {View, Button} from 'react-native';
import useAuthActions from '../hooks/useAuthActions';

function AuthButtons() {
  const {authorize, logout} = useAuthActions();

  const onPressLogin = () => {
    authorize({
      id: 1,
      username: 'dara',
      displayName: 'Dara',
    });
  };

  return (
    <View>
      <Button title="로그인" onPress={onPressLogin} />
      <Button title="로그아웃" onPress={logout} />
    </View>
  );
}

export default AuthButtons;
