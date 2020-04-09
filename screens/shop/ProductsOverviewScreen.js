import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../../store/actions/cart";

import ProductItem from "../../components/shop/ProductItem";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Headerbutton from "../../components/UI/HeaderButton";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

  const renderProductItem = (itemData) => {
    return (
      <ProductItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onViewDetail={() => {
          props.navigation.navigate({
            routeName: "ProductsDetail",
            params: {
              productId: itemData.item.id,
              product: itemData.item,
            },
          });
        }}
        onAddToCart={() => {
          dispatch(addToCart(itemData.item));
        }}
      />
    );
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderProductItem}
    />
  );
};

ProductsOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Products",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={Headerbutton}>
        <Item
          title="addToCart"
          iconName="shopping-cart"
          onPress={() => {
            navData.navigation.navigate({ routeName: "Cart" });
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
