import { App, Gdk } from "astal/gtk4";
import style from "./styles/index.scss";

function populateMonitor(monitor: Gdk.Monitor) {
  // TODO: create windows and populate monitors
}

App.start({
  css: style,
  main: () => App.get_monitors().map(populateMonitor),
});
