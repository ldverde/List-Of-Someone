import { useFonts,JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans';
import { Sunshiney_400Regular } from '@expo-google-fonts/sunshiney';
import { ArefRuqaa_700Bold } from '@expo-google-fonts/aref-ruqaa'
import { useEffect } from 'react';
import { Slot, SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        JosefinSans_400Regular,
        Sunshiney_400Regular,
        ArefRuqaa_700Bold
    });
    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);
    
    if (!loaded && !error) {
        return null;
    }
    return <Slot />
}