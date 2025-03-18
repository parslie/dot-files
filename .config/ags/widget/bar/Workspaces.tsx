import { bind } from "astal";
import AstalHyprland from "gi://AstalHyprland?version=0.1";
import Gdk from "gi://Gdk?version=4.0";
import { isSpecialWorkspace, monitorContainsWorkspace } from "../../util/hyprland";
import Gtk from "gi://Gtk?version=4.0";

const hyprland = AstalHyprland.get_default();

function WorkspaceButton({ workspace }: { workspace: AstalHyprland.Workspace }) {
  return (
    <button
      vexpand
      label={bind(workspace, "id").as((id) => {
        2;
        let newId = id;
        for (const other of hyprland.workspaces) {
          // Makes each monitor have its own set of workspace IDs
          if (workspace.monitor.name !== other.monitor.name && other.id < id) newId -= 1;
        }
        return String(newId);
      })}
      canFocus={false}
      onClicked={() => {
        if (hyprland.focusedWorkspace !== workspace) workspace.focus();
      }}
    />
  );
}

export default function Workspaces({ monitor }: { monitor: Gdk.Monitor }) {
  return (
    <box cssClasses={["module", "workspaces"]} overflow={Gtk.Overflow.HIDDEN}>
      {bind(hyprland, "workspaces").as((workspaces) =>
        workspaces
          .filter((workspace) => !isSpecialWorkspace(workspace))
          .filter((workspace) => monitorContainsWorkspace(monitor, workspace))
          .sort((a, b) => a.id - b.id)
          .map((workspace) => <WorkspaceButton workspace={workspace} />),
      )}
    </box>
  );
}
