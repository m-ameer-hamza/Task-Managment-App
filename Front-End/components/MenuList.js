import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import {
  IconButton,
  TouchableRipple,
  Provider as PaperProvider,
} from "react-native-paper";

import { TaskHandler } from "../Handlers/TaskHandlers";

import { useNavigation } from "@react-navigation/native";

export default function MenuList({ task, displayEdit }) {
  const navigation = useNavigation();

  const { removeTask, loading, setLoading } = TaskHandler();

  //useEFfect to handle the loading
  useEffect(() => {
    if (loading) {
      console.log("Task is being deleting.......");
    }
  }, [loading]);

  //container height and padding depending upon the displayEdit
  const containerHeight = displayEdit ? "27%" : "10%";
  const containerPadding = displayEdit ? "7%" : "2%";

  return (
    <View
      style={{
        flexDirection: "column",
        position: "absolute",
        width: "52%",
        height: containerHeight,
        right: "7%",
        borderRadius: 10,
        top: "1%",
        backgroundColor: "#eee",
        zIndex: 1,
        justifyContent: "space-between",
        paddingHorizontal: "3%",
        paddingVertical: containerPadding,
      }}
    >
      {displayEdit && (
        <TouchableRipple
          rippleColor="#fff"
          centered={true}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("EditScreen", { task: task })}
        >
          <>
            <Text style={{ fontSize: 18 }}>Edit Task</Text>
            <IconButton icon="pencil" color="#0fba1a" size={25} />
          </>
        </TouchableRipple>
      )}
      <TouchableRipple
        rippleColor="#fff"
        centered={true}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={() => {
          setLoading(true);
          removeTask(task._id);
          setLoading(false);
        }}
      >
        <>
          <Text style={{ fontSize: 18 }}>Delete Task</Text>
          <IconButton icon="delete-outline" color="#0fba1a" size={25} />
        </>
      </TouchableRipple>
    </View>
  );
}
