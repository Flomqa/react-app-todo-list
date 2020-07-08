import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export const Todo = ({ todo, onRemove }) => {
    return (
        <TouchableOpacity
            activeOpacity ={0.5}
            onPress={() => console.log(todo.id)}
            onLongPress={onRemove.bind(null, todo.id)}
        >
            <View style={styles.todo}>
                <Text style={styles.text}>{todo.title}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
        opacity: .7,
        backgroundColor: '#FF8C00',
    },
    text: {
        includeFontPadding: true,
        fontSize: 20,
        textAlignVertical: 'center',
        textTransform: 'capitalize',
        textDecorationStyle: 'double'
    }
})
