import Gtk from "gi://Gtk?version=4.0";

export type Condition = [any, Gtk.Widget];

export type ConditionalProps = {
  variable: any;
  conditions: [Condition, ...Condition[]];
  default_widget?: Gtk.Widget;
};

export default function Conditional({ variable, conditions, default_widget }: ConditionalProps) {
  for (const [condition, widget] of conditions) {
    if (variable === condition) {
      return widget;
    }
  }

  if (default_widget !== undefined) {
    return default_widget;
  } else {
    return <></>;
  }
}
