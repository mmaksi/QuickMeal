"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var expo_status_bar_1 = require("expo-status-bar");
var restaurants_screen_1 = require("./src/features/screen/restaurants.screen");
var native_1 = require("styled-components/native");
var theme_1 = require("./src/infra/theme");
var oswald_1 = require("@expo-google-fonts/oswald");
var lato_1 = require("@expo-google-fonts/lato");
function App() {
    var oswald = (0, oswald_1.useFonts)({
        Oswald_400Regular: oswald_1.Oswald_400Regular,
    })[0];
    var lato = (0, lato_1.useFonts)({
        Lato_400Regular: lato_1.Lato_400Regular,
    })[0];
    if (!oswald || !lato) {
        return null;
    }
    return (<react_1.Fragment>
      <native_1.ThemeProvider theme={theme_1.theme}>
        <restaurants_screen_1.default />
      </native_1.ThemeProvider>
      <expo_status_bar_1.StatusBar style="auto"/>
    </react_1.Fragment>);
}
exports.default = App;
