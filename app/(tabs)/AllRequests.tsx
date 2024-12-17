import { FlatList, Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import SingleRequest from "@/components/SingleRequest";
const mockdata = [
  {
    username: "john_doe",
    profile: "https://example.com/profiles/john_doe",
    des: "Looking for help with moving furniture.",
    location: { city: "New York", state: "NY", lat: 40.7128, long: -74.006 },
    media: "https://example.com/media/furniture.jpg",
    emergencytype: "Relocation Assistance",
    moneyoffered: "$50",
    keywords: ["moving", "furniture", "help"],
  },
  {
    username: "jane_smith",
    profile: "https://example.com/profiles/jane_smith",
    des: "Need a babysitter for Saturday night.",
    location: {
      city: "San Francisco",
      state: "CA",
      lat: 37.7749,
      long: -122.4194,
    },
    media: "https://example.com/media/babysitter.jpg",
    emergencytype: "Child Care",
    moneyoffered: "$100",
    keywords: ["babysitting", "childcare", "urgent"],
  },
  {
    username: "mike_tech",
    profile: "https://example.com/profiles/mike_tech",
    des: "Laptop repair needed ASAP.",
    location: { city: "Austin", state: "TX", lat: 30.2672, long: -97.7431 },
    media: "https://example.com/media/laptop_repair.jpg",
    emergencytype: "Technical Assistance",
    moneyoffered: "$75",
    keywords: ["repair", "laptop", "tech"],
  },
  {
    username: "emily_artist",
    profile: "https://example.com/profiles/emily_artist",
    des: "Looking for a photographer for an art event.",
    location: {
      city: "Los Angeles",
      state: "CA",
      lat: 34.0522,
      long: -118.2437,
    },
    media: "https://example.com/media/photographer.jpg",
    emergencytype: "Event Assistance",
    moneyoffered: "$150",
    keywords: ["photography", "event", "art"],
  },
  {
    username: "chef_mark",
    profile: "https://example.com/profiles/chef_mark",
    des: "Need a chef for a small private dinner party.",
    location: { city: "Chicago", state: "IL", lat: 41.8781, long: -87.6298 },
    media: "https://example.com/media/chef.jpg",
    emergencytype: "Catering",
    moneyoffered: "$200",
    keywords: ["chef", "cooking", "dinner"],
  },
  {
    username: "sara_runner",
    profile: "https://example.com/profiles/sara_runner",
    des: "Urgent: Need a running partner for marathon training.",
    location: { city: "Seattle", state: "WA", lat: 47.6062, long: -122.3321 },
    media: "https://example.com/media/running.jpg",
    emergencytype: "Fitness Partner",
    moneyoffered: "$30",
    keywords: ["running", "marathon", "partner"],
  },
  {
    username: "tom_gardener",
    profile: "https://example.com/profiles/tom_gardener",
    des: "Help needed with backyard gardening this weekend.",
    location: { city: "Denver", state: "CO", lat: 39.7392, long: -104.9903 },
    media: "https://example.com/media/gardening.jpg",
    emergencytype: "Gardening Assistance",
    moneyoffered: "$40",
    keywords: ["gardening", "outdoors", "help"],
  },
  {
    username: "anna_writer",
    profile: "https://example.com/profiles/anna_writer",
    des: "Seeking an editor for a short story.",
    location: { city: "Boston", state: "MA", lat: 42.3601, long: -71.0589 },
    media: "https://example.com/media/writing.jpg",
    emergencytype: "Editorial Assistance",
    moneyoffered: "$60",
    keywords: ["editing", "writing", "story"],
  },
  {
    username: "dave_driver",
    profile: "https://example.com/profiles/dave_driver",
    des: "Need a driver for airport drop-off early morning.",
    location: { city: "Houston", state: "TX", lat: 29.7604, long: -95.3698 },
    media: "https://example.com/media/driver.jpg",
    emergencytype: "Transportation",
    moneyoffered: "$35",
    keywords: ["driver", "transport", "airport"],
  },
  {
    username: "lisa_teacher",
    profile: "https://example.com/profiles/lisa_teacher",
    des: "Looking for a math tutor for high school student.",
    location: {
      city: "Philadelphia",
      state: "PA",
      lat: 39.9526,
      long: -75.1652,
    },
    media: "https://example.com/media/tutor.jpg",
    emergencytype: "Educational Assistance",
    moneyoffered: "$50",
    keywords: ["tutoring", "math", "education"],
  },
];

const AllRequests:React.FC = () => {
  return (
    <View style={styles.AllRequests}>
      <FlatList
        data={mockdata}
        keyExtractor={(item) => item.username}
        renderItem={({ item }) => (
          <SingleRequest
            username={item.username}
            profile={item.profile}
            des={item.des}
            location={item.location}
            media={item.media}
            emergencytype={item.emergencytype}
            moneyoffered={item.moneyoffered}
            keywords={item.keywords}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  AllRequests: {
    flex: 1,
    backgroundColor: "blue",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,

    width: "100%",
  },
});
export default AllRequests;
