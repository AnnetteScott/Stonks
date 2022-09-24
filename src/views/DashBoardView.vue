<template>
	<div class="pageHome">
        <div>
            <div id="accounts_container">
                <template v-for="(data, account) in mainData.accounts" :key="account">
                    <div class="account_info">
                        <p>{{account}}</p>
                        <p style="font-size: 2rem;">${{data.startingAmount}}</p>
                    </div>
                </template>
            </div>
            <div class="account_info" style="margin: 30px; justify-content: center; font-size: 2rem;">
                <p>Total: ${{totalAmount}}</p>
            </div>
        </div>
	</div>
	
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mainData } from '../main'
export default defineComponent({
	name: 'DashBoardView',
	components: {

	},
	data() {
		return {
			mainData,
            totalAmount: 0
		}
	},
    mounted() {
        this.totalAccounts();
    },
    methods: {
        totalAccounts(){
            this.totalAmount = 0
            for(const[name, data] of Object.entries(mainData.accounts)){
                this.totalAmount += data.startingAmount
            }
        }
    }
});
</script>

<style>
#accounts_container{
    margin-top: 10px;
    width: 225px;
    height: 60%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 25px;
    padding: 30px;
    overflow-y: auto;
}
.account_info{
	display: flex;
	flex-direction: column;
	width: 200px;
    height: 90px;
    min-height: 90px;
    height: 90px;
	gap: 15px;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);	
	border-radius: 5px;
	background-color: rgba(255, 255, 255, .15);
	backdrop-filter: blur(5px);
	padding: 5px;
    margin: 10px 0px;
    user-select: none;
}

</style>
