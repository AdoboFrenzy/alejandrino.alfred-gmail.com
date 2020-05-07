import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  Button,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../../store/actions/cart";
import { fetchProducts } from "../../store/actions/products";

import ProductItem from "../../components/shop/ProductItem";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Headerbutton from "../../components/UI/HeaderButton";

import Colors from "../../constants/Colors";

const ProductsOverviewScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const products = useSelector((state) => state.products.availableProducts);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      await dispatch(fetchProducts());
      setIsLoading(false);
    };

    loadProducts();
  }, [dispatch]);

  const dispatch = useDispatch();

  const renderProductItem = (itemData) => {
    const selectProduct = () => {
      props.navigation.navigate({
        routeName: "ProductsDetail",
        params: {
          productId: itemData.item.id,
          product: itemData.item,
        },
      });
    };

    return (
      <ProductItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onSelect={selectProduct}
      >
        <Button
          color={Colors.primary}
          title="View Details"
          onPress={selectProduct}
        />
        <Button
          color={Colors.primary}
          title="To Cart"
          onPress={() => {
            dispatch(addToCart(itemData.item));
          }}
        />
      </ProductItem>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No Products Listed.</Text>
        <Text>Add some in your Admin page!</Text>
      </View>
    );
  }

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
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={Headerbutton}>
        <Item
          title="menu"
          iconName="bars"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
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

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductsOverviewScreen;
