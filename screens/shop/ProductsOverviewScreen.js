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
import HeaderButton from "../../components/shop/HeaderButton";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

  const renderProductItem = (itemData) => {
    // const toggleAddToCart = () => {
    //   dispatch(addToCart(itemData.item));
    // };

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
        onAddToCart={() => console.log("add to cart pressed")}
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

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
  headerRight: () => {
    return (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="To Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            console.log("cart button pressed");
          }}
        />
      </HeaderButtons>
    );
  },
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
