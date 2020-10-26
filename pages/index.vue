<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to EZ TREEZY
        </v-card-title>
        <v-card-text>
          <p>EZ TREEZY fulfills all your TREEZY needs in an EZ way.</p>
          <p>
            For more information on EZ TREEZY, check out the <a
              href="https://github.com/Down-To-Programme/2020-software-engineering-project2-treegen"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>.
          </p>
          <p>
            Find a bug (Bugs are bad for trees)? Have some Questions? Just want to talk about trees? Tell David!!!!! <a
              href="mailto:david.seiferth@oriel.ox.ac.uk"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              david.seiferth@oriel.ox.ac.uk
            </a>.
          </p>
          <p>Thanks for visiting EZ TREEZY, we look forward to seeing some sick trees.</p>
          <div class="text-xs-right">
            <em><small>&mdash; Down-To-Programme</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            A forest full of quotes?
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
