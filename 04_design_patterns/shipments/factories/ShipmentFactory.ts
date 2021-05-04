import {Shipment} from "../Shipment";
import {State} from "../../State";
import {Letter} from "../Letter";
import {Package} from "../Package";
import {Oversized} from "../Oversized";
import {IShipment} from "../../interfaces/IShipment";

export class ShipmentFactory {
  static makeShipment(state: State): IShipment {
    if (state.weight <= 15) {
      return new Letter(state);
    } else if (state.weight <= 160) {
      return new Package(state);
    } else {
      return new Oversized(state);
    }
  }
}
