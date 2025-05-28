export default function PowerButtonsModule() {
	return (
		<box cssClasses={["menu-module", "power-buttons"]}>
			<label label={"[battery]"} />
			<box hexpand />
			<label label={"[lock]"} />
			<label label={"[power menu]"} />
		</box>
	);
}
