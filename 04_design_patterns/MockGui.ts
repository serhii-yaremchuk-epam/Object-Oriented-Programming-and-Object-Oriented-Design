import {Gui} from "./interfaces/Gui";
import {IShipment} from "./interfaces/IShipment";

export class MockGui implements Gui {
  private static instance: MockGui;
  private events = {};

  static getInstance(): MockGui {
    if (!MockGui.instance) {
      MockGui.instance = new MockGui();
    }

    return MockGui.instance;
  }

  private constructor() {
  }

  on(eventType: string, callback: (state: IShipment) => void) {
    this.events[eventType] = callback;
  }

  trigger(eventType: string, state: IShipment) {
    (this.events[eventType] as Function).call(null, state);
  }
}
