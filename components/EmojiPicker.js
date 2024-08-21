import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function EmojiPicker({ isVisible, childern, onClose }) {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
            
        </View>
    </Modal>
  )
}