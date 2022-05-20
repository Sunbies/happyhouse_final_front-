<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>비밀번호 찾기</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-card class="text-center mt-3" style="max-width: 40rem" align="left">
          <b-form class="text-left">
            <b-form-group label="아이디:" label-for="userId">
              <b-form-input
                id="userid"
                v-model="user.id"
                required
                placeholder="아이디 입력...."
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="이름:" label-for="userName">
              <b-form-input
                id="userpwd"
                v-model="user.name"
                required
                placeholder="이름 입력...."
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="전화번호:" label-for="userPhonenumber">
              <b-form-input
                id="userpwd"
                v-model="user.phonenumber"
                required
                placeholder="전화번호 입력...."
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-button
              type="button"
              variant="primary"
              class="m-1"
              @click="confirm"
              >비밀번호 찾기</b-button
            >
          </b-form>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import http from "@/util/http-common";
export default {
  name: "UserFindPassword",
  data() {
    return {
      user: {
        id: "",
        name: "",
        phonenumber: "",
      },
    };
  },
  methods: {
    async confirm() {
      // let isregestered = false;
      await http
        .get(
          `/memberapi/findPw/${this.user.id}/${this.user.name}/${this.user.phonenumber}`
        )
        .then(function (response) {
          // console.log(response.data);
          // console.log(response.status);
          // console.log(response.statusText);
          // console.log(response.headers);
          // console.log(response.config);
          console.log(response);
          if (response.status == 200) {
            alert("비밀번호 찾았다~");
            alert(response.data.pw);
            console.log(response.data);
            // isregestered = true;
          } else {
            alert("없는 정보입니다. 실패");
          }
        });
    },
    movePage() {
      this.$router.push({ name: "SignUp" });
    },
  },
};
</script>

<style></style>
