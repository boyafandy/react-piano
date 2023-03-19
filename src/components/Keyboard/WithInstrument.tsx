// import { useEffect } from "react";
// import { useSoundfont } from "../../adapters/Soundfont";
// import { SoundfontProvider } from "../../adapters/Soundfont";
import { useInstrument } from "../../state/Instrument";
import { useAudioContext } from "../AudioContextProvider";
import { Keyboard } from "./Keyboard";
import { withInstrument } from "../../adapters/Soundfont";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  // const { loading, current, play, stop, load } = useSoundfont({ AudioContext });

  // useEffect(() => {
  //   if (!loading && instrument !== current) {
  //     load(instrument);
  //   }
  // }, [load, loading, current, instrument]);

  // return <Keyboard loading={loading} play={play} stop={stop} />;
  // return (
  //   <SoundfontProvider AudioContext={AudioContext} instrument={instrument} render={(props) => <Keyboard {...props} />}/>
  // )
  const WrappedKeyboard = withInstrument(Keyboard);
  return (
    <WrappedKeyboard AudioContext={AudioContext} instrument={instrument} />
  );
};
