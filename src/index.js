import "./App.jsx";
import "./main.scss";
(function importAll(r) {
    return r.keys().map(r);
})(require.context("./images", false, /\.(png|jpe?g|svg|ico)$/));
