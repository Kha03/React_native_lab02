import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import React, { useState } from "react";
export default function Cart() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  return (
    <View style={styles.container}>
      <View style={styles.item_content}>
        <View style={styles.item_info}>
          <View style={{ width: "104px", height: "100%" }}>
            <Image
              style={styles.img_item}
              source={require("../assets/book.png")}
            />
          </View>
          <View style={styles.item_info_detail}>
            <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
            <Text style={[styles.text, { fontSize: 18, color: "#EE0D0D" }]}>
              141.800 đ
            </Text>
            <Text
              style={[
                styles.text,
                { color: "#808080", textDecorationLine: "line-through" },
              ]}
            >
              500.000 đ
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.quan_control}>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                  <Icon name="remove" size="8" />
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 10 }}>1</Text>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                  <Icon name="add" size="8" />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={[styles.text, { marginLeft: 90, color: "#134FEC" }]}
                >
                  Mua sau
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.coupon}>
          <Text style={styles.text}>Mã giảm giá đã lưu</Text>
          <Text style={[styles.text, { color: "#134FEC", marginLeft: 17 }]}>
            Xem tại đây
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#C4C4C4",
  },
  item_content: {
    padding: 14,
    paddingBottom: 27,
    width: "100%",
    height: "283px",
    backgroundColor: "#fff",
  },
  item_info: {
    gap: 25,
    height: "127px",
    flexDirection: "row",
  },
  img_item: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  item_info_detail: {
    gap: 11,
  },
  text: {
    fontSize: 12,
    fontWeight: "700",
  },
  quan_control: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#C4C4C4",
    width: 14,
    height: 16,
  },
  coupon: {
    marginTop: 20,
    flexDirection: "row",
  },
});
