import React from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';
import { styles } from '../styles/styles';
import QuestionCard from '../components/QuestionCard.jsx';
import ieltsData from '../data/ielts.json';

const Topic = ({ route }) => {
  const { part, topicIndex } = route.params;

  const currentPart = ieltsData[part - 1];
  const questions = currentPart?.topics[topicIndex]?.questions || [];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={Platform.OS === 'ios' || Platform.OS === 'android'}
        overScrollMode="always"
      >
        {questions.map((q, index) => {
          const questionText = q.question || q.questionText;
          const answerText = q.answer?.text || q.answer;
          return (
            <QuestionCard
              key={index}
              question={questionText}
              bulletPoints={q.bulletPoints}
              answer={answerText}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Topic;
