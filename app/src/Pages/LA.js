import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SHr, SInput, SPage, SText } from 'servisofts-component';
const li = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
]
class LA extends Component {
    _ref;
    constructor(props) {
        super(props);
        this.state = {
        };
        this._ref = {};
    }

    getInputs() {
        return li.map((key) => {
            return <SInput ref={ref => { this._ref[key] = ref }} label={key} col={"xs-12 md-6"} />
        })
    }
    render() {
        return (
            <SPage title={'LA'} center>
                {/* <SInput ref={inp => { this.inp_test = inp }} label={"Test"} col={"xs-11 md-8"} /> */}
                {this.getInputs()}
                <SHr />
                <SButtom type='danger' onPress={() => {
                    var vals = {};
                    li.map((key) => {
                        vals[key] = this._ref[key].getValue();
                    })
                    alert(JSON.stringify(vals));
                }}>PROBAR</SButtom>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(LA);