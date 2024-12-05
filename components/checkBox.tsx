import { useState } from "react";
import { Pressable,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export function MyCheckbox() {
    const [checked, setChecked] = useState(false);
    return (
        <Pressable
            role="checkbox"
            aria-checked={checked}
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={() => setChecked(!checked)}>
            {checked && <Ionicons name="checkmark" size={16} color="white" />}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    checkboxBase: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#727A82',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: '#5F60B9',
    }
});