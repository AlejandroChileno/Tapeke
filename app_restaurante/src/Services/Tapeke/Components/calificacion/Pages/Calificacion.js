import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, SPopup, SScrollView2, SText, STheme, SView, SHr } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import Direccion from '../../../../../Components/BarraSuperiorTapeke/Direccion';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import Parent from '../index'
import calificacion from '..';

class Calificacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.UsuarioLogeado = this.props.state.usuarioReducer.usuarioLog.key;
        this.key = SNavigation.getParam("key_restaurante");
    }

    getEstrellas(data) {
        if (!data) return null;
        return (<SView col={"xs-11"} height={180} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card} >
            <SHr height={10} />
            <SView col={"xs-5"} center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}>
                <SIcon name={"CalEstrella"} width={60} fill={STheme.color.primary} />
            </SView>
            <SView col={"xs-7"} center >
                <SText color={STheme.color.darkGray} fontSize={24}>ESTRELLAS</SText>
                <SHr height={10} />
                <SView col={"xs-10"} center style={{ borderWidth: 2, borderColor: STheme.color.primary, backgroundColor: STheme.color.white, borderRadius: 8 }}>
                    <SText color={STheme.color.text} fontSize={32}>{data.star_media}</SText>
                </SView>
            </SView>
            <SHr height={10} />
        </SView>)
    }

    getcalificacion1(data) {
        if (!data) return null;
        return (<SView col={"xs-11"} height={180} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card} >
            <SHr height={10} />
            <SView col={"xs-5"} center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}>
                <SIcon name={"CalServicio"} width={60} fill={STheme.color.card} />
            </SView>
            <SView col={"xs-7"} center >
                <SText color={STheme.color.darkGray} fontSize={24}>SERVICIO</SText>
                <SHr height={10} />
                <SView col={"xs-10"} center style={{ borderWidth: 2, borderColor: STheme.color.primary, backgroundColor: STheme.color.white, borderRadius: 8 }}>
                    <SText color={STheme.color.text} fontSize={32}>{data.buen_servicio_media * 100}%</SText>
                </SView>
            </SView>
            <SHr height={10} />
        </SView>)
    }

    getcalificacion2(data) {
        return (<SView col={"xs-11"} height={180} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card} >
            <SHr height={10} />
            <SView col={"xs-5"} center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}>
                <SIcon name={"CalCalidad"} width={60} fill={STheme.color.card} />
            </SView>
            <SView col={"xs-7"} center >
                <SText color={STheme.color.darkGray} fontSize={24}>CALIDAD</SText>
                <SHr height={10} />
                <SView col={"xs-10"} center style={{ borderWidth: 2, borderColor: STheme.color.primary, backgroundColor: STheme.color.white, borderRadius: 8 }}>
                    <SText color={STheme.color.text} fontSize={32}>{data.buena_calidad_media * 100}%</SText>
                </SView>
            </SView>
            <SHr height={10} />
        </SView>)
    }

    getcalificacion3(data) {
        return (<SView col={"xs-11"} height={180} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card} >
            <SHr height={10} />
            <SView col={"xs-5"} center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}>
                <SIcon name={"CalCantidad"} width={60} fill={STheme.color.card} />
            </SView>
            <SView col={"xs-7"} center >
                <SText color={STheme.color.darkGray} fontSize={24}>CANTIDAD</SText>
                <SHr height={10} />
                <SView col={"xs-10"} center style={{ borderWidth: 2, borderColor: STheme.color.primary, backgroundColor: STheme.color.white, borderRadius: 8 }}>
                    <SText color={STheme.color.text} fontSize={32}>{data.buena_cantidad_media * 100}%</SText>
                </SView>
            </SView>
            <SHr height={10} />
        </SView>)
    }

    getComentarios() {
        return (<SView col={"xs-11"} height={130} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card} >
            <SHr height={10} />
            <SView col={"xs-5"} center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}>
                <SIcon name={"calComentario"} width={60} fill={STheme.color.card} />
            </SView>
            <SView col={"xs-7"} center >
                <SText color={STheme.color.darkGray} fontSize={24}>COMENTARIOS</SText>
            </SView>
            <SHr height={10} />
        </SView>)
    }



    getCalificacion() {
        // alert(this.key_restaurante)
        this.dataRestaurante = calificacion.Actions.getMediaByRestaurante(this.key, this.props)
        if (!this.dataRestaurante) return null;
        var cl = this.dataRestaurante;
        if (!cl.buen_servicio_media && !cl.buena_calidad_media && !cl.buena_cantidad_media) return null;
        return (
            <>
                {this.dataRestaurante.star_media ? this.getEstrellas(this.dataRestaurante) : null}
                <SHr height={15} />
                {this.dataRestaurante.buena_calidad_media ? this.getcalificacion2(this.dataRestaurante) : null}

                <SHr height={15} />
                {this.dataRestaurante.buena_cantidad_media ? this.getcalificacion3(this.dataRestaurante) : null}

                <SHr height={15} />
                {this.dataRestaurante.buen_servicio_media ? this.getcalificacion1(this.dataRestaurante) : null}

                <SHr height={15} />
                {this.dataRestaurante.comentarios ? this.getComentarios(this.dataRestaurante) : null}

            </>
        )
    }

    render() {
        return (<>
            <BarraSuperiorTapeke>
            </BarraSuperiorTapeke>
            <SPage title={''} hidden center   >
                <SView flex col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center backgroundColor={"transparent"}  >
                    <SHr height={30} />
                    {this.getCalificacion()}

                    <SHr height={30} />
                </SView>

            </SPage>
            <PBarraFooter url={"calificacion"} />
        </>);
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Calificacion);