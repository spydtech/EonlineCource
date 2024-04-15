import React from 'react';

function PaymentHistory() {
  const purchasesData = []; // Placeholder for demonstration

  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 p-10">
        {purchasesData.length > 0 ? (
          <ul className="flex flex-wrap -mb-px pb-10">
            {purchasesData.map((purchase, index) => (
              <li key={index} className="mr-2">
                {/* Render each purchase */}
                <p>{purchase.details}</p>
                {/* Additional details or links can be added here */}
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>No purchases found.</p>
        )}
      </div>
    </div>
  );
}

export default PaymentHistory;
