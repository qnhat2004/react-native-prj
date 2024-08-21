import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function Button({ label, onPress }) {
  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'yellow',
    borderWidth: 4
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#000',
    fontSize: 16,
  }, 
});