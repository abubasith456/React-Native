import React from 'react'
import { ActivityIndicator } from "react-native";

export default function Progress({ text }) {
    return <ActivityIndicator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} color={"#00BFFF"} />
}