import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import React, { useState } from "react";
import { TextInput } from "react-native";

export default function Cart() {
  const costInit = 141.8;
  const [count, setCount] = useState(0);
  const [cost, setCost] = useState(0);

  const formatVND = (value) => {
    return value.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 3,
    });
  };

  const onPressAdd = () => {
    console.log(cost);
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      setCost(newCount * costInit);
      return newCount;
    });
  };

  const onPresRemove = () => {
    setCount((prevCount) => {
      if (prevCount == 0) return prevCount;
      const newCount = prevCount - 1;
      setCost(newCount * costInit);
      return newCount;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.item_content}>
        <View style={styles.item_info}>
          <View style={{ width: 104, height: "100%" }}>
            <Image
              style={styles.img_item}
              source={require("../assets/book.png")}
            />
          </View>
          <View style={styles.item_info_detail}>
            <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
            <Text style={[styles.text, { fontSize: 18, color: "#EE0D0D" }]}>
              {formatVND(costInit)}
            </Text>
            <Text
              style={[
                styles.text,
                { color: "#808080", textDecorationLine: "line-through" },
              ]}
            >
              {formatVND(500000)}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.quan_control}>
                <TouchableOpacity
                  style={[styles.button, { opacity: count == 0 ? 0.5 : 1 }]}
                  onPress={onPresRemove}
                  disabled={count == 0}
                >
                  <Icon name="remove" size={8} />
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 10 }}>{count}</Text>
                <TouchableOpacity style={styles.button} onPress={onPressAdd}>
                  <Icon name="add" size={8} />
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
        <View style={{ marginTop: 35, flexDirection: "row", gap: 24 }}>
          <TextInput
            placeholder="Mã giảm giá"
            style={{
              fontWeight: "700",
              textAlign: "center",
              width: 208,
              height: 45,
              borderColor: "#808080",
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 2,
              padding: 10,
              backgroundColor: "#fff",
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#0A5EB7",
              width: 99,
              height: 45,
              borderRadius: 2,
              paddingHorizontal: 12,
              paddingVertical: 11,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "700",
                fontSize: 18,
                color: "#fff",
              }}
            >
              Áp dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          marginTop: 14,
          flexDirection: "row",
          backgroundColor: "#fff",
          paddingVertical: 15,
          paddingLeft: 13,
        }}
      >
        <Text style={styles.text}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={[styles.text, { color: "#134FEC", marginLeft: 5 }]}>
          Nhập tại đây?
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 12,
          padding: 20,
        }}
      >
        <Text style={[styles.text, { fontSize: 18 }]}>Tạm tính:</Text>
        <Text style={[styles.text, { fontSize: 18, color: "red" }]}>
          {formatVND(cost)}
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          width: "100%",
          backgroundColor: "#fff",
          marginTop: 110,
          padding: 15,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.text, { fontSize: 18 }]}>Thành tiền</Text>
          <Text style={[styles.text, { fontSize: 18, color: "red" }]}>
            {formatVND(cost)}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "red",
            paddingHorizontal: 60,
            paddingVertical: 11,
            borderRadius: 2,
            marginTop: 40,
          }}
        >
          <Text style={[styles.text, { fontSize: 20, color: "#fff" }]}>
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
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
    height: 283,
    backgroundColor: "#fff",
  },
  item_info: {
    gap: 25,
    height: 127,
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
