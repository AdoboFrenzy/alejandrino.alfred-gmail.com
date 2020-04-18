import moment from "moment";

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  get readableDate() {
    const result = moment(this.date).format("MMMM Do YYYY, hh:mm");
    return result;
  }
}

export default Order;
