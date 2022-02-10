import { SInputsCofig, STheme } from 'servisofts-component'
const SConfig_Inputs: SInputsCofig = {
    "default": {
        "LabelStyle": {
            position: "absolute",
            top: -10,
            left: 0,
            fontSize: 14,
            width: "100%",
            color: STheme.color.text,
            // backgroundColor:STheme.color.primary+"22",
            // borderRadius:4,
            // padding:4,

        },
        "View": {
            borderWidth: 1,
            borderColor: "#ff0",
            height: 50,
            borderRadius: 10,
            marginTop: 32,
        },
        "InputText": {
            fontSize: 14,
            paddingStart: 8,
            color: STheme.color.text,
        },
        "error": {
            borderColor: STheme.color.danger,
        },
    }
}

export default SConfig_Inputs;

