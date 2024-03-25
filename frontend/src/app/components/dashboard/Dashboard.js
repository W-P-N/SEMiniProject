import React from 'react';

function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav id="navbar" className="flex items-center justify-between bg-gray-800 p-4">
                <div id="logo">
                    <img src="/images.jpeg" alt="Pratik Enterprises" className="h-20" />
                </div>
                <ul className="flex">
                    <li className="mr-4">
                        <a href="#home" className="text-white hover:text-gray-200">Home</a>
                    </li>
                    <li className="mr-4">
                        <a href="#services-container" className="text-white hover:text-gray-200">Products</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white hover:text-gray-200">Contact Us</a>
                    </li>
                </ul>
            </nav>
            <section id="home" className="flex flex-col justify-center items-center py-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg.png')" }}>
                <h1 className="text-4xl text-chartreuse">Welcome to Pratik Enterprises</h1>
            </section>
            <hr />
            <section id="services-container" className="py-20 bg-gray-200 text-black">
                <h1 className="text-3xl text-center mb-10">Products</h1>
                <div className="flex flex-wrap justify-center">
                    {products.map((category, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            {Object.entries(category).map(([categoryName, items]) => (
                                <div key={categoryName} className="bg-white rounded-lg shadow-lg p-6">
                                    <h2 className="text-2xl mb-4">{categoryName}</h2>
                                    <button href="#" className="text-white bg-gray-600 px-4 py-2 rounded-full inline-block">View Products</button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
            <section id="contact" className="py-20 bg-gray-300">
                <h1 className="text-3xl text-center mb-10 text-black">Contact Us</h1>
                <div className="max-w-4xl mx-auto">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name:
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                Phone Number:
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message:
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Enter your message"></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <footer className="bg-gray-800 text-white py-4 text-center">
                Copyright &copy; www.PratikEnterprises.com. All rights reserved!
            </footer>
        </div>
    );
}

const products = [
    {
        "Masking Tape": [
            {
                "name": "Paper Masking Tape",
                "price": 0,
                "descrip": ""
            }
        ]
    },
    {
        "Packaging Tape": [
            {
                "name": "Wonder 555 Self Adhesive Tapes",
                "price": 0,
                "descrip": ""
            },
            {
                "name": "BOPP Packaging Tapes",
                "price": 0,
                "descrip": ""
            },
            {
                "name": "PVC Transparent Tape",
                "price": 0,
                "descrip": ""
            }
        ]
    },
    {
        "Barcode Ribbon": [
            {
                "name": "Blue Barcode Carbon Paper Ribbon",
                "price": 0,
                "descrip": ""
            }
        ]
    },
    {
        "Barcode Label": [
            {
                "name": "Printed Barcode Label",
                "price": 0,
                "descrip": ""
            },
            {
                "name": "Plain barcode label",
                "price": 0,
                "descrip": ""
            }
        ]
    },
    {
        "Barcode Label": [
            {
                "name": "Printed Barcode Label",
                "price": 0,
                "descrip": ""
            },
            {
                "name": "Plain barcode label",
                "price": 0,
                "descrip": ""
            }
        ]
    },
];

export default Dashboard;
