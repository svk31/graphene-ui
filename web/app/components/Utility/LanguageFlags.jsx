import React from "react";
import connectToStores from "alt/utils/connectToStores";
import SettingsStore from "stores/SettingsStore";
import SettingsActions from "actions/SettingsActions";
import IntlActions from "actions/IntlActions";

var enFlag = require("assets/english_flag.png");
var tuFlag = require("assets/turkish_flag.png");

@connectToStores
export default class LanguageFlags extends React.Component {

    static getStores() {
        return [SettingsStore];
    }

    static getPropsFromStores() {
        return {
            locale: SettingsStore.getState().settings.get("locale")
        };
    }

    _onChangeLanguage(locale) {
        IntlActions.switchLocale(locale);
        SettingsActions.changeSetting({setting: "locale", value: locale });
    }

    render() {
        let {locale} = this.props;

        return (
            <div style={{paddingTop: 12}}>
                <img onClick={this._onChangeLanguage.bind(this, "tr")} style={{opacity: locale !== "tr" ? 0.5 : 1, paddingRight: 5, margin: 0, height: 25}} src={tuFlag}/>
                <img onClick={this._onChangeLanguage.bind(this, "en")} style={{opacity: locale !== "en" ? 0.5 : 1, margin: 0, height: 25}} src={enFlag}/>
            </div>
        );
    }
}
