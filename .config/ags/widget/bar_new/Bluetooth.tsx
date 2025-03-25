import { bind } from "astal";
import AstalBluetooth from "gi://AstalBluetooth?version=0.1";
import Gtk from "gi://Gtk?version=4.0";

const bluetooth = AstalBluetooth.get_default();
const adapter = bluetooth.adapter;

function DeviceButton({ device }: { device: AstalBluetooth.Device }) {
  function toggleConnection() {
    if (device.connected) device.disconnect_device(() => {});
    else device.connect_device(() => {});
  }
  return (
    <button cssClasses={["device"]} onClicked={toggleConnection}>
      <box orientation={Gtk.Orientation.VERTICAL}>
        <box spacing={8}>
          <image iconName={device.icon} />
          <label halign={Gtk.Align.START} label={device.name} />
        </box>
        <revealer
          revealChild={bind(device, "connected")}
          transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}
        >
          <box spacing={8}>
            <image iconName={device.icon} opacity={0} />
            <label halign={Gtk.Align.START} label={"connected"} />
          </box>
        </revealer>
      </box>
    </button>
  );
}

export default function Bluetooth() {
  function toggleDiscovery() {
    if (adapter.discovering) adapter.stop_discovery();
    else adapter.start_discovery();
  }

  return (
    <menubutton cssClasses={["bluetooth"]}>
      <image
        iconName={bind(bluetooth, "isConnected").as((isConnected) =>
          isConnected ? "bluetooth-symbolic" : "bluetooth-disconnected-symbolic",
        )}
      />
      <popover widthRequest={256} hasArrow={false}>
        <box orientation={Gtk.Orientation.VERTICAL} spacing={4}>
          <box orientation={Gtk.Orientation.VERTICAL}>
            {bind(bluetooth, "devices").as((devices) =>
              devices
                .filter((device) => device.name)
                .sort((a, b) => b.name.localeCompare(a.name))
                .sort((a, b) => (b.connected ? 1 : 0))
                .map((device) => <DeviceButton device={device} />),
            )}
          </box>
          <Gtk.Separator />
          <box orientation={Gtk.Orientation.VERTICAL}>
            <button onClicked={toggleDiscovery}>
              <label
                label={bind(adapter, "discovering").as((discovering) =>
                  discovering ? "Stop Discovery" : "Discover",
                )}
              />
            </button>
          </box>
        </box>
      </popover>
    </menubutton>
  );
}
