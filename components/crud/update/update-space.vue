<template>
    <div>
        <v-card elevation="0">
            <form>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="name" id="spaceName" label="Space Name*">
                                </v-text-field>
                            </v-col>
                            <!--<v-col cols="6">
                                <v-select v-model="type" label="What type of space is this?" :items="typeItems">
                                </v-select>
                            </v-col>
                            <v-col cols="6">
                                <v-select v-model="status" label="Is this space public or private?"
                                    :items="statusItems"></v-select>
                            </v-col>-->
                            <v-col cols="12">
                                <v-textarea v-model="description" label="Description" id="spaceDescription">
                                </v-textarea>
                            </v-col>
                            <v-col cols="6">
                                <v-file-input @change="onFileChange('cover', $event)" clearable density="compact"
                                    prepend-icon="fas fa-image" accept="image/*" label="Image for Cover"
                                    variant="solo-inverted"></v-file-input>
                            </v-col>
                            <v-col cols="6">
                                <v-file-input @change="onFileChange('avatar', $event)" clearable density="compact"
                                    prepend-icon="fas fa-image" accept="image/*" label="Image for Avatar"
                                    variant="solo-inverted"></v-file-input>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" variant="text" type="submit" @click.prevent="deleteGroupAndRefresh">
                        Delete Space
                    </v-btn>

                    <v-btn color="primary" variant="text" type="submit" @click.prevent="updateGroupAndRefresh">
                        Update Space
                    </v-btn>
                </v-card-actions>
                <div v-if="errorMessage">{{ errorMessage }}</div>
                <div v-if="successMessage">{{ successMessage }}</div>
            </form>
        </v-card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useApolloClient } from '@vue/apollo-composable';
import { useRoute, useRouter } from 'vue-router';
import { UPDATE_GROUP, DELETE_GROUP } from '~/graphql/cms/mutations/groups'

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const name = ref('');
const description = ref('');
const image = ref('');
const media = ref('');
const reactions = ref('');

const { client: apolloClient } = useApolloClient();

const updateGroup = async () => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: UPDATE_GROUP,
      variables: {
        name: name.value,
        description: description.value,
        id: id,
      },
      context: {
        clientName: 'secondary'  // This will use the secondary endpoint
      }
    });
    console.log('Group updated:', data.updateGroup.group);
  } catch (error) {
    console.error('Error updating group:', error);
  }
};

const deleteGroup = async () => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: DELETE_GROUP,
      variables: {
        id: id,
      },
      context: {
        clientName: 'secondary'  // This will use the secondary endpoint
      }
    });
    console.log('Group deleted:', data.deleteGroup.group.id);
  } catch (error) {
    console.error('Error deleting group:', error);
  }
};

const deleteGroupAndRefresh = async () => {
  await deleteGroup();
  router.push('/social/spaces');  // Refresh the current route
};

const updateGroupAndRefresh = async () => {
  await updateGroup();
  router.go(0);  // Refresh the current route
};

const resetForm = () => {
  name.value = '';
  description.value = '';
  image.value = '';
  media.value = '';
  reactions.value = '';
};

const reset = () => {
  router.go(0);
};
</script>