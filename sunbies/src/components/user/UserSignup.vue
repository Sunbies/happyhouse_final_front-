<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>회원가입</h3></b-alert>
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
              required
              placeholder="아이디 입력...."
              @keyup.enter="confirm"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="비밀번호:" label-for="userPw">
            <b-form-input
              id="userPw"
              v-model="user.pw"
              required
              placeholder="비밀번호 입력...."
              @keyup.enter="confirm"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="이름:" label-for="userName">
            <b-form-input
              id="userName"
              v-model="user.name"
              required
              placeholder="사용자명 입력...."
              @keyup.enter="confirm"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="주소:" label-for="userAddress">
            <b-form-input
              id="userAddress"
              v-model="user.address"
              required
              placeholder="주소지 입력...."
              @keyup.enter="confirm"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="전화번호:" label-for="userPhonenumber">
            <b-form-input
              id="userPhoneNumber"
              v-model="user.phonenumber"
              required
              placeholder="전화번호 입력...."
              @keyup.enter="confirm"
            ></b-form-input>
          </b-form-group>
          <b-button type="button" variant="primary" class="m-1" @click="confirm"
            >회원가입</b-button
          >
        </b-form>
      </b-card>
    </b-col>
  </b-container>
</template>

<script>
import http from "@/util/http-common";
export default {
  name: "UserSignup",
  data() {
    return {
      user: {
        id: "",
        pw: "",
        name: "",
        address: "",
        phonenumber: "",
      },
    };
  },
  methods: {
    // 회원가입 요청
    async confirm() {
      const data = {
        id: this.user.id,
        pw: this.user.pw,
        name: this.user.name,
        address: this.user.address,
        phonenumber: this.user.phonenumber,
      };
      let isregestered = false;
      await http.put("/memberapi/register", data).then(function (response) {
        // console.log(response.data);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
        console.log(response);
        if (response.status == 200) {
          alert("화원가입 완료");
          isregestered = true;
        } else {
          alert("화원가입 실패");
        }
      });
      if (isregestered) {
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>

<style></style>
