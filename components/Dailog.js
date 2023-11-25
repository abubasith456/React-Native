import Dialog from "react-native-dialog";
import React, { useState, createContext } from 'react'
import { Button, StyleSheet, View } from "react-native";

export function showDialog(visible, title, message, positivebuttonTxt, negativeButtonTxt) {
    return (
        <View style={styles.container}>
            <Dialog.Container visible={visible}>
                <Dialog.Title>${title}</Dialog.Title>
                <Dialog.Description>
                    ${message}
                </Dialog.Description>
                <Dialog.Button label={positivebuttonTxt} />
                <Dialog.Button label={negativeButtonTxt} />
            </Dialog.Container>
        </View>
    );
}

// export const showDialog = () => {
//     setVisible(true);
// };

export const handleCancel = () => {
    showDialog(false);
};

export const handleDelete = () => {
    ///
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});