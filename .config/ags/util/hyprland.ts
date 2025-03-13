import AstalHyprland from "gi://AstalHyprland?version=0.1";
import Gdk from "gi://Gdk?version=4.0";

const hyprland = AstalHyprland.get_default();

export function belongsToMonitor(monitor: Gdk.Monitor, workspace: AstalHyprland.Workspace) {
  return monitor.connector === workspace.monitor.name;
}

export function isSpecialWorkspace(workspace: AstalHyprland.Workspace) {
  return workspace.id >= -99 && workspace.id <= -2;
}

export function focusWorkspace(workspace: AstalHyprland.Workspace) {
  const focusedWorkspace = hyprland.focusedWorkspace;
  if (focusedWorkspace !== workspace) workspace.focus();
}
