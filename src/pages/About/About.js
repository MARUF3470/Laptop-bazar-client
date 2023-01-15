import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "Documentation of the application" };
    }
    render() {
        return (
            <div>
                <h1 className='text-2xl text-center font-semibold'>{this.state.favoritecolor}</h1>
                <div>
                    <div className='w-3/4 mx-auto mt-5'>
                        <li>This is a website for selling <strong>Laptops</strong></li>
                        <li>Created the react app using: <strong>npx create-react-app laptop-bazar</strong></li>
                        <li>Installed React Router Dom for routing: <strong>npm react-router-dom</strong></li>
                        <li>Installed <strong>Tailwind CSS</strong> for styling</li>
                        <li>Installed <strong>DaisyUI</strong> for tailwind components</li>
                        <li>Created <strong>Slider</strong> for Home page</li>
                        <li>Use <span className='font-bold'>Next.js</span> for backend and connect the website to the <strong>MongoDB Database</strong></li>
                        <li>Used JSX, Components, State, and Props</li>
                        <li>Created <strong>Add Product route</strong> for store product data to the database</li>
                        <li>Use <strong>Lifecycle</strong> method in <strong>Product Component</strong> and <strong>About Component</strong></li>
                        <li>Product shown on Home route and used grid method to make responsive</li>
                        <li>If user clicked on the <strong>Details Button</strong> on the product, it will take the user to the product detail page where user can the full description and price of the product</li>
                        <li>The website is <strong>100% responsive</strong> for Mobile device and Desktop</li>
                        <li>Website is hosted in <strong>Firebase</strong> and the server is hosted in <strong>Vercel</strong></li>
                        <li>Both Client side code and Server side code is stored in <strong>Github</strong></li>
                        <li>Client side code: <a className="link link-primary" href='https://github.com/MARUF3470/Laptop-bazar-client'>GitHub</a></li>
                        <li>Server site code:  <a className="link link-primary" href='https://github.com/MARUF3470/Laptop-bazar-server'>GitHub</a></li>
                        <li>To secure the API Keys used <strong>.env</strong></li>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;