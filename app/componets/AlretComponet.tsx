import { View, Text, TouchableOpacity, Modal } from "react-native";
import React from "react";

const AlertComponent = ({ visible, onCancel, onRetry,errordetail }: any) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/40">
        <View className="h-[120px] w-[65%] bg-four p-4 rounded-lg">
          <View className="justify-center items-center mb-4">
            <Text className="text-center text-lg font-semibold text-white">
              {errordetail}
            </Text>
          </View>
          <View className="flex-row justify-evenly mt-8">
            <TouchableOpacity onPress={onCancel} className="mr-4">
              <Text className="text-white ">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onRetry}>
              <Text className="text-white">Retry</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertComponent;
