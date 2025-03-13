import { Binding } from "astal";
import Gio from "gi://Gio?version=2.0";
import Gtk from "gi://Gtk?version=4.0";

export default function TrayButton({
  child,
  iconName,
  menuModel,
  actionGroup,
}: {
  child?: Gtk.Widget;
  iconName: string | Binding<string>;
  menuModel?: Gio.MenuModel;
  actionGroup?: Gio.ActionGroup;
}) {
  const menuButton = (
    <menubutton menuModel={menuModel} canFocus={false}>
      <image iconName={iconName} />
      <popover>{child}</popover>
    </menubutton>
  );

  if (actionGroup !== undefined) {
    menuButton.insert_action_group("dbusmenu", actionGroup);
  }

  return menuButton;
}
