import AstalWp from "gi://AstalWp?version=0.1";
import TrayButton from "./Button";
import { bind } from "astal";
import Gtk from "gi://Gtk?version=4.0";

const wireplumber = AstalWp.get_default();

function EndpointVolumeSlider({ endpoint }: { endpoint: AstalWp.Endpoint }) {
  return (
    <box orientation={Gtk.Orientation.VERTICAL}>
      <label label={bind(endpoint, "description")} />
      <box>
        <button
          onClicked={() => {
            endpoint.mute = !endpoint.mute;
          }}
        >
          <image iconName={bind(endpoint, "volumeIcon")} />
        </button>
        <slider
          widthRequest={300}
          min={0.0}
          max={1.0}
          value={bind(endpoint, "volume")}
          onChangeValue={(slider) => {
            endpoint.volume = slider.value;
          }}
        />
      </box>
    </box>
  );
}

export default function TrayAudio() {
  const audio = wireplumber!.audio;
  const defaultSpeaker = audio.defaultSpeaker;
  const defaultMicrophone = audio.defaultMicrophone;

  return (
    <TrayButton iconName={bind(defaultSpeaker, "volumeIcon")}>
      <box orientation={Gtk.Orientation.VERTICAL}>
        <EndpointVolumeSlider endpoint={defaultSpeaker} />
        <Gtk.Separator />
        <EndpointVolumeSlider endpoint={defaultMicrophone} />
      </box>
    </TrayButton>
  );
}
