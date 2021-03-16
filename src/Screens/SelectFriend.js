import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import MultiSelect from "react-native-multiple-select";
import Icons from "react-native-vector-icons/MaterialIcons";
import { createStackNavigator } from "@react-navigation/stack";

//Dummy Data for the MutiSelect
const items = [
  // name key is must. It is to show the text in front
  { id: 1, name: "Tri" },
  { id: 2, name: "Shourya" },
  { id: 3, name: "Izzy" },
  { id: 4, name: "Jason" },
  { id: 5, name: "Megan" },
  { id: 6, name: "Ana" },
  { id: 7, name: "Todd" },
  { id: 8, name: "Tri" },
  { id: 9, name: "Shourya" },
  { id: 10, name: "Izzy" },
  { id: 11, name: "Jason" },
  { id: 12, name: "Megan" },
  { id: 13, name: "Ana" },
  { id: 14, name: "Todd" },
];

const SelectFriend = ({ navigation }) => {
  // Data Source for the SearchableDropdown
  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectedItemsChange = (selectedItems) => {
    //Set Selected Items
    setSelectedItems(selectedItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Challenge")}>
          <Icons
            name={"arrow-back"}
            size={30}
            color="#333"
            style={{ marginLeft: "3%" }}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>Chose your Friends to Challenge</Text>
        <MultiSelect
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Chose Friends..."
          searchInputPlaceholderText="Search..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#B4EEB4"
          tagBorderColor="#B4EEB4"
          tagTextColor="#333"
          selectedItemTextColor="#42AA13"
          selectedItemIconColor="#42AA13"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: "#CCC" }}
          submitButtonColor="#42AA13"
          submitButtonText="Choose"ç
        />
        <TouchableOpacity onPress={() => navigation.navigate("Challenge")}>
          <View style={styles.sendButton}>
            <Text>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectFriend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  titleText: {
    marginTop: 20,
    fontSize: 24,
    justifyContent: "center",
    fontWeight: "bold",
  },
  headingText: {
    padding: 8,
  },
  sendButton: {
    margin: 15,
    width: 360,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B4EEB4",
    fontSize: 24,
    marginBottom: "4%",
  },
});
