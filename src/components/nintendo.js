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
    title: 'Extoy en Nintendo',
    data: [
      {
        key: '1',
        text: 'The Legend of Zelda: Breath of the Wild',
        uri: 'https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/wii_u_20/SQ_WiiU_TheLegendOfZeldaBreathOfTheWild_image500w.jpg',
      },
      {
        key: '2',
        text: 'Halo',
        uri: 'https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png  ',
      },

      {
        key: '3',
        text: 'Kirby ',
        uri: 'https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/1x1_NSwitch_KirbysReturnToDreamLandDeluxe_image500w.jpg',
      },
      {
        key: '4',
        text: 'Fornite',
        uri: 'https://preview.redd.it/this-is-fortnite-in-2023-v0-69z3xdykhi9a1.jpg?auto=webp&s=1fd37ab9740d90efd946f2274af675d13e1a05d9',
      },
      {
        key: '5',
        text: 'Mario Kart  8',
        uri: 'https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_MarioKart8Deluxe_image500w.jpg',
      },
    ],
  },
  {
    title: 'Articulos',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Link(Tears of the Kingdom',
        uri: 'https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/others_2/amiibo_5/CI_Amiibo_TheLegendOfZeldaTearsOfTheKingdom_Link_image500w.png',
      },
      {
        key: '2',
        text: 'Link Lobo',
        uri: 'https://fs-prod-cdn.nintendo-europe.com/media/images/05_packshots/amiibo_1/CI16_Amiibo_Zelda_Wolf_Link_image500w.jpg',
      },

      {
        key: '3',
        text: 'Steve',
        uri: 'https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/others_2/amiibo_5/CI_Amiibo_SuperSmashBrosCollection_Steve_image500w.jpg',
      },
      {
        key: '4',
        text: 'Mario',
        uri: 'https://fs-prod-cdn.nintendo-europe.com/media/images/05_packshots/amiibo_1/CI16_Amiibo_SMCBatch1_01_Mario_image500w.jpg'
      },
      {
        key: '5',
        text: 'Link Niño',
        uri: 'https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/others_2/amiibo_5/CI_amiibo_SuperSmashBrosCollection_YoungLink_image500w.jpg'
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
    color: '#e40413',
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
    color: '#cc252b',
    marginTop: 5,
    fontSize:15,
    alignSelf: 'center'
  },
});