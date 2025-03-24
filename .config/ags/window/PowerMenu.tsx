import { exec } from "astal";
import { App } from "astal/gtk4";
import Gdk from "gi://Gdk?version=4.0";
import Gtk from "gi://Gtk?version=4.0";

export const POWER_MENU_NAME = "Power Menu";

export default function PowerMenu(monitor: Gdk.Monitor) {
  return (
    <window
      visible={false}
      name={POWER_MENU_NAME}
      application={App}
      gdkmonitor={monitor}
      cssClasses={["power-menu"]}
    >
      <box orientation={Gtk.Orientation.VERTICAL}>
        <button
          label={"Lock"}
          onClicked={() => {
            App.toggle_window(POWER_MENU_NAME);
            exec("loginctl lock-session");
          }}
        />
        <button
          label={"Sleep"}
          onClicked={() => {
            App.toggle_window(POWER_MENU_NAME);
            exec("systemctl suspend");
          }}
        />
        <button
          label={"Stop UWSM"}
          onClicked={() => {
            exec("uwsm stop");
          }}
        />
        <button
          label={"Restart"}
          onClicked={() => {
            exec("systemctl reboot");
          }}
        />
        <button
          label={"Power off"}
          onClicked={() => {
            exec("systemctl poweroff");
          }}
        />
      </box>
    </window>
  );
}
