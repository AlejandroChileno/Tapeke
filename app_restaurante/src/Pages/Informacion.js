import React from 'react';
import { connect } from 'react-redux';
import { SHr, SNavigation, SPage, SText, STheme } from 'servisofts-component';

class Informacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.orale = SNavigation.getParam("orale");
    }

    render() {
        return (
            <SPage title={'Registro de '} center>
                <SHr height={32} />
                <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}> {"dato " + this.orale}</SText>
                <SHr height={32} />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Informacion);