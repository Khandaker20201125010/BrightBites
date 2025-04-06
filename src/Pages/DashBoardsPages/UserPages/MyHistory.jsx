import usePayment from "../../../Hooks/usePayment";


const MyHistory = () => {
    const [payments, isLoading, refetch] = usePayment();

    if (isLoading) {
        return <p className="text-center text-lg">Loading...</p>;
    }
    const totalPrice = payments.reduce((sum, payment) => sum + Number(payment.price), 0);
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">
                My Payment History <span className="text-yellow-500">({payments.length})</span>
            </h2>
            <p className="text-lg mb-4 font-semibold text-green-600">
                Total Spent: ${totalPrice.toFixed(2)}
            </p>
            <div className="overflow-x-auto rounded-md">
                <table className="table table-zebra w-full">
                    {/* Table Header */}
                    <thead>
                        <tr className="bg-gray-300">
                            <th>#</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr
                                key={payment._id}
                                className="bg-white hover:shadow-xl hover:scale-95 hover:bg-cyan-50 transform transition-all duration-300"
                            >
                                <td>{index + 1}</td>
                                <td>{payment.email}</td>
                                <td className="font-bold text-red-500">${payment.price}</td>
                                <td>{new Date(payment.date).toLocaleDateString()}</td>
                                <td className="capitalize">
                                    <span className={`badge ${payment.status === "pending" ? "badge-warning" : "badge-success"}`}>
                                        {payment.status}
                                    </span>
                                </td>
                                <td className="text-orange-600">{payment.transactionId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyHistory;
