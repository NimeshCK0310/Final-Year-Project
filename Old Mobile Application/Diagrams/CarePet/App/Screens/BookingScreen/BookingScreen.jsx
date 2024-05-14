import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeading from '../../Components/PageHeading'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import BusinessListItem from '../BusinessListByCategoryScreen/BusinessListItem'

export default function BookingScreen() {

  const {user} = useUser();
  const[BookingList,setBookingList]=useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    user&&getUserBooking();
  },[user])


  // Get User Bookings
 const getUserBooking=()=>{
  setLoading(true);
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp=>{
      setBookingList(resp.bookings)
      setLoading(false);
    })
  }
  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:25,fontFamily:'outfit-bold'}}>My Bookings</Text>

      <View>
        <FlatList
          data={BookingList}
          onRefresh={()=>getUserBooking()}
          refreshing={loading}
          renderItem={({item,index})=>(
            <BusinessListItem business={item?.businessList}
            booking={item}
             
            />
          )}
        />
      </View>
    </View>
  )
}