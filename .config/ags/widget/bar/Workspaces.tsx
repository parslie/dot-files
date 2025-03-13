import { bind } from "astal";
import AstalHyprland from "gi://AstalHyprland?version=0.1";
import Gdk from "gi://Gdk?version=4.0";
import { belongsToMonitor, focusWorkspace, isSpecialWorkspace } from "../../util/hyprland";

const hyprland = AstalHyprland.get_default();

function WorkspaceButton({ workspace }: { workspace: AstalHyprland.Workspace }) {
  return (
    <button
      canFocus={false}
      cssClasses={bind(hyprland, "focusedWorkspace").as((focusedWorkspace) =>
        workspace === focusedWorkspace ? ["focused"] : [],
      )}
      onClicked={() => focusWorkspace(workspace)}
    >
      <label label={bind(workspace, "id").as((id) => id.toString())} />
    </button>
  );
}

export default function Workspaces({ monitor }: { monitor: Gdk.Monitor }) {
  return (
    <box cssClasses={["workspaces"]}>
      {bind(hyprland, "workspaces").as((workspaces) =>
        workspaces
          .filter((workspace) => belongsToMonitor(monitor, workspace))
          .filter((workspace) => !isSpecialWorkspace(workspace))
          .sort((a, b) => a.id - b.id)
          .map((workspace) => <WorkspaceButton workspace={workspace} />),
      )}
    </box>
  );
}
