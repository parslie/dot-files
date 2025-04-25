import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import SectionBox, { SectionBorder } from "../widgets/SectionBox";
import { Brightness, ButtonStyle } from "../widgets/enums";
import Button from "../widgets/Button";
import Gtk from "gi://Gtk?version=4.0";
import MenuButton from "../widgets/MenuButton";

export default function WidgetShowcase(monitor: Gdk.Monitor) {
  return (
    <window
      gdkmonitor={monitor}
      keymode={Astal.Keymode.ON_DEMAND}
      layer={Astal.Layer.TOP}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={Astal.WindowAnchor.RIGHT}
      namespace={"widget-showcase"}
      visible
    >
      <box vertical>
        <SectionBox brightness={Brightness.Dark}>
          <label label={"Widget Showcase"} />
        </SectionBox>
        <SectionBorder />
        <SectionBox vertical>
          <label label="Regular buttons" halign={Gtk.Align.START} />
          <box spacing={4} marginTop={4}>
            <Button iconName="firefox" label="Firefox" />
            <Button iconName="folder-download-symbolic" />
            <Button label="Download" />
            <Button />
          </box>
          <box spacing={4} marginTop={4}>
            <Button iconName="firefox" label="Firefox" style={ButtonStyle.Outlined} />
            <Button iconName="folder-download-symbolic" style={ButtonStyle.Outlined} />
            <Button label="Download" style={ButtonStyle.Outlined} />
            <Button style={ButtonStyle.Outlined} />
          </box>
          <box spacing={4} marginTop={4}>
            <Button iconName="firefox" label="Firefox" style={ButtonStyle.Filled} />
            <Button iconName="folder-download-symbolic" style={ButtonStyle.Filled} />
            <Button label="Download" style={ButtonStyle.Filled} />
            <Button style={ButtonStyle.Filled} />
          </box>
        </SectionBox>
        <SectionBorder />
        <SectionBox vertical>
          <label label="Menu buttons" halign={Gtk.Align.START} />
          <box spacing={4} marginTop={4}>
            <MenuButton iconName="folder-download-symbolic" label="Download" />
            <MenuButton iconName="firefox" style={ButtonStyle.Outlined} />
            <MenuButton label="Firefox" style={ButtonStyle.Filled}>
              <SectionBox vertical>
                <label label="asd" />
                <label label="asd" />
              </SectionBox>
            </MenuButton>
          </box>
        </SectionBox>
      </box>
    </window>
  );
}
