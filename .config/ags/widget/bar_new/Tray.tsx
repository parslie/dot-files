import { bind, Binding } from "astal";
import AstalTray from "gi://AstalTray?version=0.1";
import Gio from "gi://Gio?version=2.0";

const tray = AstalTray.get_default();

type TrayItemProps = {
  iconName: Binding<string>;
  menuModel: Binding<Gio.MenuModel>;
  actionGroup: Binding<Gio.ActionGroup>;
};

function TrayItemButton({ iconName, menuModel, actionGroup }: TrayItemProps) {
  const menuButton = (
    <menubutton menuModel={menuModel}>
      <image iconName={iconName} />
    </menubutton>
  );
  menuButton.insert_action_group("dbusmenu", actionGroup.get());
  return menuButton;
}

export default function Tray() {
  return (
    <box>
      {bind(tray, "items").as((items) =>
        items.map((item) => (
          <TrayItemButton
            iconName={bind(item, "iconName")}
            menuModel={bind(item, "menuModel")}
            actionGroup={bind(item, "actionGroup")}
          />
        )),
      )}
    </box>
  );
}
