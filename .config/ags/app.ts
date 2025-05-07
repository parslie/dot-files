import { App, Gdk } from "astal/gtk4";
import style from "./styles/index.scss";
import MonitorCorners from "./windows/MonitorCorners";

function populateMonitor(monitor: Gdk.Monitor) {
  MonitorCorners(monitor);
}

App.start({
  css: style,
  main: () => App.get_monitors().map(populateMonitor),
});
