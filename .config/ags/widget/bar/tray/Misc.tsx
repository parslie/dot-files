import { bind } from "astal";
import AstalTray from "gi://AstalTray?version=0.1";
import TrayButton from "./Button";

const tray = AstalTray.get_default();

export default function TrayMisc() {
  return (
    <>
      {bind(tray, "items").as((items) =>
        items.map((item) => (
          <TrayButton
            iconName={bind(item, "iconName")}
            menuModel={item.menuModel}
            actionGroup={item.actionGroup}
          />
        )),
      )}
    </>
  );
}
