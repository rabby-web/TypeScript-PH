{
  // Polymorphism allows us to treat different classes as instances of the same base class. This is useful when we want different classes to share a method but have unique implementations.
  // Base class
  class Notification {
    recipient: string;

    constructor(recipient: string) {
      this.recipient = recipient;
    }

    send() {
      console.log(`Sending a notification to ${this.recipient}`);
    }
  }

  // Derived class with specific implementation for email
  class EmailNotification extends Notification {
    send() {
      console.log(`Sending an email to ${this.recipient}... 📧`);
    }
  }

  // Derived class with specific implementation for SMS
  class SMSNotification extends Notification {
    send() {
      console.log(`Sending an SMS to ${this.recipient}... 📱`);
    }
  }

  // Function to send notifications, treating them as the same type
  function sendNotification(notification: Notification) {
    notification.send();
  }

  // Using polymorphism
  const email = new EmailNotification("alice@example.com");
  const sms = new SMSNotification("+123456789");

  sendNotification(email); // Sending an email to alice@example.com... 📧
  sendNotification(sms); // Sending an SMS to +123456789... 📱
}
