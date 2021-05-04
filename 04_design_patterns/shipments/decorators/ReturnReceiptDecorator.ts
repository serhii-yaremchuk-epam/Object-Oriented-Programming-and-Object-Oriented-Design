import {IShipment} from "../../interfaces/IShipment";

export class ReturnReceiptDecorator implements IShipment {
  protected wrappee: IShipment;

  constructor(shipment: IShipment) {
    this.wrappee = shipment;
  }

  ship(): string {
    return `${this.wrappee.ship()}
**MARK RETURN RECEIPT REQUESTED**`;
  }
}
