<template>
  <div>
    <!-- <b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button> -->
    <b-sidebar
      id="sidebar-right"
      title="Sidebar"
      right
      no-header
      bg-variant="secondary"
      backdrop="true"
      shadow
    >
      <div style="background-color: #f6f6f6">
        <a
          class="float-right px-3 py-2"
          v-b-toggle
          href="#sidebar-right"
          @click.prevent
        >
          <b-icon-x-square
            scale="1.5"
            style=""
            variant="dark"
          ></b-icon-x-square>
        </a>
        <b-navbar>
          <h3>
            <img
              style="margin-right: 10px; height: 40px"
              src="@/assets/user.svg"
              alt="Happy House"
            />dladndrbs
          </h3>
        </b-navbar>
      </div>
      <!-- <div style="background-color: darkblue">
           -->
      <div>
        <!-- <a>asdfsdf</a> -->
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.mypage-collapse variant="info"
                >마이페이지</b-button
              >
            </b-card-header>
            <b-collapse
              id="mypage-collapse"
              accordion="mypage-accordion"
              role="tabpanel"
            >
              <b-card-body class="mx-auto" style="padding: 0%; width: 78%">
                <b-card no-body>
                  <b-button block variant="info">로그인</b-button>
                </b-card>
              </b-card-body>
              <b-card-body class="mx-auto" style="padding: 0%; width: 78%">
                <b-card no-body>
                  <b-button block variant="info">회원가입</b-button>
                </b-card>
              </b-card-body>
              <b-card-body class="mx-auto" style="padding: 0%; width: 78%">
                <b-card no-body>
                  <b-button block variant="info">비밀번호 찾기</b-button>
                </b-card>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.commynity-collapse variant="info"
                >커뮤니티</b-button
              >
            </b-card-header>
            <b-collapse
              id="commynity-collapse"
              accordion="commynity-accordion"
              role="tabpanel"
            >
              <b-card-body class="mx-auto" style="padding: 0%; width: 78%">
                <b-card no-body>
                  <b-button block variant="info">공지사항</b-button>
                </b-card>
              </b-card-body>
              <b-card-body class="mx-auto" style="padding: 0%; width: 78%">
                <b-card no-body>
                  <b-button block variant="info">부동산 게시판</b-button>
                </b-card>
              </b-card-body>
              <b-card-body class="mx-auto" style="padding: 0%; width: 78%">
                <b-card no-body>
                  <b-button block variant="info">제테크 게시판</b-button>
                </b-card>
              </b-card-body>
              <b-card-body class="mx-auto" style="padding: 0%; width: 78%">
                <b-card no-body>
                  <b-button block variant="info">자유 게시판</b-button>
                </b-card>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.deal-collapse variant="info"
                >실거래가 조회</b-button
              >
            </b-card-header>
            <b-collapse
              id="deal-collapse"
              accordion="deal-accordion"
              role="tabpanel"
            >
              <b-card-body class="mx-auto" style="padding: 0%; width: 78%">
                <b-card no-body>
                  <b-button block variant="info">실거래가 조회</b-button>
                </b-card>
              </b-card-body>
              <b-card-body class="mx-auto" style="padding: 0%; width: 78%">
                <b-card no-body>
                  <b-button block variant="info">즐겨찾기</b-button>
                </b-card>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>

      <!-- <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="info"
              >Accordion 1</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >I start opened because <code>visible</code> is
                <code>true</code></b-card-text
              >
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="info"
              >Accordion 2</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="info"
              >Accordion 3</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div> -->
      <!-- <a
          class="float-right px-2 py-2"
          v-b-toggle
          href="#login-card"
          @click.prevent
        >
          <b-card>유저관리</b-card>
        </a>
        <b-collapse id="login-card" class="mt-2">
          <b-card>로그인</b-card>
        </b-collapse>
        <b-collapse id="register-card" class="mt-2">
          <b-card>회원가입</b-card>
        </b-collapse>
        <b-collapse id="findpw-card" class="mt-2">
          <b-card>비밀번호 찾기</b-card>
        </b-collapse> -->
      <!-- <div>
          <nav class="mb-3 float-right">
              <b-nav vertical>
                <b-nav-item active @click="hide">Active</b-nav-item>
                <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
                <b-nav-item href="#link-2" @click="hide"
                  >Another Link</b-nav-item
                >
              </b-nav>
            </nav>
          </div> -->
      <!-- px py는 공백주는거 -->
    </b-sidebar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
