import {IShipment} from "../../interfaces/IShipment";

export class DoNotLeaveDecorator implements IShipment {
  protected wrappee: IShipment;

  constructor(shipment: IShipment) {
    this.wrappee = shipment;
  }

  ship(): string {
    return `${this.wrappee.ship()}
**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**`;
  }
}
