import {Shipper} from "../Shipper";
import {AirEastShipper} from "../AirEastShipper";
import {ChicagoSprintShipper} from "../ChicagoSprintShipper";
import {PacificParcelShipper} from "../PacificParcelShipper";
import {CostStrategy} from "../../cost-strategies/CostStrategy";

export abstract class ShipperFactory {
  private readonly fromZipCode: string;
  protected readonly weight: number;

  private readonly fromZipCodes: FromZipCodes = {
    airEast: [1, 2, 3],
    chicagoSprint: [4, 5, 6],
    pacificParcel: [7, 8, 9],
  }

  constructor(fromZipCode: string, weight: number) {
    this.fromZipCode = fromZipCode;
    this.weight = weight;
  }

  createShipper(): Shipper {
    let shipper: Shipper;
    let firstZipChar;

    if (!this.fromZipCode) {
      firstZipChar = null;
    } else {
      firstZipChar = +this.fromZipCode[0];
    }

    if (this.fromZipCodes.chicagoSprint.includes(firstZipChar)) {
      shipper = new ChicagoSprintShipper(this.weight);
      shipper.setCostStrategy(this.getChicagoSprintStrategy());
    } else if (this.fromZipCodes.pacificParcel.includes(firstZipChar)) {
      shipper = new PacificParcelShipper(this.weight);
      shipper.setCostStrategy(this.getPacificParcelStrategy());
    } else {
      shipper = new AirEastShipper(this.weight);
      shipper.setCostStrategy(this.getAirEastCostStrategy());
    }

    return shipper;
  }

  abstract getAirEastCostStrategy(): CostStrategy;
  abstract getChicagoSprintStrategy(): CostStrategy;
  abstract getPacificParcelStrategy(): CostStrategy;
}

interface FromZipCodes {
  airEast: number[];
  chicagoSprint: number[];
  pacificParcel: number[];
}
