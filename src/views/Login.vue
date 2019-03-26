<template>
  <el-container>
    <el-main class="el-col-offset-8 el-col-8">
      <el-card class="el-col-12" justify="center">
        <div slot="header" class="clearfix">
          <span>Login page</span>
        </div>
        <el-form
          :model="form"
          ref="dynamicValidateForm"
          label-width="120px"
          class="demo-dynamic"
          :rules="formRules"
        >
          <el-form-item prop="email" label="Email">
            <el-input autofocus  v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              type="password"
              v-model="form.password"
              @keyup.enter="alert(1)"
              autocomplete="off"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('dynamicValidateForm')"
              class="el-col-lg-push-16"
              >Submit</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      formRules: {
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ],
        password: [{ required: true, message: "Enter password" }]
      }
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    userLogin() {
      return this.$store.getters.userLogin;
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store
            .dispatch("login", this.form)
            .then(() => {
              this.$router.push("/");
            })
            .catch(err => this.$message.error("Error, " + err));
        } else {
          this.$message.error("Error, Fill all field");
          return false;
        }
      });
    }
  },
  created() {
    if (this.$route.query["loginError"]) {
      this.$message.error("Please log in to access this page.");
    }
  }
};
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
