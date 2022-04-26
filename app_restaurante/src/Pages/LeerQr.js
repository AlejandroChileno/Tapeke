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
            <SPage title={''} center row>


                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>
                    <SView col={"xs-11"} height={200} style={{ overflow: 'hidden', borderRadius: 16 }}>
                        <SView col={"xs-12"} height backgroundColor={STheme.color.lightGray + "99"} center border='red'
                            onPress={() => { SNavigation.navigate("camara") }}  >
                            <SIcon name={"Camera"} width={100} />
                            <SImage src={this.state.foto?.uri} style={{ resizeMode: "cover", position: 'absolute', top: 0 }} />
                        </SView>
                    </SView>
                </SView>



            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(LeerQr);