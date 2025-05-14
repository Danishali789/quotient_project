// components/RecentOrders.tsx
import Image from "next/image";
import IphoneIcon from "@/assets/staticIcon/CoopersExtraStout.png";
import AmazonLogo from "@/assets/staticIcon/amazonLogo.png";

const orders = [
  {
    id: "275936",
    quantity: "x1",
    product: "iPhone 15 pro max",
     productImage: IphoneIcon,
    customer: "Gabriella Golden",
    channel: "ebay",
    channelIcon: AmazonLogo,
    total: "$400.00",
    deliveryDate: "Today",
  },
  {
    id: "415368",
    quantity: "x4",
    product: "White Denim Tshirt M...",
    productImage: IphoneIcon,
    customer: "Harris Santana",
    channel: "walmart",
    channelIcon: AmazonLogo,
    total: "$151.00",
    deliveryDate: "Today",
  },
  {
    id: "275063",
    quantity: "x2",
    product: "David Beckham classic...",
     productImage: IphoneIcon,
    customer: "Lilia Ponce",
    channel: "facebook",
    channelIcon: AmazonLogo,
    total: "$167.00",
    deliveryDate: "Tomorrow",
  },
  {
    id: "274778",
    quantity: "x3",
    product: "Samsung i-20 series...",
    productImage: IphoneIcon,
    customer: "Rehan Chase",
    channel: "amazon",
    channelIcon: AmazonLogo,
    total: "$262.00",
    deliveryDate: "Tomorrow",
  },
  {
    id: "638032",
    quantity: "x5",
    product: "Nykaa Red Lipstick",
     productImage: IphoneIcon,
    customer: "Maxim Bray",
    channel: "etsy",
    channelIcon: AmazonLogo,
    total: "$319.00",
    deliveryDate: "05/01/2023",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-light-gray dark:bg-dark-blue rounded-xl shadow overflow-x-auto">
      <div className="py-2 pl-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Orders</h2>
      </div>
      <div>
       <table className="w-full min-w-[767px] overflow-scroll  text-gray-700 dark:text-white">
        <thead className="bg-white dark:bg-dark-blue">
          <tr className="text-left text-medium-12 text-gray-500 dark:text-white border-b border-gray-100 dark:border-white-20 ">
            <th className="py-2 pl-4 text-medium-12 whitespace-nowrap">ORDER ID</th>
            <th className="py-2 pl-4 text-medium-12 whitespace-nowrap">PRODUCTS</th>
            <th className="py-2 pl-4 text-medium-12 whitespace-nowrap">CUSTOMER</th>
            <th className="py-2 pl-4 text-medium-12 whitespace-nowrap">CHANNEL</th>
            <th className="py-2 pl-4 text-medium-12 whitespace-nowrap">TOTAL</th>
            <th className="py-2 pl-4 text-medium-12 whitespace-nowrap">DELIVERY DATE</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i} className="border-b border-gray-100 dark:border-white-20">
              <td className="py-3 pl-4 text-regular-14">{order.id}</td>
              <td className="py-3 flex items-center space-x-2">
                <div className="text-xs text-gray-400 dark:text-white">{order.quantity}</div>
                <Image
                  src={order.productImage}
                  alt={order.product}
                  width={28}
                  height={28}
                  className="rounded"
                />
                  <div className="text-regular-14">{order.product}</div>
              </td>
              <td className="py-3 text-regular-14">{order.customer}</td>
              <td className="py-3 text-regular-14">
                <div className="flex items-center space-x-1">
                  <Image
                    src={order.channelIcon}
                    alt={order.channel}
                    width={24}
                    height={24}
                  />
                </div>
              </td>
              <td className="py-3 text-regular-14">{order.total}</td>
              <td className="py-3 pr-4 text-regular-14">{order.deliveryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      

      <div className="text-center mt-4">
        <a href="#" className="text-sm text-purple-600 hover:underline">
          View 256 more orders
        </a>
      </div>
    </div>
  );
}
