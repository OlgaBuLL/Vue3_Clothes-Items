import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useClothesStore = defineStore("clothes", () => {
  const selectedClothesLeft = ref([]);
  const selectedClothesRight = ref([]);

  const blockLeft = ref([
    {
      id: 1,
      name: "Shoes 1",
      background: "#BBFBFF",
    },
    {
      id: 2,
      name: "Shoes 2",
      background: "#BAB8FF",
    },
    {
      id: 3,
      name: "Shoes 3",
      background: "#DDFFBB",
    },
    {
      id: 4,
      name: "Shoes 4",
      background: "#FFF7AD",
    },
    {
      id: 5,
      name: "T-shirt 1",
      background: "#ffd6ff",
    },
    {
      id: 6,
      name: "T-shirt 2",
      background: "#FFD0A4",
    },
    {
      id: 7,
      name: "T-shirt 3",
      background: "#b5ffe9",
    },
    {
      id: 8,
      name: "T-shirt 4",
      background: "#c7d4ff",
    },
  ]);

  const blockRight = ref([
    {
      id: 11,
      name: "Jacket 1",
      background: "#fbb7fb",
    },
    {
      id: 12,
      name: "Jacket 2",
      background: "#a6a4eb",
    },
    {
      id: 13,
      name: "Jacket 3",
      background: "#c8e9a7",
    },
    {
      id: 14,
      name: "Jacket 4",
      background: "#f7ed8f",
    },
    {
      id: 15,
      name: "Hoodie 1",
      background: "#bbc5e5",
    },
    {
      id: 16,
      name: "Hoodie 2",
      background: "#92ffde",
    },
    {
      id: 17,
      name: "Hoodie 3",
      background: "#ffc792",
    },
    {
      id: 18,
      name: "Hoodie 4",
      background: "#b2c3fb",
    },
  ]);

  return {
    selectedClothesLeft,
    selectedClothesRight,
    blockLeft,
    blockRight,
  };
});
