import { Binding } from "astal";
import Gio from "gi://Gio?version=2.0";
import Gtk from "gi://Gtk?version=4.0";

type TrayButtonProps = {
  child?: Gtk.Widget[];
  actionGroup?: Gio.ActionGroup | Binding<Gio.ActionGroup>;
  menuModel?: Gio.MenuModel | Binding<Gio.MenuModel>;
  iconName?: string | Binding<string>;
};

export default function TrayButton({ child, actionGroup, menuModel, iconName }: TrayButtonProps) {
  const menuButton = (
    <menubutton menuModel={menuModel} iconName={iconName}>
      {child !== undefined && <popover>{child}</popover>}
    </menubutton>
  );
  if (actionGroup instanceof Gio.ActionGroup) {
    menuButton.insert_action_group("dbusmenu", actionGroup);
  } else if (actionGroup instanceof Binding) {
    menuButton.insert_action_group("dbusmenu", actionGroup.get());
  }
  return menuButton;
}
