<template>
  <div class="msl-multi-select">
    <SearchableList
      v-if="!readOnly"
      :list-items="availableOptions"
      :no-options-text="noOptionsText"
      :no-items-found-text="noOptionsFoundText"
      :selected-list-items="selectedItems"
      :display-property="reduceDisplayProperty"
      :value-property="reduceValueProperty"
      :placeholder-text="searchOptionsPlaceholder"
      :search-input-class="searchInputClass"
      :highlight-class="highlightRemovedClass"
      :highlight-items="newlyRemovedItems"
      class="msl-multi-select__list"
      :highlight-diff="highlightDiff"
      :hide-search-input="hideSearchInputs"
      @onClickOption="onOptionSelect"
      :disabled="disabled"
      :groupProperty="reduceGroupProperty"
    />

    <div class="msl-multi-select__actions" v-if="!readOnly">
      <a
        class="msl-multi-select__action msl-multi-select__action-select-all"
        :class="{
          invisible: !showSelectAllButtons,
          'msl-multi-select__action--disabled': disabled,
        }"
        @click="onSelectAllOptions"
      >
        <font-awesome-icon icon="angle-double-right" />
      </a>

      <font-awesome-icon
        icon="exchange-alt"
        class="multi-select__action-icon"
      />

      <a
        class="msl-multi-select__action msl-multi-select__action-unselect-all"
        :class="{
          invisible: !showSelectAllButtons,
          'msl-multi-select__action--disabled': disabled,
        }"
        @click="onUnselectAllOptions"
      >
        <font-awesome-icon icon="angle-double-left" />
      </a>
    </div>

    <SearchableList
      :list-items="selectedItems"
      :no-options-text="selectedNoOptionsText"
      :no-items-found-text="noSelectedOptionsFoundText"
      :display-property="reduceDisplayProperty"
      :value-property="reduceValueProperty"
      :placeholder-text="selectedOptionsPlaceholder"
      :search-input-class="searchInputClass"
      :highlight-class="highlightAddedClass"
      :highlight-items="newlyAddedItems"
      :highlight-diff="highlightDiff"
      :hide-search-input="hideSearchInputs"
      class="msl-multi-select__selected msl-multi-select__list"
      @onClickOption="onOptionRemove"
      :disabled="disabled"
      :read-only="readOnly"
      :groupProperty="reduceGroupProperty"
    />
    <br />
    <!-- part-3 -->
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faExchangeAlt,
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";
import SearchableList from "../SearchableList/SearchableList.vue";
// import menuMasterService from '@/services/menuMaster.service';

library.add(faExchangeAlt, faAngleDoubleLeft, faAngleDoubleRight);

function getSelectedItemsFromValue(values, valueProperty, availableOptions) {
  if (valueProperty) {
    const selectedItems = [];

    values.forEach((value) => {
      const item = availableOptions.find(function findOptions(option) {
        if (typeof valueProperty === "string") {
          return option[valueProperty] === value;
        } else if (typeof valueProperty === 'function') { // eslint-disable-line
          return valueProperty(option) === value;
        }

        return option;
      });

      selectedItems.push(item);
    });

    return selectedItems;
  }

  return [...values];
}

function getValueFromOption(valueProperty, option) {
  if (typeof valueProperty === "string") {
    return option[valueProperty];
  } else if (typeof valueProperty === 'function') { // eslint-disable-line
    return valueProperty(option);
  }

  return option;
}

function getValuesFromOptions(valueProperty, options) {
  const values = [];

  options.forEach((option) => {
    values.push(getValueFromOption(valueProperty, option));
  });

  return values;
}

function getIndexFromVModelForOption(items, option, reduceValueProperty) {
  return items.findIndex((item) => {
    if (reduceValueProperty) {
      return (
        item &&
        option &&
        item === getValueFromOption(reduceValueProperty, option)
      );
    }

    return item === option;
  });
}

