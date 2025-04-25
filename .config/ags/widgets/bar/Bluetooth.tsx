import Gtk from "gi://Gtk?version=4.0";
import MenuButton from "../MenuButton";
import SectionBox, { SectionBorder } from "../SectionBox";
import { Brightness } from "../enums";
import AstalBluetooth from "gi://AstalBluetooth?version=0.1";
import { bind } from "astal";

const bluetooth = AstalBluetooth.get_default();

export default function Bluetooth() {
  return (
    <MenuButton
      iconName={bind(bluetooth, "isPowered").as((isPowered) =>
        isPowered ? "bluetooth-active-symbolic" : "bluetooth-disabled-symbolic",
      )}
    >
      <box vertical>
        <SectionBox brightness={Brightness.Dark}>
          <label label="Bluetooth Control" hexpand halign={Gtk.Align.START} />
          <label label="[Toggle]" />
        </SectionBox>
        <SectionBorder />
        <SectionBox vertical>
          <label label="[List of Discovered Devices]" />
          <label label="[Discover Button]" />
        </SectionBox>
      </box>
    </MenuButton>
  );
}
