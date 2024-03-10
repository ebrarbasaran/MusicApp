import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import music_data from "./src/music-data.json";
import SongCard from "./src/components/SongCard";
import SearchBar from "./src/components/SearchBar";

const App = () => {
  const [list, setList] = useState(music_data);
  const [checkboxState, setCheckboxState] = useState(false);

  const renderSong = ({ item }) => <SongCard song={item} />;

  const renderSeparator = () => <View style={styles.separator}></View>;

  const handleSearch = (text) => {
    const filteredList = music_data.filter((song) => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLocaleLowerCase();
      const currentArtist = song.artist.toLocaleLowerCase();

      return (
        currentTitle.indexOf(searchedText) > -1 ||
        currentArtist.indexOf(searchedText) > -1
      );
    });

    setList(filteredList);
  };

  const showNotSoldOut = (checkboxState) => {
    setCheckboxState(checkboxState);
    checkboxState
    ? setList(list.filter(song => song.isSoldOut == false))
    : setList(music_data)
  } 

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        onSearch={handleSearch} //onSearch propertysi handleSearch fonksiyonunu taşıyor
      />
      <BouncyCheckbox
        style ={styles.checkbox}       
        size={20}
        fillColor="red"
        unfillColor="#FFFFFF"
        text="Tükenenleri gösterme"
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2}}
        textStyle={{ textDecorationLine: "none" , fontSize: 15}}
        onPress={showNotSoldOut}
      />
      <FlatList
        keyExtractor={(item) => item.id} //id property'si yerine başka isimlendirme olsaydı hata verirdi
        data={list}
        renderItem={renderSong} //20 data göstereceksen 20 kere fonksiyon oluşturur
        //bu performans kaybının önüne geçmek için fonksiyon tanımlanmalıdır
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  separator: {
    borderWidth: 0.5,
    backgroundColor: "#e0dcdc",
  },
  checkbox: {
    marginLeft: 10,
  },
});
