import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import Colors from '../../Utils/Colors';
import PageHeading from '../../Components/PageHeading';

const BusinessListByCategoryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params || {};
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      getBusinessListByCategory(category);
    }
  }, [category]);

  const getBusinessListByCategory = (category) => {
    setLoading(true);
    GlobalApi.getBusinessListByCategory(category)
      .then((resp) => {
        setBusinessList(resp.businessLists || []);
      })
      .catch((error) => {
        console.error('Error fetching business list by category:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <PageHeading title={category} />

      {loading ? (
        <ActivityIndicator style={styles.loadingIndicator} size="large" color={Colors.Blue_Light} />
      ) : businessList.length > 0 ? (
        <FlatList
          data={businessList}
          style={{ marginTop: 15 }}
          renderItem={({ item }) => <BusinessListItem business={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={styles.noBusinessText}>No Businesses Found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    padding: 20,
    paddingTop: 30,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBusinessText: {
    fontFamily: 'outfit-medium',
    color: Colors.Gray,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BusinessListByCategoryScreen;


// import { View, Text } from 'react-native'
// import React, { useEffect } from 'react'
// import { useRoute } from '@react-navigation/native'


// export default function BusinessListByCategoryScreen() {
//   const param=useRoute().params;
//   useEffect(() => {
//     console.log("Category",param.category);
//   })
//   return (
//     <View>
//       <Text>BusinessListByCategoryScreen</Text>
//     </View>
//   )
// }
