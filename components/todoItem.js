import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TodoItem({ pressHandler, item }) {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <AntDesign name="delete" size={24} color="red" />
            </TouchableOpacity>
            <Text style={styles.itemText}>{item.key} - {item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
        fontSize: 20,
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemText: {
        paddingLeft: 10,
    }

});