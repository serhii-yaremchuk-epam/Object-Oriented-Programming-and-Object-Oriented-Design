import {State} from "../State";
import {Shipper} from "../shippers/Shipper";
import {ShipperFactory} from "../shippers/factories/ShipperFactory";
import {IShipment} from "../interfaces/IShipment";

export abstract class Shipment implements IShipment {
  // TODO remove after it will get the real shipment ID
  private static mockedId = 1;
  protected state: State;
  private shipper: Shipper;

  constructor(state: State) {
    state.shipmentId = state.shipmentId || this.getShipmentId();
    this.state = state;
    this.shipper = this.getShipperFactory().createShipper();
  }

  ship(): string {
    return `Shipment with the ID ${this.state.shipmentId} will be picked up from ${this.state.fromZipCode} ${this.state.fromAddress} and shipped to ${this.state.toZipCode} ${this.state.toAddress}
Cost = ${this.shipper.getCost()}`
  }

  private getShipmentId(): number {
    return Shipment.mockedId++;
  }

  protected abstract getShipperFactory(): ShipperFactory;
}
