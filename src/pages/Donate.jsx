import { useState } from 'react';
import { 
  FaMobile, 
  FaGlobe, 
  FaCreditCard, 
  FaHandHoldingHeart, 
  FaPaypal, 
  FaUniversity,
  FaDollarSign,
  FaEuroSign
} from 'react-icons/fa';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('KES');
  const [paymentMethod, setPaymentMethod] = useState('');

  const currencies = [
    { code: 'KES', symbol: 'KES', icon: <FaMobile /> },
    { code: 'USD', symbol: '$', icon: <FaDollarSign /> },
    { code: 'EUR', symbol: '€', icon: <FaEuroSign /> },
    { code: 'GBP', symbol: '£', icon: <FaDollarSign /> }
  ];

  const predefinedAmounts = {
    KES: [
      { value: '100', label: 'KES 100' },
      { value: '500', label: 'KES 500' },
      { value: '1000', label: 'KES 1,000' },
      { value: '5000', label: 'KES 5,000' },
    ],
    USD: [
      { value: '10', label: '$10' },
      { value: '25', label: '$25' },
      { value: '50', label: '$50' },
      { value: '100', label: '$100' },
    ],
    EUR: [
      { value: '10', label: '€10' },
      { value: '25', label: '€25' },
      { value: '50', label: '€50' },
      { value: '100', label: '€100' },
    ],
    GBP: [
      { value: '10', label: '£10' },
      { value: '25', label: '£25' },
      { value: '50', label: '£50' },
      { value: '100', label: '£100' },
    ]
  };

  const paymentMethods = [
    {
      id: 'paypal',
      name: 'PayPal',
      icon: <FaPaypal className="text-2xl" />,
      international: true,
      instructions: [
        "Click the PayPal button below",
        "Log in to your PayPal account",
        "Review and confirm your donation",
        "You'll receive a confirmation email"
      ]
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: <FaCreditCard className="text-2xl" />,
      international: true,
      instructions: [
        "We accept Visa, Mastercard, and American Express",
        "Your transaction is secure and encrypted",
        "Click the button below to proceed to secure payment"
      ]
    },
    {
      id: 'wire',
      name: 'International Wire Transfer',
      icon: <FaUniversity className="text-2xl" />,
      international: true,
      instructions: [
        "Bank Name: Your International Bank",
        "SWIFT/BIC: XXXXXXXX",
        "IBAN: XXXX XXXX XXXX XXXX",
        "Account Name: Your Organization Name",
        "Bank Address: Your Bank Address",
        "Reference: DONATE-[Your Name]"
      ]
    },
    {
      id: 'mpesa',
      name: 'M-PESA',
      icon: <FaMobile className="text-2xl" />,
      international: false,
      instructions: [
        "1. Go to M-PESA on your phone",
        "2. Select Pay Bill",
        "3. Enter Business Number: XXXXXX",
        "4. Enter Account Number: DONATE",
        "5. Enter Amount",
        "6. Enter your M-PESA PIN"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <FaHandHoldingHeart className="text-4xl text-gray-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Support Our Cause
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your donation helps us provide essential support services, emergency response, 
            and advocacy for survivors of gender-based violence in Garissa County.
          </p>
        </div>

        {/* Currency Selection */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Select Currency
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {currencies.map((curr) => (
              <button
                key={curr.code}
                onClick={() => setCurrency(curr.code)}
                className={`py-3 px-4 rounded-lg border flex items-center justify-center gap-2 ${
                  currency === curr.code
                    ? 'border-gray-800 bg-gray-800 text-white'
                    : 'border-gray-300 hover:border-gray-400'
                } transition-colors`}
              >
                {curr.icon}
                {curr.code}
              </button>
            ))}
          </div>
        </div>

        {/* Amount Selection */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Select Amount
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {predefinedAmounts[currency].map((option) => (
              <button
                key={option.value}
                onClick={() => setAmount(option.value)}
                className={`py-3 px-4 rounded-lg border ${
                  amount === option.value
                    ? 'border-gray-800 bg-gray-800 text-white'
                    : 'border-gray-300 hover:border-gray-400'
                } transition-colors`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter custom amount"
              className="w-full px-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none transition-all"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              {currencies.find(c => c.code === currency)?.symbol}
            </span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Payment Method
          </h2>
          <div className="space-y-4">
            {paymentMethods
              .filter(method => currency === 'KES' ? true : method.international)
              .map((method) => (
                <div key={method.id} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full px-6 py-4 flex items-center gap-4 text-left ${
                      paymentMethod === method.id ? 'bg-gray-100' : 'hover:bg-gray-50'
                    }`}
                  >
                    {method.icon}
                    <span className="font-medium">{method.name}</span>
                  </button>
                  {paymentMethod === method.id && (
                    <div className="px-6 py-4 bg-white border-t">
                      <ul className="space-y-2 text-gray-600">
                        {method.instructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ul>
                      {/* Add actual payment buttons/forms here */}
                    </div>
                  )}
                </div>
            ))}
          </div>
        </div>

        {/* Tax & Support Information */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>All donations are tax-deductible. A receipt will be provided for your records.</p>
          <p className="mt-2">
            For international donations support, please contact us at{' '}
            <a href="mailto:donations@example.com" className="text-gray-600 hover:text-gray-800">
              donations@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate; 