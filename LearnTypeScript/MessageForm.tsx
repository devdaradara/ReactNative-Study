import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

function MessageForm() {
  const [text, setText] = useState('');
  const [lastMessage, setLastMessage] = useState<{
    id: number;
    message: string;
    date: Date;
  } | null>(null);
  const nextId = useRef<number>(1);
  const inputRef = useRef<TextInput | null>(null);

  const onPress = () => {
    setLastMessage({
      message: text,
      date: new Date(),
      id: nextId.current,
    });
    setText('');
    nextId.current += 1;
  }

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <View>
      <TextInput value={text} onChangeText={setText} ref={inputRef} />
      <Button title="PRESS ME" onPress={onPress} />
      { lastMessage && (
        <View>
          <Text>
            마지막 메시지: {lastMessage.message} (
              {lastMessage.date.toLocaleTimeString()})
          </Text>
        </View>
      )}
    </View>
  )
}

export default MessageForm