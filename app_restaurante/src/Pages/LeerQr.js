import React from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, SView, STheme, SImage } from 'servisofts-component';
 

class LeerQr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: null,
        };
    }









    render() {
        return (
            <SPage title={'Lector QR'} center>
                <SHr height={32} />
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}center>
                    <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>{"Presirnar para leer QR"}</SText>
                    <SView col={"xs-12"} height={2} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary, }}></SView>
                </SView>
                <SHr height={32} />

                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>
                    <SView col={"xs-11"} height={200} style={{ overflow: 'hidden', borderRadius: 16 }}>
                        <SView col={"xs-12"} height backgroundColor={STheme.color.lightGray + "99"} center border='red'

                            onPress={() => {
                                SNavigation.navigate("camara", {
                                    onChange: (foto) => {
                                        this.setState({ foto: foto })
                                    }
                                })
                            }}
                        >
                            <SIcon name={"Camera"} width={100} />
                            <SImage src={this.state.foto?.uri} style={{ resizeMode: "cover", position: 'absolute', top: 0 }} />
                        </SView>
                    </SView>
                </SView>

                <SHr height={32} />



            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(LeerQr);