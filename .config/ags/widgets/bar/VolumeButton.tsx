import { bind } from "astal";
import AstalWp from "gi://AstalWp?version=0.1";

const wireplumber = AstalWp.get_default()!;
const audio = wireplumber.audio;

export default function VolumeButton() {
	function onScroll(delta: number) {
		const newVolume = audio.defaultSpeaker.volume - delta * 0.1;
		if (newVolume > 1) {
			audio.defaultSpeaker.volume = 1;
		} else if (newVolume < 0) {
			audio.defaultSpeaker.volume = 0;
		} else {
			audio.defaultSpeaker.volume = newVolume;
		}
	}

	return (
		<menubutton cssClasses={["volume-button"]} onScroll={(_this, _dx, dy) => onScroll(dy)}>
			<image iconName={bind(audio.defaultSpeaker, "volumeIcon")} />
			<popover>
				<box vertical>
					<label label={"TODO: device dropdowns for speaker and microphone"} />
					<label label={"TODO: sliders for speaker and microphone"} />
				</box>
			</popover>
		</menubutton>
	);
}
