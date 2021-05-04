import {Gui} from "./interfaces/Gui";
import {MockGui} from "./MockGui";
import {State} from "./State";
import {ShipmentFactory} from "./shipments/factories/ShipmentFactory";
import {IShipment} from "./interfaces/IShipment";
import {FragileDecorator} from "./shipments/decorators/FragileDecorator";
import {DoNotLeaveDecorator} from "./shipments/decorators/DoNotLeaveDecorator";

export class Client {
  constructor(gui: Gui) {
    gui.on('ship', this.onShip);
  }

  private onShip(shipment: IShipment) {
    console.log(shipment.ship());
  }
}
