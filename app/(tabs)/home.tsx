import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Dimensions, Image, SafeAreaView, FlatList, View, TouchableOpacity, Text } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  {
    id: 1,
    url: 'https://picsum.photos/id/1/500/500'
  },
  {
    id: 2,
    url: 'https://picsum.photos/id/2/500/500'
  },
  {
    id: 3,
    url: 'https://picsum.photos/id/3/500/500'
  },
  {
    id: 4,
    url: 'https://picsum.photos/id/4/500/500'
  }
]

const OnBoardingItem = ({ item }: any) => {
  return (
    <Image source={{ uri: item.url }} style={styles.image} />
  )
}

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='bg-white flex flex-col justify-start items-start'>
        <FlatList
          data={images}
          className='relative'
          pagingEnabled
          horizontal
          scrollEventThrottle={16}
          onMomentumScrollEnd={(event) => {
            setActiveIndex(event.nativeEvent.contentOffset.x / width)
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item?.id)}
          renderItem={({ item }) => <OnBoardingItem item={item} />}
        />

        <View className='flex flex-row justify-center absolute bottom-5 left-0 right-0'>
          {
            images.map((item, index) => (
              <View
                key={item.id}
                className={` h-2 rounded-full mx-1  ${index === activeIndex ? 'w-5 bg-[#5F60B9]' : 'w-2 bg-white'}`}></View>
            ))
          }
        </View>

        <View className='w-full flex-1 flex pr-3 items-end absolute top-3 right-0'>
          <TouchableOpacity className='bg-white rounded-full w-12 h-12 flex justify-center items-center'>
            <Ionicons name="notifications-outline" size={23} color="#5F60B9" />
          </TouchableOpacity>
        </View>
      </View>

      <View className='flex flex-col w-full gap-5 p-5'>
        <View className='flex flex-row items-center justify-between w-full'>
          <Text className='text-lg font-bold'>Category</Text>
          <TouchableOpacity>
            <Text className='text-lg font-normal text-gray-500'>View All</Text>
          </TouchableOpacity>
        </View>
        <View className='flex flex-col w-full gap-3'>

          <View className='w-full flex flex-row gap-3 items-center justify-between'>

            <View className='bg-gray-200 flex-1 justify-between items-center h-36 rounded-xl border border-gray-300'>
              <View className='w-full flex-1 flex justify-center items-center'>
                <Image source={require('../../assets/plumber.png')} className='w-12 h-12 ' />
              </View>
              <Text className='bg-white rounded-b-xl p-2 font-medium w-full text-center'>Plumber</Text>
            </View>

            <View className='bg-gray-200 flex-1 justify-between items-center h-36 rounded-xl border border-gray-300'>
              <View className='w-full flex-1 flex justify-center items-center'>
                <Image source={require('../../assets/carpenter.png')} className='w-12 h-12 ' />
              </View>
              <Text className='bg-white rounded-b-xl p-2 font-medium w-full text-center'>Carpenter</Text>
            </View>

            <View className='bg-gray-200 flex-1 justify-between items-center h-36 rounded-xl border border-gray-300'>
              <View className='w-full flex-1 flex justify-center items-center'>
                <Image source={require('../../assets/painter.png')} className='w-12 h-12 ' />
              </View>
              <Text className='bg-white rounded-b-xl p-2 font-medium w-full text-center'>Painting</Text>
            </View>

          </View>

          <View className='w-full flex flex-row gap-3 items-center justify-between'>

            <View className='bg-gray-200 flex-1 justify-between items-center h-36 rounded-xl border border-gray-300'>
              <View className='w-full flex-1 flex justify-center items-center'>
                <Image source={require('../../assets/salon.png')} className='w-12 h-12 ' />
              </View>
              <Text className='bg-white rounded-b-xl p-2 font-medium w-full text-center'>Salon</Text>
            </View>

            <View className='bg-gray-200 flex-1 justify-between items-center h-36 rounded-xl border border-gray-300'>
              <View className='w-full flex-1 flex justify-center items-center'>
                <Image source={require('../../assets/smart-home.png')} className='w-12 h-12 ' />
              </View>
              <Text className='bg-white rounded-b-xl p-2 font-medium w-full text-center'>Smart Home</Text>
            </View>

            <View className='bg-gray-200 flex-1 justify-between items-center h-36 rounded-xl border border-gray-300'>
              <View className='w-full flex-1 flex justify-center items-center'>
                <Image source={require('../../assets/ac-repair.png')} className='w-12 h-12 ' />
              </View>
              <Text className='bg-white rounded-b-xl p-2 font-medium w-full text-center'>AC Repair</Text>
            </View>

          </View>

        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width,
    height: 230,
  }
});
