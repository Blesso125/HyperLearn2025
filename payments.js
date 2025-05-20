const API_BASE_URL = 'https://your-live-api-url.com';

document.getElementById('payment-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;

    const response = await fetch(`${API_BASE_URL}/create-payment-intent`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ amount, currency })
    });
    const data = await response.json();
    alert('Client secret: ' + data.clientSecret);
});

document.getElementById('receive-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const payment_intent_id = document.getElementById('payment_intent_id').value;

    const response = await fetch(`${API_BASE_URL}/receive-payment`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ payment_intent_id })
    });
    const data = await response.json();
    alert('Payment status: ' + data.status);
});
