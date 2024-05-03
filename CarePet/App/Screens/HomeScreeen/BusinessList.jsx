import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessList() {

    const [businessList, setBusinessList] = useState([]);
    useEffect(()=>{
        getBusinessList(); 
    },[])

    //Get Business List From API
    const getBusinessList=()=>{
        GlobalApi.getBusinessList().then(resp=>{
           console.log(resp);
           setBusinessList(resp?.businessLists);
        })
    }
    
  return (
    <View style={{marginTop:10}}>
      <Heading text={'Business List'} isViewAll={true}/>

      <FlatList 
        data = {businessList}
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        renderItem={({item,index})=>(
            <View style={{marginRight:10}}>
                <BusinessListItemSmall Business={item} />
            </View>
        )}
      />
    </View>
  )
}