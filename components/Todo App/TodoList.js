import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');
    const [editingTodoIndex, setEditingTodoIndex] = useState(-1);

    const addTodo = () => {
        if (todoText.trim() !== '') {
            if (editingTodoIndex !== -1) {
                setTodos(todos.map((todo, index) => (index === editingTodoIndex ? { ...todo, text: todoText } : todo)));
                setEditingTodoIndex(-1);
            } else {
                setTodos([...todos, { text: todoText, completed: false }]);
            }
            setTodoText('');
        }
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const toggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, completed: !todo.completed }; // Toggle completion state
            }
            return todo;
        });
        setTodos(updatedTodos);
    };


    const completeIcon = (completed, index) => (
        completed ? (
            <TouchableOpacity onPress={() => toggleComplete(completed ? index : null)}>
                <Text style={styles.completeIcon}>✅</Text>
            </TouchableOpacity>
        ) : (
            <View style={{ width: 20 }} />
        )
    );

    const editTodo = (index) => {
        setEditingTodoIndex(index);
        setTodoText(todos[index].text);
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.todoItem}>
            {completeIcon(item.completed, index)}
            <Text style={item.completed ? styles.completedText : styles.todoText}>{item.text}</Text>
            <Button title="Edit" onPress={() => editTodo(index)} style={styles.editButton} />
            <Button title="Delete" onPress={() => deleteTodo(index)} style={styles.deleteButton} />
            <TouchableOpacity onPress={() => toggleComplete(index)}>
                <Text style={styles.completeButton}>✅</Text>
            </TouchableOpacity>
        </View>
    );


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={todoText}
                onChangeText={(text) => setTodoText(text)}
                placeholder="Enter todo"
            />
            <Button title={editingTodoIndex !== -1 ? "Update" : "Add Todo"} onPress={addTodo} />
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    todoText: {
        flex: 1,
    },
    completedText: {
        flex: 1,
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    completeIcon: {
        marginRight: 10,
    },
    editButton: {

    },
    deleteButton: {

    },
});

export default TodoList;
