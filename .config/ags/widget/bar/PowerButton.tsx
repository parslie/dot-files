import { App } from "astal/gtk4";
import { POWER_MENU_NAME } from "../../window/PowerMenu";

export default function PowerButton() {
  return (
    <button
      cssClasses={["module", "power"]}
      iconName={"computer-symbolic"}
      onClicked={() => {
        App.toggle_window(POWER_MENU_NAME);
      }}
    />
  );
}
