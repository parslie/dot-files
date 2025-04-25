import { bind, Variable } from "astal";
import Button from "./Button";
import Gtk from "gi://Gtk?version=4.0";

export type DropdownProps = {
  options: any[];
  defaultOptionIdx?: number;
  onSelect?: (option: any) => void;
};

export default function DropdownInput({ options, defaultOptionIdx, onSelect }: DropdownProps) {
  const selectedOptionIdx = Variable<number>(defaultOptionIdx !== undefined ? defaultOptionIdx : 0);

  function selectOption(popover: Gtk.Widget, optionIdx: number) {
    popover.hide();
    selectedOptionIdx.set(optionIdx);
    if (onSelect !== undefined) {
      onSelect(options[optionIdx]);
    }
  }

  return (
    <menubutton cssClasses={["dropdown-input"]} alwaysShowArrow>
      <label label={bind(selectedOptionIdx).as((optionIdx) => String(options[optionIdx]))} />
      <popover hasArrow={false}>
        <box vertical>
          {options.map((option, optionIdx) => (
            <Button
              onClicked={(button) => selectOption(button.parent.parent.parent, optionIdx)}
              label={String(option)}
            />
          ))}
        </box>
      </popover>
    </menubutton>
  );
}
