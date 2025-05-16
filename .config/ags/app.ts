import { App, Gdk } from "astal/gtk4";

import style from "./style/index.scss";
import Bar from "./window/Bar";

function populateMonitor(monitor: Gdk.Monitor) {
	Bar(monitor);
}

App.start({
	css: style,
	main: () => App.get_monitors().map(populateMonitor)
});
