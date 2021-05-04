import {IShipment} from "../../interfaces/IShipment";

export class FragileDecorator implements IShipment {
  protected wrappee: IShipment;

  constructor(shipment: IShipment) {
    this.wrappee = shipment;
  }

  ship(): string {
    return `${this.wrappee.ship()}
**MARK FRAGILE**`;
  }
}
