<template>
    <v-row>
        <v-col cols="12">
            <h6>Color</h6>
        </v-col>

        <v-col cols="12">
            <v-container>
                <v-row>
                    <v-col cols="auto" v-for="(color, index) in colors" :key="index">
                        <v-btn density="compact" :style="{ backgroundColor: color.value }" :aria-label="color.label"
                            @click="selectColor(color)">
                            <!-- Display the color name as a tooltip or for accessibility -->
                            <v-icon small v-if="selectedColor === color.value">mdi-check</v-icon>
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