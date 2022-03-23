import React, { Component, TouchableOpacity, useState, Button } from 'react';
import { SDate, SIcon, SImage, SLoad, SNavigation, SText, STheme, SView, SInput, SButtom } from 'servisofts-component';
// import SSocket from 'servisofts-socket';

import horario from '../../horario';
import PButtom from '../../../../../Components/PButtom';

import { connect } from 'react-redux';


const Horario = () => {
    const [inputs, setInputs] = useState([{ key: '', value: '' }]);
    const [inputs2, setInputs2] = useState([{ key: '', value: '' }]);


    const [input_0, setInput_0] = useState([{ fechaInicio: '', fechaFin: '' }]);
    const [input_1, setInput_1] = useState([{ fechaInicio: '', fechaFin: '' }]);
    const [input_2, setInput_2] = useState([{ fechaInicio: '', fechaFin: '' }]);
    const [input_3, setInput_3] = useState([{ fechaInicio: '', fechaFin: '' }]);
    const [input_4, setInput_4] = useState([{ fechaInicio: '', fechaFin: '' }]);
    const [input_5, setInput_5] = useState([{ fechaInicio: '', fechaFin: '' }]);
    const [input_6, setInput_6] = useState([{ fechaInicio: '', fechaFin: '' }]);
    const [input_00, setInput_00] = useState([{ fechaInicio: '', fechaFin: '' }]);




    const addHandler = (key2) => {

        switch (key2) {
            case "0":
                const _input_0 = [...input_0];
                _input_0.push({ fechaInicio: '', fechaFin: '' });
                setInput_0(_input_0);
                console.log(JSON.stringify(_input_0));
                break;
            case "1":
                const _input_1 = [...input_1];
                _input_1.push({ fechaInicio: '', fechaFin: '' });
                setInput_1(_input_1);
                console.log(JSON.stringify(_input_1));

                break;
            case "2":
                const _input_2 = [...input_2];
                _input_2.push({ fechaInicio: '', fechaFin: '' });
                setInput_2(_input_2);
                console.log(JSON.stringify(_input_2));
                break;
            case "3":
                const _input_3 = [...input_3];
                _input_3.push({ fechaInicio: '', fechaFin: '' });
                setInput_3(_input_3);
                console.log(JSON.stringify(_input_3));
                break;
            case "4":
                const _input_4 = [...input_4];
                _input_4.push({ fechaInicio: '', fechaFin: '' });
                setInput_4(_input_4);
                console.log(JSON.stringify(_input_4));
                break;
            case "5":
                const _input_5 = [...input_5];
                _input_5.push({ fechaInicio: '', fechaFin: '' });
                setInput_5(_input_5);
                console.log(JSON.stringify(_input_5));
                break;
            case "6":
                const _input_6 = [...input_6];
                _input_6.push({ fechaInicio: '', fechaFin: '' });
                setInput_6(_input_6);
                console.log(JSON.stringify(_input_6));
                break;
            case "-1":
                const _input_00 = [...input_00];
                _input_00.push({ fechaInicio: '', fechaFin: '' });
                setInput_00(_input_00);
                console.log(JSON.stringify(_input_00));
                break;

            default:
                console.log("no hay")

        }

    }

    const deleteHandler = (key2, key) => {
        // const _inputs = inputs.filter((input, index) => index != key);
        // setInputs(_inputs);
        var inputDelete
        var setting;
        if (key2 == -1) {
            inputDelete = eval("input_00")
            setting = eval("setInput_00")
        } else {
            inputDelete = eval("input_" + key2)
            setting = eval("setInput_" + key2)
        }
        // const _inputs = [...inputDelete];
        console.log(JSON.stringify(inputDelete) + " " + key2 + " " + key);
        const _inputs = inputDelete.filter((input, index) => index != key);
        //const _inputs = inputDelete.splice(key, 1);
        setting(_inputs);

    }

    // const inputHandler = (text, key) => {
    //     const _inputs = [...inputs];
    //     _inputs[key].value = text;
    //     _inputs[key].key = key;
    //     setInputs(_inputs);
    // }

    const inputHandler = (text, key2, key) => {

        var inputValue
        var setting;
        if (key2 == -1) {
            inputValue = eval("input_00")
            setting = eval("setInput_00")
        } else {
            inputValue = eval("input_" + key2)
            setting = eval("setInput_" + key2)
        }

        const _inputs = [...inputValue];
        _inputs[key].fechaInicio = text;
        // _inputs[key].key = key;
        setting(_inputs);
    }

    const inputHandler2 = (text, key2, key) => {

        var inputValue
        var setting;
        if (key2 == -1) {
            inputValue = eval("input_00")
            setting = eval("setInput_00")
        } else {
            inputValue = eval("input_" + key2)
            setting = eval("setInput_" + key2)
        }

        const _inputs = [...inputValue];
        _inputs[key].fechaFin = text;
        // _inputs[key].key = key;
        setting(_inputs);
    }

    var dias = new SDate.getDaysOfWeek();
    dias[-1] = { text: "Feriado", value: "Fer" };
    return Object.keys(dias).map((key2, index) => {
        var inputArray
        if (key2 == -1) {
            inputArray = eval("input_00")
        } else {
            inputArray = eval("input_" + key2)
        }

        console.log(inputArray)
        return <>
            <SView center  >
                <SView col={"xs-12"} >
                    <SText fontSize={15}>{dias[key2].text}</SText>
                </SView>
                {/* {inputsDia.map((input, key) => ( */}
                {inputArray.map((input, key) => (

                    <SView row col={"xs-12"} center>
                        <SView col={"xs-4"}>
                            <SInput placeholder={"Hora Inicio" + key} value={inputArray.value} onChangeText={(text) => inputHandler(text, key2, key)} />
                        </SView>
                        <SView col={"xs-4"}>
                            <SInput placeholder={"Hora Fin" + key} value={inputArray.value} onChangeText={(text) => inputHandler2(text, key2, key)} />
                        </SView>
                        <SView col={"xs-4"} row>
                            <SButtom type='danger' style={{ width: 50 }} onPress={() => deleteHandler(key2, key)}>
                                <SText style={{ color: "white", fontSize: 20 }}>x</SText>
                            </SButtom>
                            <SView col={"xs-1"}></SView>
                            <SButtom type='success' style={{ width: 50 }} onPress={() => addHandler(key2)} >
                                <SText style={{ color: "white", fontSize: 20 }}>+</SText>
                            </SButtom>
                        </SView>
                    </SView>
                ))}
            </SView>
        </>

    })
}


const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Horario);
// export default (initStates)(Horario);