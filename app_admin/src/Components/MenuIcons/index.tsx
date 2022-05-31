import React, { Component } from 'react';
import { SIcon, SImage, SNavigation, SText, SView } from 'servisofts-component';

type TypeMenuIcons = {
    data: [{ label: string, icon: string, image: string, url: string, onPress?: () => void }],
}

class MenuIcons extends Component<TypeMenuIcons> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getIcons() {
        if (!this.props.data) return null;
        return this.props.data.map((obj, index) => {
            var icon: any = obj.icon;
            return <SView key={"page_" + index} width={130} height={130} style={{
                padding: 12,
            }}>
                <SView col={"xs-12"} height center style={{
                    overflow: "hidden",
                }} onPress={() => {
                    if (obj.onPress) obj.onPress();
                    if (obj.url) SNavigation.navigate(obj.url)

                }}>
                    <SView flex col={"xs-12"} center>
                        {obj.icon ? <SIcon name={icon} width={80} height={80} /> : null}
                        {obj.image ? <SImage src={obj.image} /> : null}
                    </SView>
                    <SView col={"xs-12"} height={34} center>
                        <SText center >{obj.label}</SText>
                    </SView>
                </SView>
            </SView>
        })
    }
    render() {
        return (
            <SView col={"xs-12"} row>
                {this.getIcons()}
            </SView>
        );
    }
}
export default MenuIcons;