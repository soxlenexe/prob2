<template>
    <span class="item-nav pr-4 " @click="showNoti" >
        <OverlayPanel
            ref="op"
            :dismissable="true"
            :style="{ width: '300px' }"
            :baseZIndex="999"

        >
            <p
                class="noti-msg"
                v-for="(alert, index) in alertList"
                :key="index"
                :class="{'unread': !alert.visited}"
            >
                <i class="pi pi-info-circle p-2"></i>
                <span > {{ alert.string }} </span>
            </p>
        </OverlayPanel>
        <span class="noti-qty" v-show="bell">{{ count }} </span
        ><i class="pi pi-bell"></i>
    </span>
</template>

<script>
import SystemNotificationsService from "./../../service/SystemNotificationsServie";

export default {
    props: ["company"],
    alertService: null,
    data() {
        return {
            alertList: [],
            count: 0,
            bell: false
        };
    },
    created() {
        this.alertService = new SystemNotificationsService();
    },
    mounted() {
        this.alertService.getNotifications(this.company).then(res => {
            this.alertList = res;

            res.forEach(element => {
                if (element.visited == false) {
                    this.bell = true;
                    this.count++;
                }
            });
        });
    },
    methods: {
        showNoti(event) {
            this.$refs.op.toggle(event);
            this.bell = false;
            this.alertService
                .updateNotificationStatus(this.company)
                .then(res => {
                    // this.alertList.forEach(alert => {
                    //     alert.visited = 1
                    // });
                });
        }
    }
};
</script>

<style scoped>
.item-nav {
    color: rgb(216, 213, 213);
}
.noti-qty {
    background-color: red;
    font-size: 0.5rem;
    padding: 2px 4px;
    border-radius: 50%;
    margin-right: 4px;
}
.noti-msg {
    font-size: 0.8rem;
    border-bottom: 2px solid rgb(190, 190, 190);
    padding-bottom: 6px;
}
.unread{
    background-color: rgb(245, 243, 243) !important;
}
</style>
