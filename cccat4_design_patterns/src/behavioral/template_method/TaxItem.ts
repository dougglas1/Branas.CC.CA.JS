import Item from "./Item";

export default abstract class TaxItem extends Item {

	calculateTax (): number {
		return (this.price * this.getTax())/100;
	};

	abstract getTax(): number;
}
