import { Text, Link } from '~/components';

const Myorder = ({ orders }) => {
    console.log("🚀 ~ file: Myorder.jsx:5 ~ Myorder ~ ̥:", orders);

     return (
        <section>
            <div className="text-center sm-only:mt-12 sm-only:hidden">
                <p className="text-zinc-400 text-xs "> Home | My Order</p>
                <h1 className="lg:text-4xl sm:text-2lg sm:font-medium">My Order</h1>
            </div>

            <div>
                <p className="lg:font-semibold  lg:border-b-2 lg:pb-3 lg:block hidden">My Order</p>
                <div>
                    {orders && orders.map((item) => {
                        const [legacyOrderId, key] = item.id.split('/').pop().split('?');

                        return (
                            <div key={item.id}>

                                {/* ====== start mobile view ======= */}

                                <div className="ml-4">
                                    <div className="lg:hidden sm:block flex flex-col space-y-2 ">
                                        <div className="text-sm">
                                            <div className="text-zinc-400">Order number</div>
                                            <div className="font-semibold">{item.orderNumber}</div>
                                        </div>
                                        <div className="text-sm">
                                            <div className="text-zinc-400">Order placed</div>
                                            <div className="font-semibold">{item.processedAt}</div>
                                        </div>
                                        <div className="text-sm">
                                            <div className="text-zinc-400">Total</div>
                                            <div className="font-semibold">{item.currentTotalPrice.amount}</div>
                                        </div>
                                    </div>

                                    <div className="lg:hidden sm:block mt-3 text-sm ">
                                        <Link
                                            className="bg-sky-600 text-white py-3.5 px-9 inline-block"
                                            to={`/account/orders/${legacyOrderId}?${key}`}
                                            prefetch="intent"
                                        >
                                            <Text >
                                                Order Detail
                                            </Text>
                                        </Link>
                                    </div>
                                    {/* <div className="lg:hidden sm:block mt-3 text-sm ">
                                        <button type="button" className="bg-sky-600  text-white py-3.5 px-9">Order Detail</button>
                                    </div> */}
                                </div>

                                {/* ========  END mobile view =========== */}

                                {/* ---------start Desktop view----------- */}

                                <div className="sm:hidden lg:block">
                                    <div className="flex lg:border-b-2 ">
                                        <table className="lg:my-4">
                                            <tbody>
                                                <tr className="text-zinc-400 lg:text-sm lg:w-52">
                                                    <td className="lg:pr-32 lg-only:pr-8">Order number</td>
                                                    <td className="lg:pr-32 lg-only:pr-8">Order placed</td>
                                                    <td className="lg:pr-32 lg-only:pr-8">Items</td>
                                                    <td className="lg:pr-32 lg-only:pr-8">Total</td>
                                                </tr>
                                                <tr className="lg:text-sm lg:font-semibold">
                                                    <td>{item.orderNumber}</td>
                                                    <td>{item.processedAt}</td>
                                                    <td>{item.lineItems.edges.length}</td>
                                                    <td>{item.currentTotalPrice.amount}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="ml-auto my-auto">
                                            {/* <button
                                                type="button"
                                                className="bg-sky-600 text-white px-6 py-2 text-sm"
                                                onClick={handleOrderDetailClick}
                                            >
                                                <Text>Order Detail</Text>
                                            </button> */}

                                            <Link
                                                className="bg-sky-600 text-white px-6 py-2 text-sm"
                                                to={`/account/orders/${legacyOrderId}?${key}`}
                                                prefetch="intent"
                                            >
                                                <Text>Order Detail</Text>
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                                {/* ========  END Desktop view ========== */}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Myorder;
