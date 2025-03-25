import { bind } from "astal";
import AstalBattery from "gi://AstalBattery?version=0.1";
import Gtk from "gi://Gtk?version=4.0";

const battery = AstalBattery.get_default();

export default function Battery() {
  return battery.isPresent ? (
    <menubutton>
      <image iconName={bind(battery, "batteryIconName")} />
      <popover widthRequest={256} hasArrow={false}>
        <box orientation={Gtk.Orientation.VERTICAL}>
          {bind(battery, "state").as((state) => (
            <label
              halign={Gtk.Align.START}
              label={
                state === AstalBattery.State.CHARGING
                  ? bind(battery, "timeToFull").as((timeToFull) => `${timeToFull} s until full`)
                  : bind(battery, "timeToEmpty").as((timeToEmpty) => `${timeToEmpty} s until empty`)
              }
            />
          ))}
        </box>
      </popover>
    </menubutton>
  ) : (
    <></>
  );
}
