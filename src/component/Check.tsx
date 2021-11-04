import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

export function Check()
{
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
        color={'#448893'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  }
});