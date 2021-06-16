import {IShipment} from "./IShipment";

export interface Gui {
  on(eventType: string, callback: (state: IShipment) => void);
  trigger(eventType: string, state: IShipment);
}
