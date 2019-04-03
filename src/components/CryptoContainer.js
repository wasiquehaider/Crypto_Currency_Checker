import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import { FetchCoinData } from "../actions/FetchCoinData";
import CoinCard from "./CoinCard";

class CryptoContainer extends Component {
  componentWillMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    return crypto.data.map(coin => (
      <CoinCard
        key={coin.name}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.quote.USD.price}
        percent_change_24h={coin.quote.USD.percent_change_24h}
        percent_change_7d={coin.quote.USD.percent_change_7d}
      />
    ));
  }

  render() {
    const { crypto } = this.props;
    const { contentContainer } = styles;

    if (crypto.isFetching) {
      return (
        // <View>
        //   <Spinner
        //     visible={crypto.isFetching}
        //     textContent={"Loading..."}
        //     textStyle={{ color: "#253145" }}
        //     animation="fade"
        //   />
        // </View>
        <ActivityIndicator size="large" />
      );
    }

    return (
      <ScrollView contentContainerStyle={contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    );
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55
  }
};

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(
  mapStateToProps,
  { FetchCoinData }
)(CryptoContainer);