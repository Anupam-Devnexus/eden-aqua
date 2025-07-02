// Razorpay.js
const loadScript = (src) =>
  new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

export default function Razorpay({ amount }) {
  const handlePayment = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert('Razorpay SDK failed to load.');
      return;
    }

    const orderData = await fetch('/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    }).then((t) => t.json());

    const options = {
      key: 'RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
      amount: orderData.amount,
      currency: 'INR',
      name: 'Your App Name',
      order_id: orderData.id,
      handler: function (response) {
        alert('Payment successful!');
        // Verify payment on backend
      },
      prefill: {
        name: 'Anupam',
        email: 'anupam@example.com',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return <button onClick={handlePayment}>Pay with Razorpay</button>;
}
