<template>
  <div class="compare">
    <router-link :to="{ name: 'Google' }">Go back</router-link>

    <span v-if="isLoading">Loading</span>
    <div v-else class="results">
        

        <div 
          v-for="(user, index) in getStoreConnectedUsers.value"
          :key="user.id"
          class="card"
          :user="user"
          :index="index"
        >
            <p class="index">{{ user.name }}</p>
            <!-- <img class="image" :src="user.image_default" />
            <div class="name-artists-pop">
              <p class="name">{{ user.title.substr(0, 40) }}</p>
              <p class="artists">Description: {{ user.description.substr(0, 40) }} [...]</p>
            </div> -->
        </div>

    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'

import useStoreHelper from '@/use/useStoreHelper'
import UsersService from '@/service/UserService'

export default {
//   props: ['id'],
  setup(props) {
    const isLoading = ref(true)
    const refId = ref(props.id)
    const playlist = ref({})
    const router = useRouter()
    const { 
      store,
      getStoreConnectedUsers,
      setStoreConnectedUsers,
    } = useStoreHelper()

    /* ------- vue hooks */
    onBeforeMount(async () => {
      console.log('Compare | onBeforeMount')
    //   console.log('props', props)
    //   if () {
        isLoading.value = false
    //   } else {
    //     console.log('store has been reset, back to /')
    //     router.push('/')
    //   }
    })
    
    /* ------- functions */

    // fetch
    async function fetchConnectedUsers(token, playlistId) {
      const data = process.env.NODE_ENV === 'development'
      ? await GoogleService.getPlaylistItems(token, playlistId)
      : await GoogleService.getPlaylistItems(token, playlistId)
      // ? await GoogleService.getMockPlaylistItems(token, playlistId)
      return data
    }

    // router
    function goBack() {
      router.go(-1)
    }

    return {
      isLoading,
      router,
      
      store,
      getStoreConnectedUsers,
      setStoreConnectedUsers,
   
      fetchConnectedUsers,

      goBack,
    }
  },
}
</script>

<style lang="scss" scoped>
.playlist {
  min-width: 300px;
  width: auto;
  max-width: 600px;
  height: 100%;

  margin: auto;
  padding: 10px;
}
  .card {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    vertical-align: middle;
    margin: 10px 0px;
    padding: 15px 0px;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);

    .index {
      flex: 0 0 40px;
      min-width: 30px;
    }
    .image {
      flex: 0 0 auto;
      width: 100px;
      margin-right: 15px;
      border-radius: 4px;
    }
    .name-artists-pop {
      flex: 1;
      height: 100px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: baseline;

      .artists {
        font-size: 1rem;
        font-weight: normal;
      }
      .name {
        font-size: 1rem;
        font-weight: bold;
      }
      .popularity {
        font-size: 0.7rem;
        font-weight: lighter;
      }
    }
    .trackvue {
      padding: 10px;
      flex: 0 0 60px;
    }
    transition-delay: 10ms;
    transition: background-color 150ms linear;
  }
  .card:hover {
    background-color: #c20000;
    color: white;
  }
</style>
