const CanceledOrders = () => {
  const orders = [
    {
      id: 1,
      order: "Auto Server ",
      details: "2x T-Shirts",
      price: "Admin text",
    },

    { id: 2, order: "Order #102", details: "1x Jacket", price: "Admin text" },
    { id: 3, order: "Order #103", details: "3x Shoes", price: "Admin text" },
  ];

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Cancel Orders</h1>
      <table className="min-w-full dark:bg-slate-700 bg-zinc-100 shadow-sm">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">Order</th>
            <th className="border px-4 py-2 text-left">Details</th>
            <th className="border px-4 py-2 text-left">FeedBack</th>
            <th className="border px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="">
              <td className="border px-4 py-2">{order.order}</td>
              <td className="border px-4 py-2">{order.details}</td>
              <td className="border px-4 py-2">{order.price}</td>
              <td className="border px-4 py-2">
                <button className="px-4 py-2 bg-red-500 text-white rounded">
                  Canceled
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CanceledOrders;
