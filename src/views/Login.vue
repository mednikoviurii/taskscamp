<template>
    <div class="hero is-fullheight is-light">
        <div class="hero-body container">
            <div class="box">
                <p class="title is-4">Welcome back, please log in</p>

                <b-field label="Email address"> 
                    <b-input type="email" 
                        v-model="loginRequest.email"></b-input>
                </b-field>

                <b-field label="Password">
                    <b-input type="password" 
                        v-model="loginRequest.password"></b-input>
                </b-field>

                <div>
                    <b-button type="is-primary" 
                        v-bind:loading="isLoading" 
                        expanded 
                        v-on:click="login">Log in</b-button>
                </div>

                <div class="app-margin">
                    <p>Don't have an account? 
                        <router-link :to="{name: 'Signup'}">Create an account</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Parse from 'parse'

export default {
    data() {
        return {
            isLoading: false,
            loginRequest: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.isLoading = true
            Parse.User.logIn(this.loginRequest.email, this.loginRequest.password).then(user => {
                console.log('success')
                console.log(user.id)
                this.$buefy.toast.open({
                    message: 'Access granted',
                    type: 'is-success'
                })
            }).catch(err => {
                console.log(err)
                this.$buefy.toast.open({
                    message: 'Invalid email/password',
                    type: 'is-danger'
                })
            }).finally(() => {
                this.isLoading = false
            })
        }
    }
}
</script>