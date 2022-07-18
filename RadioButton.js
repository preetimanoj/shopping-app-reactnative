import React from 'react';
import { View, Text } from 'react-native';

export default function RadioButton({ data, onSelect }) {
    return (
        <View>
          {data.map((item) => {
            return (
              <Pressable onPress={() => alert("Your choice: " + item.value)}> {/* onPress handler runs when item is clicked.*/}
                <Text> {item.value}</Text>
              </Pressable>
            );
          })}
        </View>
      );
}