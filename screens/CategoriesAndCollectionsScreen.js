import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { Categories } from "../resources/constants/strings";

import { White } from "../resources/constants/colors";

import Divider from "../components/Divider";
import SectionHeader from "../components/SectionHeader";
import VerticalMargin from "../components/VerticalMargin";

import CategoriesItem from "../components/CategoriesItem";
import SubCategoriesCard from "../components/SubCategoriesCard";

const CategoriesAndCollectionsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.list}
        keyExtractor={(item, index) => item.title}
        renderItem={(itemData) => {
          return itemData.item.title === Categories ? (
            <FlatList
              data={itemData.item.data}
              keyExtractor={(item, index) => item.title}
              ItemSeparatorComponent={Divider}
              ListHeaderComponent={() => {
                return itemData.item.data.length ? (
                  <SectionHeader title={itemData.item.title} />
                ) : (
                  <View />
                );
              }}
              ListHeaderComponentStyle={styles.header}
              renderItem={(itemData) => (
                <CategoriesItem
                  title={itemData.item.title}
                  iconName={itemData.item.iconName}
                  navigation={props.navigation}
                />
              )}
            />
          ) : (
            <FlatList
              data={itemData.item.data}
              numColumns={2}
              style={styles.container}
              columnWrapperStyle={styles.cardRow}
              keyExtractor={(item, index) => item.title}
              ItemSeparatorComponent={VerticalMargin}
              ListFooterComponent={VerticalMargin}
              ListHeaderComponent={() => {
                return itemData.item.data.length ? (
                  <SectionHeader title={itemData.item.title} />
                ) : (
                  <View />
                );
              }}
              renderItem={(itemData) => (
                <SubCategoriesCard
                  title={itemData.item.title}
                  iconName={itemData.item.iconName}
                  navigation={props.navigation}
                />
              )}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: White,
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  cardRow: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default CategoriesAndCollectionsScreen;
