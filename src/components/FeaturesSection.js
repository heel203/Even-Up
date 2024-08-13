import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-[#03396c] text-center mb-12">Features</h3>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-[#b3cde0] p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Easy Expense Tracking</h4>
              <p>Track group expenses effortlessly, keeping everyone in the loop.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-[#b3cde0] p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Simplified Payments</h4>
              <p>Make payments simple with integrated payment services.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-[#b3cde0] p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Transparent Balances</h4>
              <p>Always know who owes what with transparent balances.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-[#b3cde0] p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Automated Reminders</h4>
              <p>Send automatic reminders to settle debts, keeping everyone on track.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-[#b3cde0] p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Multi-Currency Support</h4>
              <p>Handle expenses in multiple currencies for international trips.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-[#b3cde0] p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Detailed Reports</h4>
              <p>Generate detailed reports to analyze spending patterns and history.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
