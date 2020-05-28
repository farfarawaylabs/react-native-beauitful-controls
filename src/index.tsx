import { NativeModules } from 'react-native';

type ReactNativeBeauitfulControlsType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ReactNativeBeauitfulControls } = NativeModules;

export default ReactNativeBeauitfulControls as ReactNativeBeauitfulControlsType;
