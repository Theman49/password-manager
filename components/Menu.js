import {View, Text, StyleSheet, Image} from 'react-native';
import HomeIcon from '../assets/icons/home.png';
import LockIcon from '../assets/icons/lock.png';
import ShieldIcon from '../assets/icons/shield.png';
import UserIcon from '../assets/icons/user.png';

export default function Menu(){
    return(
        <View style={{
            backgroundColor: "#FFF",
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex:1,
            paddingVertical: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"

        }}>
            <View style={styles.container}>
                <Image
                    source={HomeIcon}
                />
                <Image
                    source={LockIcon}
                />


                <View style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#9997FF",
                    marginTop: -50,
                    borderWidth: 4,
                    borderColor: "#FFF"
                }}>
                    <Text style={{
                        color: "#FFF",
                        fontSize: 36,
                    }}>+</Text>
                </View>

                <Image
                    source={ShieldIcon}
                />
                <Image
                    source={UserIcon}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F7F3FF",
        height: 56,
        width: "95%",
        borderRadius: 50,
        paddingVertical: 18,
        paddingHorizontal: 32,


        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})