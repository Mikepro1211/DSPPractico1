import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={true}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Mejores 5 juegos de tu pais',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'God of war - Ragnarok',
        uri: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png',
      },
      {
        key: '2',
        text: 'Fifa 23',
        uri: 'https://cdn.akamai.steamstatic.com/steam/apps/1811260/capsule_616x353.jpg?t=1675351814',
      },

      {
        key: '3',
        text: 'Call of duty ModerWarfare 2 ',
        uri: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/MWII-S02-WZ2-POIS-TOUT.jpg',
      },
      {
        key: '4',
        text: 'Fornite',
        uri: 'https://preview.redd.it/this-is-fortnite-in-2023-v0-69z3xdykhi9a1.jpg?auto=webp&s=1fd37ab9740d90efd946f2274af675d13e1a05d9',
      },
      {
        key: '5',
        text: 'ghost of tsushima',
        uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Ghost_of_Tsushima.jpg/220px-Ghost_of_Tsushima.jpg',
      },
    ],
  },
  {
    title: 'Inolvidables',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Grand theft auto',
        uri: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png',
      },
      {
        key: '2',
        text: 'The last of us 2',
        uri: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png',
      },

      {
        key: '3',
        text: 'Horizon ',
        uri: 'https://image.api.playstation.com/vulcan/img/rnd/202011/1018/9erXiwu0ozgKGPIUVTuy2siN.png',
      },
      {
        key: '4',
        text: 'SpiderMan',
        uri: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png',
      },
      {
        key: '5',
        text: 'Death Stranding',
        uri: 'https://image.api.playstation.com/vulcan/ap/rnd/202106/2214/7aFAQ28D5avzogf7TFg11ryH.png',
      },
    ],
  },
  
  
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'black',
    marginTop: 5,
    fontSize:15,
  },
});