import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles, Theme } from '../styles/styles';

const QuestionCard = ({ question, bulletPoints, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <Pressable 
        style={styles.button} 
        onPress={() => setShowAnswer(!showAnswer)} 
        android_ripple={{ color: Theme.rippleColor }}
      >
        {/* Question */}
        <Text style={[styles.text, styles.lowFontSize]}>{question}</Text>

        {/* Bullet Points */}
        {bulletPoints?.length > 0 && (
          <View style={styles.bulletList}>
            {bulletPoints.map((point, index) => (
              <Text key={index} style={styles.bulletPoint}>• {point}</Text>
            ))}
          </View>
        )}

        {/* Answer */}
        {showAnswer && answer && (
          <View style={styles.answerBox}>
            <Text style={styles.answer}>{answer}</Text>
          </View>
        )}

      </Pressable>
    </View>
  );
};

export default QuestionCard;