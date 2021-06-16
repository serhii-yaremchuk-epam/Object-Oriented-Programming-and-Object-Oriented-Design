import {MockGui} from "./MockGui";
import {State} from "./State";
import {DoNotLeaveDecorator} from "./shipments/decorators/DoNotLeaveDecorator";
import {FragileDecorator} from "./shipments/decorators/FragileDecorator";
import {ShipmentFactory} from "./shipments/factories/ShipmentFactory";
import {Client} from "./Client";
import {ReturnReceiptDecorator} from "./shipments/decorators/ReturnReceiptDecorator";

const mockGui = MockGui.getInstance();
const client = new Client(mockGui);

/*************************               Air West             **********************************/
// expected cost: 0.78
mockGui.trigger('ship', new DoNotLeaveDecorator(new FragileDecorator(ShipmentFactory.makeShipment(new State(
  0,
  2,
  'To Address',
  'From Address',
  '99999',
  '11223'
)))));

// expected cost: 25
mockGui.trigger('ship', new FragileDecorator(ShipmentFactory.makeShipment(new State(
  0,
  100,
  'To Address',
  'From Address',
  '99999',
  'nonsense'
))));

// expected cost: 60
mockGui.trigger('ship', new DoNotLeaveDecorator(new FragileDecorator(new ReturnReceiptDecorator(ShipmentFactory.makeShipment(new State(
  0,
  200,
  'To Address',
  'From Address',
  '99999',
  '11223'
))))));


/*************************               Chicago Sprint             **********************************/
// expected cost: 0.84
mockGui.trigger('ship', ShipmentFactory.makeShipment(new State(
  0,
  2,
  'To Address',
  'From Address',
  '99999',
  '44223'
)));

// expected cost: 20
mockGui.trigger('ship', ShipmentFactory.makeShipment(new State(
  0,
  100,
  'To Address',
  'From Address',
  '99999',
  '44223'
)));

// expected cost: 0
mockGui.trigger('ship', ShipmentFactory.makeShipment(new State(
  0,
  200,
  'To Address',
  'From Address',
  '99999',
  '44223'
)));

/*************************               Pacific Parcel             **********************************/
// expected cost: 1.02
mockGui.trigger('ship', ShipmentFactory.makeShipment(new State(
  0,
  2,
  'To Address',
  'From Address',
  '99999',
  '88223'
)));

// expected cost: 19
mockGui.trigger('ship', ShipmentFactory.makeShipment(new State(
  0,
  100,
  'To Address',
  'From Address',
  '99999',
  '88223'
)));

// expected cost: 42
mockGui.trigger('ship', ShipmentFactory.makeShipment(new State(
  0,
  200,
  'To Address',
  'From Address',
  '99999',
  '88223'
)));
