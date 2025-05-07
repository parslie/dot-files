import GObject from "gi://GObject";
import { Gtk, astalify, type ConstructProps } from "astal/gtk4";

type CalendarProps = ConstructProps<Gtk.Calendar, Gtk.Calendar.ConstructorProps>;
const Calendar = astalify<Gtk.Calendar, Gtk.Calendar.ConstructorProps>(Gtk.Calendar, {
	getChildren(self) {
		return [];
	},
	setChildren(self, children) {}
});

export default Calendar;
