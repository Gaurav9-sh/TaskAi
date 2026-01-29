import React from 'react'

const Plan = () => {
  return (
    <div className="max-w-2xl mx-auto z-20 my-30">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="text-gray-500 mt-2">Basic features</p>
          <p className="text-2xl font-bold mt-4">₹0</p>
        </div>

        <div className="border p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="text-gray-500 mt-2">Advanced features</p>
          <p className="text-2xl font-bold mt-4">₹499 / month</p>
        </div>
      </div>
    </div>
  )
}

export default Plan
