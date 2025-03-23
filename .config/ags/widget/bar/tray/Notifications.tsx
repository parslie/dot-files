import AstalNotifd from "gi://AstalNotifd?version=0.1";
import TrayButton from "./Button";
import Gtk from "gi://Gtk?version=4.0";
import { bind } from "astal";
import GLib from "gi://GLib?version=2.0";
import Gdk from "gi://Gdk?version=4.0";

const notifd = AstalNotifd.get_default();

function Notification({ data }: { data: AstalNotifd.Notification }) {
  const time = GLib.DateTime.new_from_unix_local(data.time).format("%-d %B %H:%M")!;

  function onButtonPressed(_self: Gtk.Widget, event: Gdk.ButtonEvent) {
    switch (event.get_button()) {
      case 1:
        // TODO: how to handle different actions
        if (data.actions.length !== 0) data.invoke(data.actions[0].id);
      case 3:
        data.dismiss();
        break;
      default:
        break;
    }
  }

  return (
    <box cssClasses={["notification"]} onButtonPressed={onButtonPressed}>
      <image iconName={data.appIcon} />
      <box orientation={Gtk.Orientation.VERTICAL}>
        <label halign={Gtk.Align.START} label={data.summary} />
        <label halign={Gtk.Align.START} label={data.body} />
        <label halign={Gtk.Align.START} label={time} />
      </box>
    </box>
  );
}

export default function TrayNotifications() {
  return (
    <TrayButton>
      <box orientation={Gtk.Orientation.VERTICAL} widthRequest={300}>
        {bind(notifd, "notifications").as((notifications) =>
          notifications.length === 0 ? (
            <label halign={Gtk.Align.START} label={"You have no notifications..."} />
          ) : (
            notifications
              .sort((a, b) => a.time - b.time)
              .map((notification) => <Notification data={notification} />)
          ),
        )}
      </box>
    </TrayButton>
  );
}
