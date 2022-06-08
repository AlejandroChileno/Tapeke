import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SHr, SGradient, SDate, SInfo, SOrdenador, SComponentContainer, SGrid, SIcon, SNavBar, SNavigation, SPage, SSCrollView, SScrollView2, SScrollView3, SText, STheme, SThread, SUuid, SImage, SList, SBuscador, SView, SLoad, SStorage, SPopup, SPopupOpen, SPopupClose, STable, STable2, SInput, SForm, SButtom, SMapView, SMath, SMarker, Font } from 'servisofts-component';

class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    getHeader() {
        return (
            <SView col={"xs-12"} height={50} row border={'red'}>
                <SView flex style={{ justifyContent: "center", }}>
                    <SText fontSize={28} bold>Chats</SText>
                </SView>
            </SView>
        );
    }

    getHeader2() {
        return (
            <SView col={"xs-12"} center height={50} row border={'red'}
                style={{
                    position: "absolute",
                    bottom: 0, overflow: 'hidden',
                    backgroundColor: STheme.color.primary,
                }}
            >
                <SView flex style={{ justifyContent: "center", }}>
                    <SInput center height={48} placeholder={"Message"}
                        ref={r => this.input_message = r} style={{ borderRadius: 100, backgroundColor: STheme.color.card, fontSize: 16, }} />

                </SView>
            </SView>
        );
    }


    //     <SView col={"xs-11"} row height backgroundColor={"transparent"} center>
    //     <SView col={"xs-10"} center height backgroundColor={"transparent"} >
    //         <SInput center height={48} placeholder={"Message"}
    //             ref={r => this.input_message = r} style={{ borderRadius: 100, backgroundColor: STheme.color.card, fontSize: 16, }} />

    //      </SView>
    //     <SView col={"xs-2"} center height backgroundColor={"transparent"}  >
    //         {this.boton_send()}
    //     </SView>
    // </SView>


    getList() {
        return (
            <SView flex border={'yellow'} >
                <SScrollView2 disableHorizontal >
                    <SHr height={20} />
                    <SView col={"xs-12"} center  >
                        <SView col={"xs-6"} card style={{ padding: 16 }}>
                            <SText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat corporis dolore magni ipsa voluptatem ad tempora obcaecati eaque, adipisci ea! Recusandae, non maxime. Odit molestias sunt fuga totam optio.</SText>
                        </SView>
                        <SHr height={20} />
                        <SView col={"xs-6"} card style={{ padding: 16 }}>
                            <SText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat corporis dolore magni ipsa voluptatem ad tempora obcaecati eaque, adipisci ea! Recusandae, non maxime. Odit molestias sunt fuga totam optio.</SText>
                        </SView>
                        <SHr height={20} />
                        <SView col={"xs-6"} card style={{ padding: 16 }}>
                            <SText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat corporis dolore magni ipsa voluptatem ad tempora obcaecati eaque, adipisci ea! Recusandae, non maxime. Odit molestias sunt fuga totam optio.</SText>
                        </SView>
                        <SHr height={20} />
                        <SView col={"xs-6"} card style={{ padding: 16 }}>
                            <SText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat corporis dolore magni ipsa voluptatem ad tempora obcaecati eaque, adipisci ea! Recusandae, non maxime. Odit molestias sunt fuga totam optio.</SText>
                        </SView>
                        <SHr height={20} />
                        <SView col={"xs-6"} card style={{ padding: 16 }}>
                            <SText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat corporis dolore magni ipsa voluptatem ad tempora obcaecati eaque, adipisci ea! Recusandae, non maxime. Odit molestias sunt fuga totam optio.</SText>
                        </SView>
                        <SHr height={20} />

                        <SView col={"xs-6"} card style={{ padding: 16 }}>
                            <SText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat corporis dolore magni ipsa voluptatem ad tempora obcaecati eaque, adipisci ea! Recusandae, non maxime. Odit molestias sunt fuga totam optio.</SText>
                        </SView>
                        <SHr height={20} />
                        <SView col={"xs-6"} card style={{ padding: 16 }}>
                            <SText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat corporis dolore magni ipsa voluptatem ad tempora obcaecati eaque, adipisci ea! Recusandae, non maxime. Odit molestias sunt fuga totam optio.</SText>
                        </SView>
                        <SHr height={20} />
                    </SView>
                </SScrollView2 >
            </SView>
        );
    }
    render() {
        return (<>

            <SView col={"xs-12"} center height={70} row backgroundColor={'green'}
                style={{
                    // position: "absolute",
                    top: 0, overflow: 'hidden',
                }}
            >

            </SView>

            <SView col={"xs-12"} center height backgroundColor={'red'}>
                <SView col={"xs-11"} flex  >
                    <SView flex backgroundColor={'yellow'} >
                        <SView col={"xs-12 md-9 lg-8"} height backgroundColor={"transparent"} border={"transparent"}  >

                            <SScrollView2 disableHorizontal >
                                <SView flex row height={200} />
                                <SText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat corporis dolore magni ipsa voluptatem ad tempora obcaecati eaque, adipisci ea! Recusandae, non maxime. Odit molestias sunt fuga totam optio.</SText>
                            </SScrollView2>
                        </SView>

                    </SView>
                </SView>

            </SView>

            <SView col={"xs-12"} center height={70} row border={'red'}
                style={{ position: "absolute", bottom: 0, overflow: 'hidden', backgroundColor: STheme.color.primary, }}
            >
                <SView flex height style={{ justifyContent: "center", }}>
                    <SInput center height={48} placeholder={"Message"} ref={r => this.input_message = r} style={{ borderRadius: 100, backgroundColor: STheme.color.card, fontSize: 16, }} />
                </SView>
            </SView>
        </>

        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Test2);