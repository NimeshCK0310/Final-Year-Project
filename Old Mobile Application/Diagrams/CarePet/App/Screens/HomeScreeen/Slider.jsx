import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';

export default function Slider() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    GetSliders();
  }, []);

  //Get slider Form API
  const GetSliders = () => {
    GlobalApi.getSlider().then(resp => {
      console.log("resp", resp.sliders);
      setSlider(resp?.sliders || []);
    }).catch(error => {
      console.error("Error fetching sliders:", error);
    });
  };

  return (
    <View>
      <Heading text={'Recomend for you'} />
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            {/* <Text>{item.name}</Text> */}
            <Image source={{ uri: item?.image?.url }} style={Styles.sliderImage} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  
  sliderImage: {
      width:270,
      height:150,
      borderRadius:25,
      objectFit:'contain',
  }
});
