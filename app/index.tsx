import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      {/* Hiệu ứng fadeIn */}
      <Text key="fadeIn" className="text-lg animate-fadeIn text-black">
        Hello with fadeIn!
      </Text>

      {/* Hiệu ứng slideUp */}
      <Text key="slideUp" className="mt-4 text-lg animate-slideUp text-black">
        Hello with slideUp!
      </Text>

      {/* Hiệu ứng bounceIn */}
      <View className="mt-8 p-4 bg-primary rounded-xl animate-bounceIn">
        <Text key="bounceIn" className="text-white">Hello with bounceIn!</Text>
      </View>
    </View>
  );
}
