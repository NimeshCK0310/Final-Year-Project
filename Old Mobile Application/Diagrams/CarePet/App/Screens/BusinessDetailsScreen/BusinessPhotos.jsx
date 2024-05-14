import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'
import { Ionicons } from '@expo/vector-icons';

export default function BusinessPhotos(business) {
  return (
    <View>
      <Heading text={'Photos'} />

    <FlatList
    data={business.image}
    numColumns={2}
    renderItem={({item}) => (
       <Image  source={{ uri: item.url }}
       style={{width: '100%',flex: 1,
       borderRadius: 5,
       margin: 5,
        height: 120}} />
    )}
    />

    </View>
  )
}