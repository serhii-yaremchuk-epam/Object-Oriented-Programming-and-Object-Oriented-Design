import {Shipment} from "./Shipment";
import {ShipperFactory} from "../shippers/factories/ShipperFactory";
import {PackageShipperFactory} from "../shippers/factories/PackageShipperFactory";

export class Package extends Shipment {
  protected getShipperFactory(): ShipperFactory {
    return new PackageShipperFactory(this.state.fromZipCode, this.state.weight);
  }
}
