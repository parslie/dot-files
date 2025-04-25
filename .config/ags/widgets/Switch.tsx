import { bind, Variable } from "astal";

export default function Switch() {
  const state = Variable<boolean>(false);

  return (
    <switch
      cssClasses={bind(state).as((state) => (state ? ["on"] : ["off"]))}
      onStateSet={(self) => state.set(!self.state)}
    />
  );
}
