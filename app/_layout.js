import { useFonts, WaitingfortheSunrise_400Regular } from '@expo-google-fonts/waiting-for-the-sunrise';
import { ArefRuqaa_700Bold } from '@expo-google-fonts/aref-ruqaa';
import { Calistoga_400Regular } from '@expo-google-fonts/calistoga';
import { Caveat_400Regular } from '@expo-google-fonts/caveat';
import { JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans';
import { ReemKufi_400Regular } from '@expo-google-fonts/reem-kufi';
import { Sunshiney_400Regular } from '@expo-google-fonts/sunshiney';
import { useEffect } from 'react';

import { Slot, SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        WaitingfortheSunrise_400Regular,
        ArefRuqaa_700Bold,
        Calistoga_400Regular,
        Caveat_400Regular,
        JosefinSans_400Regular,
        ReemKufi_400Regular,
        Sunshiney_400Regular
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