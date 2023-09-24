import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image, ImageBackground, ScrollView } from 'react-native';
import UserImage from './assets/image/user.png';
import SearchIcon from './assets/icons/search.png';
import BgDashboard from './assets/image/bg-dashboard-home.png';
import GlobeIcon from './assets/icons/globe.png';
import SmartphoneIcon from './assets/icons/smartphone.png';
import DollarIcon from './assets/icons/dollar-sign.png';
import RightArrowIcon from './assets/icons/right-arrow.png';

import NetflixIcon from './assets/icons/netflix.png';
import TwitterIcon from './assets/icons/twitter.png';
import DiscordIcon from './assets/icons/discord.png';
import NotionIcon from './assets/icons/notion.png';
import FigmaIcon from './assets/icons/figma.png';
import SpotifyIcon from './assets/icons/spotify.png';

import Menu from './components/Menu.js';


const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      }}>
        <Image
            style={styles.tinyLogo}
            source={UserImage}
          />
        <View style={{
          marginLeft: 10
        }}>
            <Text>Welcome Back</Text>
            <Text style={{
              color: "#7976FF",
              fontSize: 16,
            }}>Amanda Stefanie</Text>
        </View>
      </View>

      <View style={{
        padding: 10,
        backgroundColor: "#D0CFFF",
        borderRadius: 50
      }}>
        <Image 
          style={{
            width: 25,
            height: 25
          }}
          source={SearchIcon}
        />
      </View>
    </View>
  )
}

const Dashboard = () => {
  return(
    <View style={styles.dashboard}>
      <ImageBackground 
        source={BgDashboard}
        // resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View style={{
          padding: 20
        }}>
          <Text style={{
            fontSize: 32,
            color: "#FFF",
            marginBottom: 20
          }}>Manage Your Privacy</Text>

          <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
            <Card 
              icon={GlobeIcon}
              type="Browser"
              count="22"
            /> 
            <Card 
              icon={SmartphoneIcon}
              type="App"
              count="8"
            /> 
            <Card 
              icon={DollarIcon}
              type="Payment"
              count="16"
            /> 
          </View>

        </View>
      </ImageBackground>
    </View>
  )
}

const Card = ({icon, type, count}) => {
  return(
    <View style={styles.card}>
      <View style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D0CFFF",
        borderRadius: 50,
        width: 40,
        height: 40,
        marginBottom: 20
      }}>
        <Image 
          style={{
          }}
          source={icon}
        />
      </View>

      <Text style={{
        fontSize: 16,
        fontWeight: "bold"
      }}>{type}</Text>
      <Text style={{
        fontSize: 12
      }}>{count} Password</Text>
    </View>
  )
}

const dataListAdded = [
  {
    icon: NetflixIcon,
    name: "Netflix",
    email: "stefanimanda@gmail.com",
    link: "#"
  },
  {
    icon: TwitterIcon,
    name: "Twitter",
    email: "stefanimanda@gmail.com",
    link: "#"
  },
  {
    icon: DiscordIcon,
    name: "Discord",
    email: "stefanimanda@gmail.com",
    link: "#"
  },
  {
    icon: NotionIcon,
    name: "Notion",
    email: "stefanimanda@gmail.com",
    link: "#"
  },
  {
    icon: FigmaIcon,
    name: "Figma",
    email: "stefanimanda@gmail.com",
    link: "#"
  },
  {
    icon: SpotifyIcon,
    name: "Spotify",
    email: "stefanimanda@gmail.com",
    link: "#"
  },
]

const RecentlyAdded = () => {
  return(
    <View style={styles.recentlyAdded}>
      <Text style={{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 25
      }}>Recently Add</Text>

      {/* <ScrollView
        style={{
          paddingVertical: 10
        }}
        showsVerticalScrollIndicator={false}
      > */}
        {dataListAdded.map((item, key) => {
          return(
            <ListAdded
              key={key}
              icon={item.icon}
              name={item.name}
              email={item.email}
              link={item.link}
            />
          )
        })}
      {/* </ScrollView> */}

    </View>
  )
}

const ListAdded = ({icon=NetflixIcon, name="Brand", email="email@google.com", link}) => {
  return(
    <View style={styles.listAdded}>
      <View style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      }}>
        <Image 
          style={{
            width: 40,
            height: 40,
            marginRight: 20
          }}
          source={icon}
        />
        <View>
          <Text style={{
            fontSize: 16,
            fontWeight: "bold"
          }}>{name}</Text>
          <Text style={{
            fontSize: 12,
            fontWeight: "400",
            color: "#8E9EB6"
          }}>{email}</Text>
        </View>
      </View>

      <Image 
        style={{
        }}
        source={RightArrowIcon}
      />
    </View>
  )
}

export default function App() {
  return (
    <View style={{
      width: "100%"
    }}>
      <StatusBar style="auto" />
      <View style={styles.layout}>
        
          <Navbar />

          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <Dashboard />

            <RecentlyAdded />

          </ScrollView>
          
      </View>
      <Menu />

    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 16,
    overflow: "scroll",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: '#FFF',
    color: '#7976FF',
  },
  navbar: {
    paddingTop: 30,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  dashboard: {
    marginVertical: 20,
    width: "100%",
    height: 300,
    borderRadius: 20,
    backgroundColor: "#9795FA",
    opacity: 0.8,
    overflow: "hidden"
  },
  card: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: "#FFF",
    width: 90,

    display: "flex",
    flexDirection: "column",
  },
  recentlyAdded: {
    minHeight: 300,
    width: "100%",
    paddingBottom: 80
  },
  listAdded: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  }
});
