import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles, Theme } from '../styles/styles';

const TopicCard = ({ title, questionNum, topicIndex, part, navigation }) => {
  return (
    <View style={styles.cardContainer}>
      <Pressable onPress={()=> navigation.navigate('Topic', {part, topicIndex, title})} style={styles.button} android_ripple={{color: Theme.rippleColor, borderless: false}}>
          <View >
            <View style={styles.left}>
                <Text style={[styles.text, styles.lowFontSize]}>{title}</Text>
                <Text style={[styles.lowColorText, styles.lowMargin]}>{questionNum} questions with answers</Text>
            </View>
            {/* npx expo export --platform web */}
            <View style={styles.right}>
                <Text style={styles.arrowRight}>{">"}</Text>
            </View>
          </View>
      </Pressable>
    </View>
  );
};

export default TopicCard;