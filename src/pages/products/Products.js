import React from 'react';
import Product from './Product';
class Products extends React.Component {
    state = {
        products: null,
    };

    componentDidMount() {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(products => this.setState({ products }));
    }
    render() {
        return (
            <div>
                {this.state.products ? <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                    {
                        this.state.products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                    : <div className='text-center'>Loading...</div>}
            </div>
        );
    }
}
export default Products
