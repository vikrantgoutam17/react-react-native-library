import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const Input = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        value={text}
        underlineColorAndroid="transparent"
        placeholder="Enter the url"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

export default Input;
