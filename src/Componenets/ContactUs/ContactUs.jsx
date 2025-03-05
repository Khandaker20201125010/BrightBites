import bg from "../../assets/images/bgblue.png";

const ContactUs = () => {
    return (
        <div
            className="mt-40 bg-cover bg-center bg-no-repeat h-[530px] flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-10"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Header */}
            <h1 className="text-cyan-500 font-bold text-lg">Contact Us</h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Stay connected with us</h2>

            {/* Contact Form */}
            <form className="mt-6 w-full max-w-lg">
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 rounded-md bg-white text-gray-800 focus:outline-none mb-4"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-4 rounded-md bg-white text-gray-800 focus:outline-none mb-4"
                />
                <textarea
                    placeholder="Your message"
                    rows="4"
                    className="w-full p-4 rounded-md bg-white text-gray-800 focus:outline-none mb-4"
                ></textarea>

                <button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
