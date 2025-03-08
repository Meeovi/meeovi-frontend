<template>
    <v-row>
        <v-col cols="12">
            <h6>Color</h6>
        </v-col>

        <v-col cols="12">
            <v-container>
                <v-row>
                    <v-col cols="auto">
                        <v-btn density="compact" :style="`background-color: ${colors?.custom_attributesV2?.items[0]?.value}`" :title="colors?.custom_attributesV2?.items[0]?.code"
                            @click="selectColor(color)">
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        props: {
            colors: {
                type: Array,
                required: true, // Colors should always be passed
            },
        },
        data() {
            return {
                selectedColor: null, // Stores the selected color
            };
        },
        methods: {
            selectColor(color) {
                this.selectedColor = color.value; // Set the selected color
                this.$emit('color-selected', color); // Emit the selected color to the parent
            },
        },
    };
</script>