import { App } from "astal/gtk4";
import style from "./styles/index.scss";
import Gdk from "gi://Gdk?version=4.0";
import Bar from "./windows/Bar";
import StartMenu from "./windows/StartMenu";

function populate_monitor(monitor: Gdk.Monitor) {
  Bar(monitor);
  StartMenu(monitor);
}

App.start({
  css: style,
  main: () => App.get_monitors().map(populate_monitor),
});
