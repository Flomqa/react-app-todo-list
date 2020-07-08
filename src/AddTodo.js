import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')


    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Ты забыла ввести Тудушку!','Бывает и такое, но это не багь а фича :p')
    }}

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Пиши сюда Тудушку'
                autoCorrect={false}
                autoCapitalize='words'
                placeholderTextColor='#696969'
            />
            <Button title='Добавить' onPress={pressHandler} color="#FF8C00" />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        fontSize: 20,

    }
})
