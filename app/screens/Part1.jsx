import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../styles/styles'
import TopicCard from '../components/TopicCard'
import ieltsData from "../data/ielts.json"

let part1 = ieltsData[0]

export class Part1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.marginBottom} overScrollMode='always' showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          {part1.topics.map((topic, index) =>(
            <TopicCard 
              key={index}
              title={topic.name} 
              questionNum={topic.questions.length}
              topicIndex={index} 
              part={1}
              navigation={this.props.navigation}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default Part1;