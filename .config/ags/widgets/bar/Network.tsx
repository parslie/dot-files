import { bind } from "astal";
import MenuButton from "../MenuButton";
import SectionBox, { SectionBorder } from "../SectionBox";
import { Brightness } from "../enums";
import AstalNetwork from "gi://AstalNetwork?version=0.1";
import NM from "gi://NM?version=1.0";
import Gtk from "gi://Gtk?version=4.0";

const network = AstalNetwork.get_default();

function internetToString(internet: AstalNetwork.Internet) {
  switch (internet) {
    case AstalNetwork.Internet.CONNECTED:
      return "Connected";
    case AstalNetwork.Internet.CONNECTING:
      return "Connecting";
    case AstalNetwork.Internet.DISCONNECTED:
      return "Disconnected";
  }
}

function UnknownNetwork() {
  // TODO: see if anything needs to be done here
  return <></>;
}

function WifiNetwork() {
  // TODO: wifi info and options
  return <></>;
}

function WiredNetwork() {
  const wired = network.wired;
  const device = wired.device;
  const client = network.client;

  return (
    <MenuButton iconName={bind(wired, "iconName")}>
      <box vertical>
        <SectionBox brightness={Brightness.Dark}>
          <label label="Network Control" hexpand halign={Gtk.Align.START} />
          <label label="[Toggle]" />
        </SectionBox>
        <SectionBorder />
        <SectionBox vertical>
          <box>
            <label label="Status: " />
            <label label={bind(wired, "internet").as(internetToString)} />
          </box>

          {bind(device.ip4Config, "addresses").as((addresses) =>
            addresses.map((address: NM.IPAddress) => (
              <box>
                <label label="Address: " />
                <label label={address.get_address()} />
              </box>
            )),
          )}

          <box>
            <label label="MAC Address: " />
            <label label={device.hwAddress} />
          </box>

          <box>
            <label label="Speed: " />
            <label label={`${wired.speed} Mbps`} />
          </box>
        </SectionBox>
      </box>
    </MenuButton>
  );
}

export default function Network() {
  switch (network.primary) {
    case AstalNetwork.Primary.UNKNOWN:
      return <UnknownNetwork />;
    case AstalNetwork.Primary.WIFI:
      return <WifiNetwork />;
    case AstalNetwork.Primary.WIRED:
      return <WiredNetwork />;
  }
}
