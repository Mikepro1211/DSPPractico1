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
    title: 'Extoy en xbox',
    data: [
      {
        key: '1',
        text: 'Cyber punk',
        uri: 'https://store-images.s-microsoft.com/image/apps.47379.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.89bb995b-b066-4a53-9fe4-0260ce07e894',
      },
      {
        key: '2',
        text: 'Halo',
        uri: 'https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png  ',
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
        text: 'Forza',
        uri: 'https://store-images.s-microsoft.com/image/apps.7859.14506879174941978.138d3eab-0b06-443b-a252-c99592521394.33a348aa-892d-49b8-9ef2-6ff06c22cf96?w=180&h=300&q=90&mode=scale',
      },
    ],
  },
  {
    title: 'Inolvidables',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Gear of war 2',
        uri: 'https://static.wikia.nocookie.net/gearsofwar/images/8/87/Gears_of_War_2_Portada.png/revision/latest?cb=20160706021554&path-prefix=es',
      },
      {
        key: '2',
        text: 'Gear of war 3',
        uri: 'https://store-images.s-microsoft.com/image/apps.11650.13510798887356280.235dc311-b50e-403c-af16-ceffcc2c2399.99b85445-285f-4bc9-a0ec-53e5c36b1ae3',
      },

      {
        key: '3',
        text: 'Like a dragon',
        uri: 'https://store-images.s-microsoft.com/image/apps.35079.13907364270297288.93ae2091-c674-490e-a0e6-ab8561d65104.1d8ee989-0d96-41ae-8b4a-0b85a362063f?w=280',
      },
      {
        key: '4',
        text: 'Hogwart',
        uri: 'https://store-images.s-microsoft.com/image/apps.32479.13691913205617753.f6e26030-0333-4769-93ec-84fbff276e91.800e3ebc-8013-4415-bcf8-957f62b82047'
      },
      {
        key: '5',
        text: 'Minecraft',
        uri: 'https://store-images.s-microsoft.com/image/apps.17382.13510798887677013.afcc99fc-bdcc-4b9c-8261-4b2cd93b8845.49beb011-7271-4f15-a78b-422c511871e4',
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
    color: '#137b0d',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 250,
    height: 300,
    alignSelf: 'center'
  },
  itemText: {
    color: '#449c3e',
    marginTop: 5,
    fontSize:15,
    alignSelf: 'center'
  },
});