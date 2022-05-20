<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>내정보</h3></b-alert>
      </b-col>
    </b-row>
    <b-col></b-col>
    <b-col cols="8">
      <b-card class="text-center mt-3" style="max-width: 40rem" align="left">
        <b-form class="text-left">
          <b-form-group label="아이디:" label-for="userId">
            <b-form-input
              id="userId"
              v-model="user.id"
              :disabled="true"
              placeholder="아이디 입력...."
            ></b-form-input>
          </b-form-group>
          <b-form-group label="비밀번호:" label-for="userPw">
            <b-form-input
              id="userPw"
              v-model="user.pw"
              :disabled="changable"
              required
              placeholder="비밀번호 입력...."
            ></b-form-input>
          </b-form-group>
          <b-form-group label="이름:" label-for="userName">
            <b-form-input
              id="userName"
              v-model="user.name"
              :disabled="changable"
              required
              placeholder="사용자명 입력...."
            ></b-form-input>
          </b-form-group>
          <b-form-group label="주소:" label-for="userAddress">
            <b-form-input
              id="userAddress"
              v-model="user.address"
              :disabled="changable"
              required
              placeholder="주소지 입력...."
            ></b-form-input>
          </b-form-group>
          <b-form-group label="전화번호:" label-for="userPhonenumber">
            <b-form-input
              id="userPhoneNumber"
              v-model="user.phonenumber"
              :disabled="changable"
              required
              placeholder="전화번호 입력...."
            ></b-form-input>
          </b-form-group>
          <b-button
            v-if="this.changable == true"
            type="button"
            variant="primary"
            class="m-1"
            @click="changeInfo"
            >회원정보 수정</b-button
          ><b-button
            v-if="this.changable == true"
            type="button"
            variant="danger"
            class="m-1"
            @click="deleteUserId"
            >계정 삭제</b-button
          >
          <b-button
            v-else
            type="button"
            variant="primary"
            class="m-1"
            @click="confirm"
            >수정하기</b-button
          >
        </b-form>
      </b-card>
    </b-col>
  </b-container>
</template>

<script>
// import http from "@/util/rest-http-common";
import { mapActions } from "vuex";
export default {
  name: "UserInfo",
  created() {
    this.user = this.$store.state.user;
    console.log(this.user);
  },
  data() {
    return {
      user: null,
      changable: true,
    };
  },
  methods: {
    ...mapActions(["updateUserInfo", "deleteUser"]),
    changeInfo() {
      this.changable = !this.changable;
      console.log(this.changable);
    },
    async confirm() {
      // 모든 confirm함수에 애로우펑션으로 변경 필요.
      await this.updateUserInfo(this.user).then((response) => {
        if (response.status == 200) {
          alert("화원정보 수정 완료");
          this.changeInfo();
        } else {
          alert("화원정보 수정 실패");
        }
        console.log(response);
      });
    },
    async deleteUserId() {
      await this.deleteUser(this.user.id).then((response) => {
        if (response.status == 200) {
          alert("계정 삭제 완료");
          this.$router.push({ name: "home" });
        } else {
          alert("계정 삭제 실패");
        }
      });
    },
  },
};
</script>

<style></style>
