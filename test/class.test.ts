describe('Class', () => {

    class Customer {
        constructor() {
            console.info("Created a new customer");
        }
    }

    class Order {

    }

    it('should create class', () => {
        const customer: Customer = new Customer();
        const order: Order = new Order();
    });
    
    it('should create a new customer by constructor', () => {
        new Customer();
        new Customer();
    })
});