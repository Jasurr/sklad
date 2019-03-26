<template>
  <el-container>
    <el-main class="el-col-offset-8 el-col-8">
      <el-card class="el-col-12" justify="center">
        <div slot="header" class="clearfix">
          <span>Registration page</span>
        </div>
        <el-form
          :model="form"
          ref="dynamicValidateForm"
          label-width="120px"
          class="demo-dynamic"
          :rules="formRules"
        >
          <el-form-item prop="email" label="Email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              type="password"
              v-model="form.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Confirm" prop="checkPass">
            <el-input
              type="password"
              v-model="form.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('dynamicValidateForm')"
              class="el-col-lg-push-16"
              >Submit
            </el-button>
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
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.form.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        email: "",
        password: "",
        checkPass: ""
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
        password: [{ required: true, message: "Enter password" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  computed: {
    error() {
      if (this.$store.getters.error) {
        return this.$message.error(this.$store.getters.error);
      }
      return null;
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch("registration", {
            email: this.form.email,
            password: this.form.password
          });
          if (!this.$store.getters.error) {
            this.$router.push("/");
          }
        } else {
          this.$message.error("Error, Fill all field");
          return false;
        }
      });
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