export default {
  name: "MultiSelect",
  components: {
    SearchableList,
    FontAwesomeIcon,
  },
  model: {
    prop: "value",
  },
  props: {
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    options1: {
      type: Array,
      default() {
        return [];
      },
    },

    // myselectedvalue: {
    //   type: Array,
    //   default() {
    //     return "";
    //   },
    // },
    searchOptionsPlaceholder: {
      type: String,
      default() {
        return "Search";
      },
    },
    selectedOptionsPlaceholder: {
      type: String,
      default() {
        return "Search";
      },
    },
    reduceDisplayProperty: {
      type: Function,
      default: (value) => value,
    },
    reduceValueProperty: {
      type: Function,
      default: (value) => value,
    },
    reduceGroupProperty: {
      type: Function,
      default: null,
    },

    noOptionsText: {
      type: String,
      default: "",
    },
    selectedNoOptionsText: {
      type: String,
      default: "Select",
    },
    noOptionsFoundText: {
      type: String,
      default: "No options found",
    },
    noSelectedOptionsFoundText: {
      type: String,
      default: "No options found",
    },
    showSelectAllButtons: {
      type: Boolean,
      default: true,
    },
    searchInputClass: {
      type: String,
      default: "",
    },
    highlightDiff: {
      type: Boolean,
      default: false,
    },
    highlightRemovedClass: {
      type: String,
      default: "msl-searchable-list__item--removed",
    },
    highlightAddedClass: {
      type: String,
      default: "msl-searchable-list__item--added",
    },
    hideSearchInputs: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      selectedItems1: [
        { name: "Chicago", id: "ch", group: "United States" },
        { name: "Wisconsin", id: "wi", group: "United States" },
        { name: "Houston", id: "ho", group: "India" },
      ],
      selectedItems: getSelectedItemsFromValue(
        this.value,
        this.reduceValueProperty,
        this.options1
      ),
      originalValueCopy: [],

      // This is for tracking items which have just been removed
      newlyRemovedItems: [],

      // This is for tracking items which have just been added
      newlyAddedItems: [],
      showSelectAll: true,
      showWidget: true,
    };
  },

  computed: {
    availableOptions() {
      if (!this.value || !this.value.length) {
        return [...this.options1];
      }

      return this.options1.filter((option) => {
        if (this.reduceValueProperty) {
          return (
            this.value.indexOf(
              getValueFromOption(this.reduceValueProperty, option)
            ) < 0
          );
        }

        return !this.value.find((value) => value === option);
      });
    },
  },

  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue?.length && !oldValue && this.highlightDiff) {
          this.originalValueCopy = [...newValue];
        }
        this.selectedItems = getSelectedItemsFromValue(
          newValue,
          this.reduceValueProperty,
          this.options1
        );
      },
    },
  },

  methods: {
    onOptionSelect(option) {
      this.selectedItems.push(option);

      // console.log("I am here");
      // console.log(option);
      // console.log(this.reduceValueProperty);
      const items = [
        ...this.value,
        getValueFromOption(this.reduceValueProperty, option),
      ];
      // console.log(items);
      // Only if this option is enabled
      this.addToNewlyAddedItems([option]);
      this.removeFromNewlyRemovedItems([option]);

      this.emitChangedItems();

      this.$emit("input", items);
      this.$emit("change", items);
      // console.log(items);
    },

    onOptionRemove(option) {
      const items = [...this.value];
      const { selectedItems } = this;
      // console.log("I am here2");
      // console.log(option);
      let valueIndex = getIndexFromVModelForOption(
        items,
        option,
        this.reduceValueProperty
      );

      items.splice(valueIndex, 1);

      valueIndex = selectedItems.findIndex((item) => {
        if (this.reduceValueProperty) {
          return (
            item &&
            option &&
            getValueFromOption(this.reduceValueProperty, item) ===
              getValueFromOption(this.reduceValueProperty, option)
          );
        }

        return item === option;
      });

      const removedItems = selectedItems.splice(valueIndex, 1);

      this.addToNewlyRemovedItems(removedItems);
      this.removeFromNewlyAddedItems([option]);

      // Copy the array because Vue doesn't react on the array modification by lodash
      // https://vuejs.org/v2/guide/list.html#Array-Change-Detection
      this.selectedItems = [...selectedItems];

      this.emitChangedItems();

      this.$emit("input", items);
      this.$emit("change", items);
      console.log(items);
    },

    onSelectAllOptions() {
      if (this.disabled || this.readOnly) {
        return;
      }
      // console.log("I am here3");
      // console.log(this.options1);
      this.selectedItems = [...this.options1];

      const selectedValues = getValuesFromOptions(
        this.reduceValueProperty,
        this.options1
      );
      this.$emit("input", selectedValues);
      this.$emit("change", selectedValues);
      // console.log(this.reduceValueProperty);
      // console.log(this.options1);

      this.addToNewlyAddedItems(this.selectedItems);
      this.addToNewlyRemovedItems([], true);

      this.emitChangedItems();
    },

    onUnselectAllOptions() {
      if (this.disabled || this.readOnly) {
        return;
      }
      // console.log("I am here4");
      // console.log(this.options1);
      this.addToNewlyRemovedItems(this.selectedItems);
      this.addToNewlyAddedItems([], true);

      this.selectedItems = [];
      this.emitChangedItems();
      this.$emit("input", []);
      this.$emit("change", []);
    },

    addToNewlyAddedItems(options1, reset = false) {
      if (reset) {
        this.newlyAddedItems = [];
      }
      // console.log("I am here5");
      // console.log(options1);

      options1.forEach((option) => {
        const optionIndex = getIndexFromVModelForOption(
          this.originalValueCopy,
          option,
          this.reduceValueProperty
        );

        if (optionIndex === -1) {
          this.newlyAddedItems.push(option);
        }
      });
    },

    addToNewlyRemovedItems(options1, reset = false) {
      if (reset) {
        this.newlyRemovedItems = [];
      }

      options1.forEach((option) => {
        const optionIndex = getIndexFromVModelForOption(
          this.originalValueCopy,
          option,
          this.reduceValueProperty
        );

        if (optionIndex > -1) {
          this.newlyRemovedItems.push(option);
        }
      });
    },

    removeFromNewlyRemovedItems(options1 = []) {
      options1.forEach((option) => {
        const optionIndex = this.newlyRemovedItems.findIndex(
          (o) => o === option
        );

        if (optionIndex > -1) {
          this.newlyRemovedItems.splice(optionIndex, 1);
        }
      });
    },

    removeFromNewlyAddedItems(options1 = []) {
      options1.forEach((option) => {
        const optionIndex = this.newlyAddedItems.findIndex((o) => o === option);

        if (optionIndex > -1) {
          this.newlyAddedItems.splice(optionIndex, 1);
        }
      });
    },

    emitChangedItems() {
      this.$emit("diff-changed", {
        newSelected: this.newlyAddedItems.map((i) =>
          this.reduceValueProperty(i)
        ),
        newUnselected: this.newlyRemovedItems.map((i) =>
          this.reduceValueProperty(i)
        ),
      });
    },
    // emitChangedItems() {
    //   this.$emit('diff-changed1', {
    //     newSelected: this.newlyAddedItems1.map((i) => this.reduceValueProperty(i)),
    //     newUnselected: this.newlyRemovedItems.map((i) => this.reduceValueProperty(i)),
    //   });
    // },

    resetOriginalCopy() {
      setTimeout(() => {
        this.originalValueCopy = [...this.value];
        this.newlyAddedItems = [];
        this.newlyRemovedItems = [];
        this.emitChangedItems();
      }, 0);
    },
  },
};
</script>
