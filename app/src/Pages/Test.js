import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SDate, SHr, SNavigation, SPage, SText, STheme, SView, } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import LogoCargando from '../Components/LogoCargando';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    getDias() {
        var dias = new SDate().addMonth(1).setDay(0).getDay();
        var curDate = new SDate();
        var arr = Array.from(Array(dias - curDate.getDay() + 1).keys())
        return arr.map((i) => {
            var day = i + curDate.getDay();
            var fecha = new SDate().setDay(day);
            var isCurrent = fecha.toString("yyyy-MM-dd") == new SDate().toString("yyyy-MM-dd");
            return <SText>{fecha.toString("MON,dd") + "\t"} d= {fecha.getDayOfWeek()} {"\t"} {fecha.getDayOfWeekJson().text}  {isCurrent ? "(HOY)" : ""}</SText>
        })
    }


    render() {
        return (
            <SPage title={'Test'}>
                {this.getDias()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Test);