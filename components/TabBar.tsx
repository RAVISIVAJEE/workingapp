import { View, Platform ,StyleSheet} from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
type IconProps = {
    AllRequests: (props: any) => React.JSX.Element;
    NewRequest: (props: any) => React.JSX.Element;
  };
export function TabBar({ state, descriptors, navigation }:BottomTabBarProps){
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const isSpecialScreen = state.routes[state.index].name === 'NewRequest';
  const icon:IconProps={
    AllRequests:(props:any)=><FontAwesome size={28} name="home" color={'#222'} {...props}/>,
    NewRequest:(props:any)=><FontAwesome size={28} name="plus" color={'#222'}{...props} />,
  }
  return (
    <View style={[styles.tabbar,isSpecialScreen?{bottom:10}:{bottom:50}]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // console.log("option are",options,descriptors[route.key])
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
          key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            { icon[route.name as keyof IconProps]({
                color:isFocused?'#673ab7':'#222'
            })}
            
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabbar:{
position:'absolute',
flexDirection:'row',

justifyContent:'space-between',
alignItems:'center',
marginHorizontal:80,
paddingVertical:15,
borderRadius:35,
backgroundColor:'lightgrey',
shadowColor:'#000',
shadowOffset:{width:0,height:10},
shadowRadius:10,
shadowOpacity:0.1
    },
    tabbarItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:5,
        marginHorizontal:20
    }
})
