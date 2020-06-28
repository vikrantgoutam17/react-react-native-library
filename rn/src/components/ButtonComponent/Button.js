import React from "react";
import Log from "core-library";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ToastAndroid,
} from "react-native";

const Button = (props) => {
  const { title, onPress, style } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        Log();
      }}
    >
      <SafeAreaView>
        <View style={[styles.background, style]}>
          <Text style={[styles.text, style]}>{title}</Text>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#4caf50",
    alignItems: "center",
    padding: 10,
    margin: 10,
    width: 200,
    height: 60,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Button;
