import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../styles/styles'
import TopicCard from '../components/TopicCard'
import ieltsData from "../data/ielts.json"

let part2 = ieltsData[1]

export class Part2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.marginBottom} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          {part2.topics.map((topic, index) =>(
            <TopicCard key={index} 
              title={topic.name} 
              questionNum={topic.questions.length}
              topicIndex={index} 
              part={2}
              navigation={this.props.navigation}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default Part2