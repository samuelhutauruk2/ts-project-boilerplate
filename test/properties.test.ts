describe('Properties', () => {

    class Customer {
        readonly id: number;
        name: string = "Guest";
        age?: number;

        constructor(id: number) {
            this.id = id;
        }
    }

    it('should can have properties', () => {
        const customer = new Customer(1);
        customer.age = 23;
        customer.name = "samuel";

        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);
    });
});