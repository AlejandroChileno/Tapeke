import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SForm, SHr, SPage, SText, SNavigation, SLoad,SView ,SIcon} from 'servisofts-component';
import Parent from '../index'
import Kolping from '../../../../../Components/Kolping';
class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.orale = SNavigation.getParam("orale");
    }
    getContent() {
        this.data = {};
        if (this.key) {
            this.data = Parent.Actions.getByKey(this.key, this.props);
            if (!this.data) return <SLoad />
        }
        return <SForm
            ref={(form) => { this.form = form; }}
            col={"xs-11 sm-9 md-7 lg-5 xl-4"}
            inputProps={{
                customStyle: "kolping"
            }}
            inputs={{
                descripcion: { label: "descripcion", isRequired: true, defaultValue: this.data["descripcion"], icon: <SIcon name={"InputUser"} width={40} height={30} /> },
            }}
            onSubmit={(values) => {
                if (this.key) {
                    Parent.Actions.editar({
                        ...this.usr,
                        ...values
                    }, this.props);
                } else {
                    Parent.Actions.registro(values, this.props);
                }
            }}
        />
    }
    render() {
        return (
            <SPage title={'Registro de '+Parent.component} center>
                <SView height={30}></SView>
                {this.getContent()}
                <SHr />
                <Kolping.KButtom 
                style={{color: '#fff'}}
                    props={{
                        type: "outline"
                    }}
                    onPress={() => { this.form.submit() }}
                >{(this.key ? "Editar" : "Registrar")}</Kolping.KButtom>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Registro);