import {Shipment} from "./Shipment";
import {ShipperFactory} from "../shippers/factories/ShipperFactory";
import {OversizedShipperFactory} from "../shippers/factories/OversizedShipperFactory";

export class Oversized extends Shipment {
  protected getShipperFactory(): ShipperFactory {
    return new OversizedShipperFactory(this.state.fromZipCode, this.state.weight);
  }
}
