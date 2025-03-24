import AstalBattery from "gi://AstalBattery?version=0.1";
import TrayButton from "./Button";
import { bind } from "astal";
import Gtk from "gi://Gtk?version=4.0";

const battery = AstalBattery.get_default();

export default function TrayBattery() {
  return battery.isPresent ? (
    <TrayButton iconName={bind(battery, "batteryIconName")}>
      <box orientation={Gtk.Orientation.VERTICAL} widthRequest={300}>
        <box>
          <levelbar value={bind(battery, "percentage")} hexpand />
          <label
            label={bind(battery, "percentage").as(
              (percentage) => `${(percentage * 100).toFixed(0)}%`,
            )}
          />
        </box>
        {bind(battery, "charging").as((charging) => (
          <label
            halign={Gtk.Align.START}
            label={
              charging
                ? bind(battery, "timeToFull").as((timeToFull) => `${timeToFull} s until full`)
                : bind(battery, "timeToEmpty").as((timeToEmpty) => `${timeToEmpty} s until empty`)
            }
          />
        ))}
      </box>
    </TrayButton>
  ) : (
    <></>
  );
}
