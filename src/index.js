import React from "react";
import { render } from "react-dom";
import "./main.scss";
(function importAll(r) {
    return r.keys().map(r);
})(require.context("./images", false, /\.(png|jpe?g|svg|ico)$/));

const App = () => {
    return <div>Rocketplate React ❤</div>;
};

render(<App />, document.getElementById("root"));
