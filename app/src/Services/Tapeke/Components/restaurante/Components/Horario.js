import React, { Component, TouchableOpacity,useState, Button } from 'react';
import { SDate, SIcon, SImage, SLoad, SNavigation, SText, STheme, SView, SInput } from 'servisofts-component';
import SSocket from 'servisofts-socket';
// import restaurante from '..';
import horario from '../../horario';
import PButtom from '../../../../../Components/PButtom';

import { connect } from 'react-redux';


const Horario = () => {
    const [inputs, setInputs] = useState([{ key: '', value: '' }]);

    const addHandler = () => {
        const _inputs = [...inputs];
        _inputs.push({ key: '', value: '' });
        setInputs(_inputs);
    }

    const deleteHandler = (key) => {
        const _inputs = inputs.filter((input, index) => index != key);
        setInputs(_inputs);
    }

    const inputHandler = (text, key) => {
        const _inputs = [...inputs];
        _inputs[key].value = text;
        _inputs[key].key = key;
        setInputs(_inputs);

    }

    return (
    <>
        <SView >
            {inputs.map((input, key) => (
                <SView row >
                    <SInput placeholder={"Enter Name"} value={input.value} onChangeText={(text) => inputHandler(text, key)} />
                    <PButtom onPress={() => deleteHandler(key)}>
                        <SText style={{ color: "red", fontSize: 13 }}>Delete</SText>
                    </PButtom>
                </SView>
            ))}
            <PButtom  onPress={addHandler} >ADICIONAR</PButtom>
        </SView>
    </>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: 'white'
//     },
//     inputsContainer: {
//         flex: 1, marginBottom: 20
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         borderBottomWidth: 1,
//         borderBottomColor: "lightgray"
//     }
// })

//   export default HomeScreen

const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Horario);