import React from 'react';
import { View, Text, Pressable} from 'react-native';
import { styles, Theme } from '../styles/styles';
import ieltsData from '../data/ielts.json'

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.rippleContainer}>
        <Pressable android_ripple={{color: Theme.rippleColor, borderless: false}} onPress={()=> navigation.navigate('Part1')} style={styles.button}>
            <Text style={[styles.text, styles.heading]}>Part 1</Text>
            <Text style={styles.lowColorText}>{ieltsData[0].topics.length} topics with questions & answers</Text>
        </Pressable>
    </View>
    <View style={styles.rippleContainer}>
        <Pressable android_ripple={{color: Theme.rippleColor, borderless: false}} onPress={()=> navigation.navigate('Part2')} style={styles.button}>
            <Text style={[styles.text, styles.heading]}>Part 2</Text>
            <Text style={styles.lowColorText}>{ieltsData[1].topics.length} topics with questions & answers</Text>
        </Pressable>
    </View>
    <View style={styles.rippleContainer}>
        <Pressable android_ripple={{color: Theme.rippleColor, borderless: false}} onPress={()=> navigation.navigate('Part3')} style={styles.button}>
            <Text style={[styles.text, styles.heading]}>Part 3</Text>
            <Text style={styles.lowColorText}>{ieltsData[2].topics.length} topics with questions & answers</Text>
        </Pressable>
    </View>
  </View>
);

export default Home;
