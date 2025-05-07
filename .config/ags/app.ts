import { App, Gdk } from "astal/gtk4";
import style from "./styles/index.scss";
import MonitorCorners from "./windows/MonitorCorners";
import Bar from "./windows/Bar";

function populateMonitor(monitor: Gdk.Monitor) {
	MonitorCorners(monitor);
	Bar(monitor);
}

App.start({
	css: style,
	main: () => App.get_monitors().map(populateMonitor)
});
