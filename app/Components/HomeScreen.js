import React, { useCallback, useState, useEffect  } from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import TypingText from './TypingText';
import RodaPe from './RodaPe';
import { lista } from '../../Lista'; 
import styles from '../styles';
import keyExtractor from './Elements.flatlist/keyExtractor';
import getItemLayout from './Elements.flatlist/getItemLayout';
import renderItemSeparator from './Elements.flatlist/renderItemSeparator';
import Item from './Items';

const url = process.env.EXPO_PUBLIC_API_URL;

const apisecret = process.env.SENTRY_AUTH_TOKEN; 

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export default function HomeScreen() {
  
    const [detalhes, setDetalhes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alternar, SetAlternar] = useState(false);
    
    useEffect(() => { 
        const fetchData = async () => {
            try {
              const IdsItens = lista.map(item => item.linkId)

              const idcolection = chunkArray(IdsItens, 50)

              const fetchPromises = idcolection.map(col => { const stringId = col.join(',');
                return fetch(`${url}part=snippet&key=${apisecret}&id=${stringId}`)
                  .then(res => res.json())
              })

              const lotes = await Promise.all(fetchPromises)

              const allItems = lotes.flatMap(json => json.items || []);

              const detalhe = new Map();

              allItems.forEach(item => {detalhe.set(item.id,{
                titulo: item.snippet.title,
                canal: item.snippet.channelTitle,
                thumb: item.snippet.thumbnails.high.url,
                link: `https://www.youtube.com/watch?v=${item.id}`
              })
            })
              
              const combinedData = lista.map(item => ({
                ...item, 
                ...detalhe.get(item.linkId)
              }));

                setDetalhes(combinedData);
            } catch (error) {
                console.log("Erro ao buscar videos", error)
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (!detalhes) return null; 


  const renderItem = useCallback(({ item }) => (
          <Item item={item} />
      ), []);
    
    

 const viewabilityConfig = {
      waitForInteraction: true,
      viewAreaCoveragePercentThreshold: 100
      
  }
      const handleViewableItemChanged  = useCallback(({viewableItems, chaged}) => {
        console.log(
        "Itens visíveis:", 
        viewableItems.map(item => item.key)
      );

  },[]
)
      const handleMude = useCallback(() => {
        SetAlternar(true)
      },[]
    )
    
   if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" style={{ flex: 1 }} />;
  }
   
  
  return (
    <View> 
      <FlatList 
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={handleViewableItemChanged}
        ListHeaderComponent={<TypingText onDone={handleMude} /> }
        ListFooterComponent={<RodaPe />}
        ListFooterComponentStyle={styles.rodaPe}
        ListHeaderComponentStyle={styles.Typi}
        style={styles.flat}
        maxToRenderPerBatch={7}
        removeClippedSubviews={true}
        initialNumToRender={5}
        data={alternar ? detalhes : []}
        stickyHeaderHiddenOnScroll={true}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={renderItemSeparator} 
        />  
    </View>
  );
}
