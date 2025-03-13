import { App } from "astal/gtk4";
import style from "./style/style.scss";
import windows from "./window";

function main() {
  windows.map((window) => App.get_monitors().map(window));
}

App.start({
  css: style,
  main: main,
});
