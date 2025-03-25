import { bind } from "astal";
import AstalWp from "gi://AstalWp?version=0.1";
import Gtk from "gi://Gtk?version=4.0";

const wireplumber = AstalWp.get_default()!;
const defaultSpeaker = wireplumber.defaultSpeaker;
const defaultMicrophone = wireplumber.defaultMicrophone;

function EndpointSlider({ endpoint }: { endpoint: AstalWp.Endpoint }) {
  return (
    <box>
      <button
        onClicked={() => {
          endpoint.mute = !endpoint.mute;
        }}
      >
        <image iconName={bind(endpoint, "volumeIcon")} />
      </button>
      <slider
        hexpand
        min={0.0}
        max={1.0}
        value={bind(endpoint, "volume")}
        onChangeValue={(self) => {
          endpoint.volume = self.value;
        }}
      />
    </box>
  );
}

export default function Volume() {
  return (
    <menubutton cssClasses={["volume"]}>
      <image iconName={bind(defaultSpeaker, "volumeIcon")} />
      <popover widthRequest={256} hasArrow={false}>
        <box orientation={Gtk.Orientation.VERTICAL} spacing={4}>
          <EndpointSlider endpoint={defaultSpeaker} />
          <Gtk.Separator />
          <EndpointSlider endpoint={defaultMicrophone} />
        </box>
      </popover>
    </menubutton>
  );
}

// export default function Volume({ endpoint }: { endpoint: AstalWp.Endpoint }) {
//   function toggleMute() {
//     endpoint.mute = !endpoint.mute;
//   }

//   function onScroll(delta: number) {
//     let newVolume = endpoint.volume - delta * BASE_SENSITIVITY;
//     if (newVolume < 0) newVolume = 0;
//     else if (newVolume > 1) newVolume = 1;
//     endpoint.volume = newVolume;
//   }

//   return (
//     <box cssClasses={["speaker"]} onScroll={(_self, _dx, dy) => onScroll(dy)}>
//       <button onClicked={toggleMute}>
//         <image iconName={bind(endpoint, "volumeIcon")} />
//       </button>
//       <levelbar
//         value={bind(endpoint, "volume")}
//         widthRequest={100}
//         valign={Gtk.Align.CENTER}
//         heightRequest={16}
//       />
//     </box>
//   );
// }
