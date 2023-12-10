import Dialog from "react-native-dialog";
import React, { useState, createContext } from 'react'
import { Button, StyleSheet, View } from "react-native";

export default function ShowDialog({ message, ...props }) {
    console.log("messagfe" + message)
    return (
        <Dialog.Container visible={true}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Description>
                {message}            </Dialog.Description>
            <Dialog.Button label="OK" {...props} />
        </Dialog.Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});