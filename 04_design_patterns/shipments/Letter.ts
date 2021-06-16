import {Shipment} from "./Shipment";
import {ShipperFactory} from "../shippers/factories/ShipperFactory";
import {LetterShipperFactory} from "../shippers/factories/LetterShipperFactory";

export class Letter extends Shipment {
  protected getShipperFactory(): ShipperFactory {
    return new LetterShipperFactory(this.state.fromZipCode, this.state.weight);
  }
}
