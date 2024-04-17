import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import Colors from '../../Utils/Colors'; // Import Colors if not already imported
import Heading from '../../Components/Heading';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import moment from 'moment';

const BookingModal = ({ businessId, hideModal }) => {

  const navigation = useNavigation();
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);  
  const [note , setNote] = useState();
  const {user}=useUser();

  useEffect(() => {
    getTime();
  }, []);



  const getTime = () => {
    const timeArray = [];

    // Generate time slots for AM
    for (let i = 8; i <= 12; i++) {
      timeArray.push({ time: `${i}:00 AM` });
      timeArray.push({ time: `${i}:30 AM` });
    }

    // Generate time slots for PM
    for (let i = 1; i <= 7; i++) {
      timeArray.push({ time: `${i}:00 PM` });
      timeArray.push({ time: `${i}:30 PM` });
    }

    setTimeList(timeArray);
  };

//   Create Booking Method

const createNewBooking = () => {
    if (!selectedTime || !selectedDate) {
      ToastAndroid.show("Please Select Date and Time", ToastAndroid.LONG);
      return;
    }
    const data = {
        userName:user?.fullName,
        userEmail:user?.primaryEmailAddress.emailAddress,
        Time:selectedTime,
        Date:moment(selectedDate).format("DD-MM-YYYY"),
        businessId:businessId,
        note:note

    }
    GlobalApi.createBooking(data).then((resp) => {
        console.log("resp", resp);
        ToastAndroid.show("Booking Created Sucessfully", ToastAndroid.LONG);
        hideModal();
    })
}

  const handleGoBack = () => {
    navigation.goBack();
    if (hideModal) hideModal();
  };

  return (
    <ScrollView>
    <KeyboardAvoidingView style={styles.container}>
      {/* Header Section */}
      <TouchableOpacity style={styles.header} onPress={handleGoBack}>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={styles.headerText}>Booking</Text>
      </TouchableOpacity>

      {/* Calendar Section */}
      <Heading text="Select Date" />
      <View style={styles.calendarContainer}>
      <CalendarPicker
  onDateChange={(date) => setSelectedDate(date)} // Set selected date
  width={340}
  minDate={new Date()}
  todayBackgroundColor={Colors.Gray}
  todayTextStyle={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}
  selectedDayColor={Colors.Green}
  selectedDayTextStyle={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}
  selectMonthTitle={{ color: 'black', fontSize: 18, fontFamily: 'outfit-bold' }}
  selectYearTitle={{ color: 'black', fontSize: 18, fontFamily: 'outfit-bold' }}
/>

      </View>

      {/* Time Select Section */}
      <View style={{ marginTop: 20 }}>
        <Heading text="Select Time Slot" />
        <FlatList
          data={timeList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.timeItem, selectedTime === item.time && styles.selectedTime]}
              onPress={() => setSelectedTime(item.time)}
            >
              <Text style={selectedTime === item.time ? styles.selectedText : styles.unSelectedText}>
                {item.time}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      {/* Note Section */}
      <View style={{paddingTop: 20}}>
        <Heading text="Your Suggestion" />
        <TextInput
  placeholder="Enter Your Suggestion"
  numberOfLines={5}
  multiline={true}
  style={styles.noteTextArea}
  onChangeText={(text) => setNote(text)} // Use onChangeText instead of onChange
/>

      </View>

      {/* Conformation Button */}
      <TouchableOpacity
      onPress={() => createNewBooking()}>
        <Text style={styles.confirmBtn}>
        Confirm & Book</Text>
      </TouchableOpacity>


    </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 25,
    fontFamily: 'outfit-medium',
    marginLeft: 10,
  },
  calendarContainer: {
    backgroundColor: Colors.Blue_Light,
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
  },
  timeItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: Colors.Gray,
    borderRadius: 99,
    marginRight: 10,
  },
  selectedTime: {
    backgroundColor: Colors.Green,
    borderColor: 'transparent',
  },
  selectedText: {
    color: Colors.White,
    fontWeight: 'bold',
  },
  unSelectedText: {
    color: Colors.PRIMARY,
  },
  noteTextArea: {
    backgroundColor: Colors.Light_Gray,
    padding: 20,
    borderRadius: 15,
    borderWidth: .5,
    textAlignVertical: 'top',
    fontFamily: 'outfit',
    fontSize: 16,
    marginTop: 10,
  },
  confirmBtn: {
    backgroundColor: '#008000',
    padding: 20,
    borderRadius: 99,
    textAlign: 'center',
    color: Colors.White,
    fontSize: 16,
    fontFamily: 'outfit-medium',
    marginTop: 20,
    elevation: 5,
  }
});

export default BookingModal;
