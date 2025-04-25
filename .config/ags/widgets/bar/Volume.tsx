import AstalWp from "gi://AstalWp?version=0.1";
import MenuButton from "../MenuButton";
import { bind } from "astal";
import Gtk from "gi://Gtk?version=4.0";
import SectionBox, { SectionBorder } from "../SectionBox";
import { Brightness } from "../enums";

const wireplumber = AstalWp.get_default();
const SCROLL_SENSITIVITY = 0.1;

export default function Volume() {
  const audio = wireplumber!.audio;

  function onScrolled(_button: Gtk.MenuButton, delta: number) {
    let newVolume = audio.defaultSpeaker.volume - delta * SCROLL_SENSITIVITY;
    if (newVolume < 0) {
      newVolume = 0;
    } else if (newVolume > 1) {
      newVolume = 1;
    }
    audio.defaultSpeaker.volume = newVolume;
  }

  return (
    <MenuButton iconName={bind(audio.defaultSpeaker, "volumeIcon")} onScrolled={onScrolled}>
      <box vertical>
        <SectionBox brightness={Brightness.Dark}>
          <label label="Volume Control" />
        </SectionBox>
        <SectionBorder />
        <SectionBox brightness={Brightness.Light}>
          <box vertical>
            <label label="[Speaker Dropdown]" />
            <box>
              <label label="[Mute Button]" />
              <label label="[Volume Slider]" />
            </box>
          </box>
        </SectionBox>
        <SectionBorder />
        <SectionBox brightness={Brightness.Light}>
          <box vertical>
            <label label="[Microphone Dropdown]" />
            <box>
              <label label="[Mute Button]" />
              <label label="[Volume Slider]" />
            </box>
          </box>
        </SectionBox>
      </box>
    </MenuButton>
  );
}
