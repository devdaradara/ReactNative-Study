import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full:{
    flex: 1,
  },
});

// const App = () => {
//   // const name = 'JSX';
//   const [visible, setVisible] = useState(true);
//   const onPress = () => setVisible(!visible);

//   return (
//     <SafeAreaView>
//       {/* <Greeting/> */}
//       {/* <Greeting name="Dara" /> */}
//       {/* <Greeting name={name} /> */}
//       <Button title="토글" onPress={onPress} />
//       {visible && <Box rounded={true} size="large" color="blue"/>}
//     </SafeAreaView>
//   );
// };

export default App;
