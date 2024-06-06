<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create a Space
                </v-btn>
            </template>
            <v-card>
                <form method="post" @submit.prevent="createGroup()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Space</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="name" id="spaceName" label="Space Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="description" label="Description" id="spaceDescription">
                                    </v-textarea>
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input @change="onFileChange('cover', $event)" clearable density="compact" prepend-icon="fas fa-image"
                            accept="image/*" label="Photo" variant="solo-inverted"></v-file-input>
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input @change="onFileChange('avatar', $event)" clearable density="compact" prepend-icon="fas fa-image"
                            accept="image/*" label="Photo" variant="solo-inverted"></v-file-input>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="type" label="What type of group is this?" v-for="(spaces, index) in data?.groups?.nodes?.types?.nodes" :key="index" :items="[`${spaces?.name}`]"></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-select v-model="status" label="Is this group public or private?" v-for="(spaces, index) in data?.groups?.nodes" :key="index" :items="[`${spaces?.status}`]"></v-select>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" type="submit" @click="dialog = false">
                            Save
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>

    export default {
       data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
          }
        }
    }
</script>

<script setup>
import { ref } from 'vue';

const name = ref('')
const description = ref('')
const attachmentCover = ref(null)
const attachmentAvatar = ref(null)
const client = useApolloClient()

const CREATE_GROUP_MUTATION = gql`
  mutation CREATE_GROUP(
    $input: CreateGroupInput!,
    $attachmentCover: Upload!,
    $attachmentAvatar: Upload!
  ) {
    createGroup(input: $input) {
      group {
        id
        name
        description
        status
      }
    }
    setGroupCover(groupId: $createGroup.group.id, file: $attachmentCover) {
      group {
        coverUrl
      }
    }
    setGroupAvatar(groupId: $createGroup.group.id, file: $attachmentAvatar) {
      group {
        avatarUrl
      }
    }
  }
`

const onFileChange = (type, event) => {
  const file = event.target.files[0]
  if (type === 'cover') {
    attachmentCover.value = file
  } else if (type === 'avatar') {
    attachmentAvatar.value = file
  }
}

const createGroup = async () => {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_GROUP_MUTATION,
      variables: {
        input: {
          name: groupName.value,
          description: groupDescription.value,
          status: 'public' // or 'private', 'hidden' based on your requirement
        },
        attachmentCover: attachmentCover.value,
        attachmentAvatar: attachmentAvatar.value
      },
      context: {
        hasUpload: true
      }
    })
    console.log('Space created successfully:', data.createGroup.group)
    console.log('Cover URL:', data.setGroupCover.group.coverUrl)
    console.log('Avatar URL:', data.setGroupAvatar.group.avatarUrl)
  } catch (error) {
    console.error('Error creating space:', error)
  }
};

const query = gql`
query NewQuery {
  groups {
    nodes {
      creator {
        avatar {
          url
        }
        username
      }
      description
      id
      lastActivity
      name
      slug
      status
      totalMemberCount
      dateCreated
      attachmentCover {
        full
      }
      types {
        nodes {
          name
        }
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

/*const {
        getItems
    } = useDirectusItems()

    const space = await getItems({
        collection: "Space"
    });*/
</script>