{
  class CreditCardPayment {
    constructor(public cardNumber: string, public expiryDate: string) {}

    processCreditCardPayment() {
      console.log("Processing credit card payment...");
      // Additional logic for processing credit card payment
    }
  }

  class PayPalPayment {
    constructor(public paypalEmail: string) {}

    processPayPalPayment() {
      console.log("Processing PayPal payment...");
      // Additional logic for processing PayPal payment
    }
  }

  class BankTransferPayment {
    constructor(public accountNumber: string, public bankName: string) {}

    processBankTransferPayment() {
      console.log("Processing bank transfer...");
      // Additional logic for processing bank transfer payment
    }
  }

  function processPayment(
    payment: CreditCardPayment | PayPalPayment | BankTransferPayment
  ) {
    if (payment instanceof CreditCardPayment) {
      payment.processCreditCardPayment();
    } else if (payment instanceof PayPalPayment) {
      payment.processPayPalPayment();
    } else if (payment instanceof BankTransferPayment) {
      payment.processBankTransferPayment();
    } else {
      throw new Error("Unknown payment method!");
    }
  }

  // Usage
  const creditCardPayment = new CreditCardPayment(
    "1234-5678-9876-5432",
    "12/25"
  );
  const paypalPayment = new PayPalPayment("user@example.com");
  const bankTransferPayment = new BankTransferPayment("987654321", "Big Bank");

  processPayment(creditCardPayment); // Processing credit card payment...
  processPayment(paypalPayment); // Processing PayPal payment...
  processPayment(bankTransferPayment); // Processing bank transfer...
}
