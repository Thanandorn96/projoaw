import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function Workout() {
    const navigation = useNavigation();

    return (


        <ScrollView>
            <View style = {{marginHorizontal : 20,marginVertical:20}}>
                <Text style={{ fontSize: 20,marginBottom:10 }}>Complete Profile</Text>
                <Text>Please enter accurate information to obtain accurate analysis of your health data</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ marginHorizontal: 20, marginTop: 50, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white',marginBottom:100}}>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Name</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Sex</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Date of birth</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Height</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Weight</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput>
                    </View>
                </View>

            </View>
            <Button  title="Next" onPress={() => navigation.navigate("Bottom")} />
        </ScrollView>




    );
}
