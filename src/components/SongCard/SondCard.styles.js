import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, //width ve height'ın yarısını girersek tam yuvarlak olur
  },
  inner_container: {
    flex: 1, //içinde bulunduğu yerde kaplayabildiği kadar yer kaplar
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 27,
  },
  info_container: {
    flexDirection: "row",
    flex: 1,
    alignItems: 'center',
  },
  year: {
    marginLeft: 10,
    fontSize: 12,
    color: "gray",
    fontWeight: "bold",
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: "red",
    padding: 3,
    borderRadius: 5,
  },
  soldout_title: {
    color: "red",
    fontSize: 12,
  },
  content_container: {
    flexDirection: "row",
  },
});
