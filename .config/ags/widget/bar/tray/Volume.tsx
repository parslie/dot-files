import AstalWp from "gi://AstalWp?version=0.1";
import TrayButton from "./Button";
import { bind } from "astal";
import Gtk from "gi://Gtk?version=4.0";

const audio = AstalWp.get_default()!.audio;

export default function TrayVolume() {
  const defaultSpeaker = audio.defaultSpeaker;
  const defaultMicrophone = audio.defaultMicrophone;

  return (
    <TrayButton iconName={bind(defaultSpeaker, "volumeIcon")}>
      <box orientation={Gtk.Orientation.VERTICAL}>
        <label label={bind(defaultSpeaker, "description")} />
        <box>
          <button
            iconName={bind(defaultSpeaker, "volumeIcon")}
            onClicked={() => {
              defaultSpeaker.mute = !defaultSpeaker.mute;
            }}
          />
          <slider
            hexpand
            widthRequest={300}
            min={0.0}
            max={1.0}
            value={bind(defaultSpeaker, "volume")}
            onChangeValue={(slider) => {
              defaultSpeaker.volume = slider.value;
            }}
          />
        </box>
        <Gtk.Separator />
        <label label={bind(defaultMicrophone, "description")} />
        <box>
          <button
            iconName={bind(defaultMicrophone, "volumeIcon")}
            onClicked={() => {
              defaultMicrophone.mute = !defaultMicrophone.mute;
            }}
          />
          <slider
            hexpand
            widthRequest={300}
            min={0.0}
            max={1.0}
            value={bind(defaultMicrophone, "volume")}
            onChangeValue={(slider) => {
              defaultMicrophone.volume = slider.value;
            }}
          />
        </box>
      </box>
    </TrayButton>
  );
}
