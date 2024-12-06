import React, { useState } from 'react';
import { StyleSheet, Dimensions, Image, SafeAreaView, FlatList, View } from 'react-native';

const {width} = Dimensions.get('window');

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

const OnBoardingItem = ({item}:any) => {
  return(
    <Image source={{uri: item.url}} style={styles.image} />
  )
}

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView>
      <FlatList 
        data={images}
        style={{maxHeight:width}}
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          setActiveIndex(event.nativeEvent.contentOffset.x/width)
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({item}) => <OnBoardingItem item={item} />}
      />
      {
        images.length > 1 ? 
          <View style={styles.dotsContainer}>
            {
              images.map((_, i) => (
                <View style={[styles.dot, {backgroundColor: i === activeIndex ? 'blue' : 'grey'}]}>

                </View>
              ))
            }
          </View>
        : null
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height: 200,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 1 
  },
});
