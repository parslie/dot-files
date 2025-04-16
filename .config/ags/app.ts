import { App } from "astal/gtk4";
import style from "./styles/index.scss";
import Gdk from "gi://Gdk?version=4.0";

function populate_monitor(monitor: Gdk.Monitor) {}

App.start({
  css: style,
  main: () => App.get_monitors().map(populate_monitor),
});
