import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Heading from '../../Components/Heading';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessList() {
    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        getBusinessList(); 
    }, []);

    // Get Business List From API
    const getBusinessList = () => {
        GlobalApi.getBusinessList().then(resp => {
            console.log(resp);
            setBusinessList(resp?.businessLists);
        });
    };

    return (
        <View style={styles.container}>
            <Heading text={'Business List'} isViewAll={true}/>

            <FlatList 
                data={businessList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <View style={styles.businessItem}>
                        <BusinessListItemSmall Business={item} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    businessItem: {
        marginRight: 10,
    },
});
