import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from './CustomDrawerContent';
import { PRIMARY_COLOR, ROUTES, ROUTE_LABELS } from './routes';
import { COLORS } from '../theme/colors';
import BildirimScreen from '../screens/BildirimScreen';
import EvOdeviScreen from '../screens/EvOdeviScreen';
import KurslarScreen from '../screens/KurslarScreen';
import BlogScreen from '../screens/BlogScreen';
import ForumScreen from '../screens/ForumScreen';
import InfoScreen from '../screens/InfoScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const defaultStackOptions = {
  headerStyle: {
    backgroundColor: '#FFFFFF',
  },
  headerTitleStyle: {
    color: '#1F1F1F',
    fontWeight: '500',
    fontSize: 16,
  },
  headerTintColor: PRIMARY_COLOR,
  headerShadowVisible: true,
  contentStyle: {
    backgroundColor: '#F4F4F4',
  },
};

const buildStack = ({ screenName, screenTitle, ScreenComponent, initialParams }) => {
  return function DrawerStack() {
    const nestedScreenName = `${screenName}__screen`;

    return (
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          ...defaultStackOptions,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.getParent()?.openDrawer()}
              activeOpacity={0.8}
              style={{ marginRight: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color={PRIMARY_COLOR} />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen
          name={nestedScreenName}
          component={ScreenComponent}
          initialParams={initialParams}
          options={{ title: screenTitle }}
        />
      </Stack.Navigator>
    );
  };
};

const BildirimStack = buildStack({
  screenName: ROUTES.BILDIRIM,
  screenTitle: ROUTE_LABELS[ROUTES.BILDIRIM],
  ScreenComponent: BildirimScreen,
});

const EvOdeviStack = buildStack({
  screenName: ROUTES.EV_ODEVI,
  screenTitle: ROUTE_LABELS[ROUTES.EV_ODEVI],
  ScreenComponent: EvOdeviScreen,
  initialParams: { title: ROUTE_LABELS[ROUTES.EV_ODEVI], routeKey: ROUTES.EV_ODEVI },
});

const DanismanlikStack = buildStack({
  screenName: ROUTES.DANISMANLIK,
  screenTitle: ROUTE_LABELS[ROUTES.DANISMANLIK],
  ScreenComponent: InfoScreen,
  initialParams: { infoKey: ROUTES.DANISMANLIK, title: ROUTE_LABELS[ROUTES.DANISMANLIK] },
});

const YolHaritamStack = buildStack({
  screenName: ROUTES.YOL_HARITAM,
  screenTitle: ROUTE_LABELS[ROUTES.YOL_HARITAM],
  ScreenComponent: InfoScreen,
  initialParams: { infoKey: ROUTES.YOL_HARITAM, title: ROUTE_LABELS[ROUTES.YOL_HARITAM] },
});

const KurslarStack = buildStack({
  screenName: ROUTES.KURSLAR,
  screenTitle: 'Ders-1',
  ScreenComponent: KurslarScreen,
});

const BlogStack = buildStack({
  screenName: ROUTES.BLOG,
  screenTitle: ROUTE_LABELS[ROUTES.BLOG],
  ScreenComponent: BlogScreen,
});

const AnketStack = buildStack({
  screenName: ROUTES.ANKET,
  screenTitle: ROUTE_LABELS[ROUTES.ANKET],
  ScreenComponent: InfoScreen,
  initialParams: { infoKey: ROUTES.ANKET, title: ROUTE_LABELS[ROUTES.ANKET] },
});

const ForumStack = buildStack({
  screenName: ROUTES.FORUM,
  screenTitle: 'Yeni Konu',
  ScreenComponent: ForumScreen,
});

const IletisimStack = buildStack({
  screenName: ROUTES.ILETISIM,
  screenTitle: ROUTE_LABELS[ROUTES.ILETISIM],
  ScreenComponent: InfoScreen,
  initialParams: { infoKey: ROUTES.ILETISIM, title: ROUTE_LABELS[ROUTES.ILETISIM] },
});

const HakkimizdaStack = buildStack({
  screenName: ROUTES.HAKKIMIZDA,
  screenTitle: ROUTE_LABELS[ROUTES.HAKKIMIZDA],
  ScreenComponent: InfoScreen,
  initialParams: { infoKey: ROUTES.HAKKIMIZDA, title: ROUTE_LABELS[ROUTES.HAKKIMIZDA] },
});

const OnayStack = buildStack({
  screenName: ROUTES.ONAY,
  screenTitle: ROUTE_LABELS[ROUTES.ONAY],
  ScreenComponent: InfoScreen,
  initialParams: { infoKey: ROUTES.ONAY, title: ROUTE_LABELS[ROUTES.ONAY] },
});

const KisaBilgilerStack = buildStack({
  screenName: ROUTES.KISA_BILGILER,
  screenTitle: ROUTE_LABELS[ROUTES.KISA_BILGILER],
  ScreenComponent: EvOdeviScreen,
  initialParams: { title: ROUTE_LABELS[ROUTES.KISA_BILGILER], routeKey: ROUTES.KISA_BILGILER },
});

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.BILDIRIM}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width: '84%',
          backgroundColor: COLORS.surface,
        },
      }}
    >
      <Drawer.Screen name={ROUTES.BILDIRIM} component={BildirimStack} />
      <Drawer.Screen name={ROUTES.EV_ODEVI} component={EvOdeviStack} />
      <Drawer.Screen name={ROUTES.DANISMANLIK} component={DanismanlikStack} />
      <Drawer.Screen name={ROUTES.YOL_HARITAM} component={YolHaritamStack} />
      <Drawer.Screen name={ROUTES.KURSLAR} component={KurslarStack} />
      <Drawer.Screen name={ROUTES.BLOG} component={BlogStack} />
      <Drawer.Screen name={ROUTES.ANKET} component={AnketStack} />
      <Drawer.Screen name={ROUTES.FORUM} component={ForumStack} />
      <Drawer.Screen name={ROUTES.ILETISIM} component={IletisimStack} />
      <Drawer.Screen name={ROUTES.HAKKIMIZDA} component={HakkimizdaStack} />
      <Drawer.Screen name={ROUTES.ONAY} component={OnayStack} />
      <Drawer.Screen name={ROUTES.KISA_BILGILER} component={KisaBilgilerStack} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
