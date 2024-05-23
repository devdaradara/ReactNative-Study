import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

function OpenDetailButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Detail 1 열기"
      onPress={() => navigation.navigate('Detail', {id: 1})}
    />
  );
}

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
}

function SearchScreen() {
  return <Text>Search Screen</Text>;
}

function NotificationScreen() {
  return <Text>Notification Screen</Text>;
}

function MessageScreen() {
  return <Text>Message Screen</Text>;
}

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarColor: 'blue',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
          tabBarColor: 'green',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications" color={color} size={size} />
          ),
          tabBarColor: 'red',
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: '메시지',
          tabBarIcon: ({color, size}) => (
            <Icon name="message" color={color} size={size} />
          ),
          tabBarColor: 'purple',
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
