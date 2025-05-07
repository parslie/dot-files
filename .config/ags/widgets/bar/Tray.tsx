import { bind } from "astal";
import AstalTray from "gi://AstalTray?version=0.1";

const tray = AstalTray.get_default();

function TrayButton({ item }: { item: AstalTray.TrayItem }) {
	let menuButton = (
		<menubutton cssClasses={["tray-button"]} menuModel={bind(item, "menuModel")}>
			<image iconName={bind(item, "iconName")} />
		</menubutton>
	);

	menuButton.insert_action_group("dbusmenu", item.actionGroup);

	return menuButton;
}

export default function Tray() {
	return (
		<box>
			{bind(tray, "items").as((items) =>
				items
					.sort((a, b) => a.title.localeCompare(b.title))
					.map((item) => <TrayButton item={item} />)
			)}
		</box>
	);
}
