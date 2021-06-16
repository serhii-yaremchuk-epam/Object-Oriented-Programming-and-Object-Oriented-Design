export class State {
  shipmentId: number;
  weight: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  marks: string[];

  constructor(shipmentId: number, weight: number, toAddress: string, fromAddress: string, toZipCode: string, fromZipCode: string, marks?: string[]) {
    this.shipmentId = shipmentId;
    this.weight = weight;
    this.toAddress = toAddress;
    this.fromAddress = fromAddress;
    this.toZipCode = toZipCode;
    this.fromZipCode = fromZipCode;
    this.marks = marks;
  }
}
