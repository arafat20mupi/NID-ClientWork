const PendingOrders = () => {
  const orders = [
    {
      id: 1,
      order: "Auto Server ",
      details: "2x T-Shirts",
      price: "$40",
    },

    { id: 2, order: "Order #102", details: "1x Jacket", price: "$60" },
    { id: 3, order: "Order #103", details: "3x Shoes", price: "$90" },
  ];

  return (
    <div className="px-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Pending Orders</h1>
      <table className="min-w-full dark:bg-slate-700 bg-zinc-100 shadow-sm">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">Order</th>
            <th className="border px-4 py-2 text-left">Price</th>
            <th className="border px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="">
              <td className="border px-4 py-2">{order.order}</td>
              <td className="border px-4 py-2">{order.price}</td>
              <td className="border px-4 py-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Proccessing.....
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;
