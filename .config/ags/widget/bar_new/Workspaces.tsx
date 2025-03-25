import AstalHyprland from "gi://AstalHyprland?version=0.1";
import Gdk from "gi://Gdk?version=4.0";
import { isSpecialWorkspace, monitorContainsWorkspace } from "../../util/hyprland";
import { bind } from "astal";

const hyprland = AstalHyprland.get_default();

function WorkspaceButton({ workspace }: { workspace: AstalHyprland.Workspace }) {
  return (
    <button
      label={bind(workspace, "id").as((id) => {
        // Makes each monitor have its own set of workspace IDs
        for (const other of hyprland.workspaces) {
          if (workspace.monitor.name !== other.monitor.name && other.id < id) id -= 1;
        }
        return String(id);
      })}
      onClicked={() => {
        if (hyprland.focusedWorkspace !== workspace) workspace.focus();
      }}
    />
  );
}

export default function Workspaces({ monitor }: { monitor: Gdk.Monitor }) {
  return (
    <box cssClasses={["workspaces"]}>
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
