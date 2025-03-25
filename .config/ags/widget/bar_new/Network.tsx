import { bind } from "astal";
import AstalNetwork from "gi://AstalNetwork?version=0.1";
import Gtk from "gi://Gtk?version=4.0";

const network = AstalNetwork.get_default();

function UnknownPopover() {
  return (
    <popover>
      <label label={"TODO: Unknown popover"} />
    </popover>
  );
}

function WifiPopover() {
  return (
    <popover>
      <label label={"TODO: Wifi popover"} />
    </popover>
  );
}

function WiredPopover() {
  const wired = network.wired;

  return (
    <popover widthRequest={256} hasArrow={false}>
      <box orientation={Gtk.Orientation.VERTICAL}>
        <label halign={Gtk.Align.START} label={`Interface: ${wired.device.interface}`} />
        <label halign={Gtk.Align.START} label={`Private IP: ${wired.device.ip4Config.gateway}`} />
        {wired.device.ip4Config.nameservers.map((nameserver) => (
          <label halign={Gtk.Align.START} label={`Public IP: ${nameserver}`} />
        ))}
        <label halign={Gtk.Align.START} label={`MAC Address: ${wired.device.hwAddress}`} />
      </box>
    </popover>
  );
}

export default function Network() {
  return (
    <menubutton cssClasses={["network"]}>
      {bind(network, "primary").as((primary) => {
        switch (primary) {
          case AstalNetwork.Primary.UNKNOWN:
            return (
              <>
                <image iconName={"network-idle-symbolic"} />
                <UnknownPopover />
              </>
            );
          case AstalNetwork.Primary.WIFI:
            return (
              <>
                <image iconName={bind(network.wifi, "iconName")} />
                <WifiPopover />
              </>
            );
          case AstalNetwork.Primary.WIRED:
            return (
              <>
                <image iconName={bind(network.wired, "iconName")} />
                <WiredPopover />
              </>
            );
        }
      })}
    </menubutton>
  );
}
