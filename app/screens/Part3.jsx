import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../styles/styles'
import TopicCard from '../components/TopicCard'
import ieltsData from "../data/ielts.json"

let part3 = ieltsData[2]

export class Part3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.marginBottom} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          {part3.topics.map((topic, index) =>(
            <TopicCard key={index} 
              title={topic.name} 
              questionNum={topic.questions.length}
              topicIndex={index} 
              part={3}
              navigation={this.props.navigation}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default Part3