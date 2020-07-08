
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, ImageBackground} from 'react-native';
import {Navbar} from './src/Navbar'
import {AddTodo} from './src/AddTodo'
import {Todo} from './src/Todo'
import BackgroundImage from './b1.jpg'


export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = title => {
      setTodos(prev => [...prev, {
          id: Date.now().toString(),
          title
      }])
  }

  const removeTodo = id => {
      setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
      <ImageBackground source={BackgroundImage} style={styles.image}>
         <View>
             <Navbar title="Todo List for Darina" />

                 <View style={styles.container}>
                    <AddTodo onSubmit={addTodo} />

                     <FlatList
                         keyExtractor={item => item.id.toString()}
                        data={todos}
                         renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} />}
                     />

                 </View>

          </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "space-between",

    }
})
