import { showToast } from "@/composables/useToastNotification.js";

export const useClothes = () => {
  const selectItem = ({ item, selectedItemsArray, allowedItems }) => {
    const items = allowedItems > 1 ? "items are" : "item is";

    if (selectedItemsArray.length >= allowedItems) {
      showToast(
        "error",
        `Only ${allowedItems} ${items} allowed`,
        "BOTTOM_LEFT"
      );

      return;
    } else {
      selectedItemsArray.push(item);
    }
  };

  const deleteItem = ({ item, selectedItemsArray }) => {
    const itemIndex = selectedItemsArray.findIndex((itm) => itm.id === item.id);

    if (itemIndex !== -1) {
      selectedItemsArray.splice(itemIndex, 1);
    }
  };
  return { selectItem, deleteItem };
};
