<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>회원가입</h3></b-alert>
      </b-col>
    </b-row>
    <b-col></b-col>
    <b-col class="d-flex justify-content-center">
      <b-card
        class="text-center mt-3"
        style="width: 40rem; max-width: 40rem"
        align="left"
      >
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
              v-model="user.password"
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
          <b-form-group label="핸드폰번호:" label-for="userPhonenumber">
            <b-form-input
              id="userPhoneNumber"
              v-model="user.phone"
              required
              placeholder="핸드폰번호 입력...."
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
import { mapActions } from "vuex";
import http from "@/util/http-common";

const memberStore = "memberStore";

export default {
  name: "UserSignup",
  data() {
    return {
      user: {
        id: "",
        password: "",
        name: "",
        phone: "",
      },
    };
  },
  methods: {
    ...mapActions(memberStore, ["userSignUp", "getUserInfo"]),
    // 회원가입 요청
    async confirm() {
      const data = {
        id: this.user.id,
        password: this.user.password,
        name: this.user.name,
        isadmin: "0",
        phone: this.user.phone,
      };
      console.log("memberSignup 요청보내기전의 data");
      console.log(data);
      // memberStore에 action요청하기
      await http.post("/member", data).then((response) => {
        if (response.data.message == "success") {
          alert("회원가입 완료했습니다.");
          this.$router.push({ name: "home" });
        } else {
          alert("회원가입에 실패했습니다.");
          this.resetInput();
        }
      });
    },
    resetInput() {
      this.user.id = "";
      this.user.password = "";
      this.user.name = "";
      this.user.phone = "";
    },
  },
};
</script>

<style></style>
