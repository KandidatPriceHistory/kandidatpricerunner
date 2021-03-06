import React, { Component } from 'react';
import HeaderHomePage from './Header/HeaderHomePage';
import ProductList from './Product/ProductList';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/index';


class Home extends Component {
  componentWillMount() {
    this.props.dispatch(fetchProducts());
  }
   render() {
     if (this.props.productsFetched){
      return (
         <div>
              <HeaderHomePage />
              <ProductList products={this.props.products} />
              <Footer />
         </div>
      )
    }else {
      return(
        <h2> Laddar ... </h2>
      )
    }
   }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    fetching: state.fetching,
    productsFetched: state.productsFetched,
  }
}

export default connect (mapStateToProps)(Home);
