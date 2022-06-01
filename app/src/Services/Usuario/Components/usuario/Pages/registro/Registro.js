import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SForm, SHr, SPage, SText, SNavigation, SLoad, SView, SIcon, SPopup, STheme } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import Parent from "../../"
import PButtom from '../../../../../../Components/PButtom';
class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            envio: 0,
            // telefono:"",
            // correo:"",
        };
        this.key = SNavigation.getParam("key");
        this.type = SNavigation.getParam("type");
    }
    getContent() {
        this.usr = {};
        if (this.key) {
            this.usr = Parent.Actions.getByKey(this.key, this.props);
            if (!this.usr) return <SLoad />
        }
        return <SForm
            ref={(form) => { this.form = form; }}
            col={"xs-11 sm-9 md-7 lg-5 xl-4"}
            inputProps={{
                col: "xs-12",
                separation: 16
            }}
            style={{
                alignItems: "center",
            }}
            inputs={{
                Nombres: { placeholder: "Nombres", isRequired: true, defaultValue: this.usr.Nombres },
                Apellidos: { placeholder: "Apellidos", isRequired: true, defaultValue: this.usr.Apellidos },
                Correo: { placeholder: "Correo", type: "email", isRequired: true, defaultValue: this.usr.Correo },
            }}
            onSubmit={(values) => {
            }}
        />
    }


    render() {
        return (
            <SPage title={'Registro de ' + Parent.component}>
                <SView col={"xs-12"} center>
                    <SView height={30}></SView>
                    <SView col={"xs-12"} center>
                        {this.getContent()}
                    </SView>
                    <SHr height={25} />
                    <PButtom
                        props={{
                            type: "outline"
                        }}
                        onPress={() => {
                            this.form.submit()
                        }}
                    >{"Registrar"}</PButtom>
                    <SView height={40}></SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Registro);