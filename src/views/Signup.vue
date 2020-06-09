<template>
    <div class="app-content">
        <b-field label="Email" v-bind:type="{'is-danger': $v.user.email.$invalid}">
            <b-input type="email"
             v-on:input="$v.user.email.$touch"
             v-model="user.email"></b-input>
        </b-field>

        <div class="columns">
            <div class="column is-half">
                <b-field label="First Name">
                    <b-input type="text" 
                        v-model="user.firstName"></b-input>
                </b-field>
            </div>
            <div class="column is-half">
                <b-field label="Last Name">
                    <b-input type="text" 
                        v-model="user.lastName"></b-input>
                </b-field>
            </div>
        </div>

        <b-field label="Password">
            <b-input type="password" 
                v-model="user.password"></b-input>
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
            isLoading: false,
            user: {
                email: '',
                firstName: '',
                lastName: '',
                password: ''
            }
        }
    },
    methods: {
        signup() {
            this.isLoading = true
            let user = new Parse.User()

            user.set('username', this.user.email)
            user.set('password', this.user.password)
            user.set('first_name', this.user.firstName)
            user.set('last_name', this.user.lastName)

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