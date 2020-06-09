<template>
    <div class="app-content">
        <b-field label="Email">
            <b-input type="email" v-model="email"></b-input>
        </b-field>

        <div class="columns">
            <div class="column is-half">
                <b-field label="First Name">
                    <b-input type="text" v-model="firstName"></b-input>
                </b-field>
            </div>
            <div class="column is-half">
                <b-field label="Last Name">
                    <b-input type="text" v-model="lastName"></b-input>
                </b-field>
            </div>
        </div>

        <b-field label="Password">
            <b-input type="password" v-model="password"></b-input>
        </b-field>

        <div>
            <b-button type="is-primary" v-on:click="signup"
                v-bind:loading="isLoading">Create new account</b-button>
        </div>

        <div class="app-margin">
            <p>I already have an account
                <router-link :to="{name: 'Login'}">Log in</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import Parse from 'parse'

export default {
    data() {
        return {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            isLoading: false
        }
    },
    methods: {
        signup() {
            this.isLoading = true
            let user = new Parse.User()

            user.set('username', this.email)
            user.set('password', this.password)
            user.set('first_name', this.firstName)
            user.set('last_name', this.lastName)

            user.signUp().then(result => {
                console.log('success')
                this.$buefy.toast.open({
                    message: 'User created',
                    type: 'is-success'
                })
                this.isLoading = false
            }).catch(err => {
                console.log(err)
                this.$buefy.toast.open({
                    message: 'Something is wrong, please try again!',
                    type: 'is-danger'
                })
                this.isLoading = false
            })
        }
    }
}
</script>