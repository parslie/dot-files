import { App } from "astal/gtk4";
import style from "./styles/index.scss";
import Gdk from "gi://Gdk?version=4.0";
import WidgetShowcase from "./windows/WidgetShowcase";
import Bar from "./windows/Bar";

function populate_monitor(monitor: Gdk.Monitor) {
  WidgetShowcase(monitor);
  Bar(monitor);
}

App.start({
  css: style,
  main: () => App.get_monitors().map(populate_monitor),
});
