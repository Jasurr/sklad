<template>
  <el-container>
    <el-main>
      <el-form ref="form" :model="form" label-width="120px" :rules="rules">
        <el-form-item label="Name of good:" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Price:" prop="price">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="Quantity:" prop="quantity">
          <el-input-number
            v-model="form.quantity"
            :min="1"
            :max="100"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Shelf life">
          <el-date-picker
            v-model="form.date"
            align="right"
            placeholder="Pick a day"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Amount:" prop="amount">
          <el-input v-model="form.amount" readonly></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="el-col-lg-push-20"
            type="primary"
            @click="submitForm('form')"
            >Save
          </el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  props: ["form"],
  data() {
    return {
      rules: {
        name: [{ required: true, message: "Name is required" }],
        price: [{ required: true, message: "Price is required" }],
        quantity: [
          { required: true, message: "Quantity is required" },
          { type: "number", message: "Quantity must be a number" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch("update", this.form);
          this.$emit("visible");
        } else {
          this.$message.error("Oops, Fill all required fields.");
          return false;
        }
      });
    }
  },
  updated() {
    this.$nextTick(function() {
      this.form.amount = this.form.quantity * this.form.price;
    });
  }
};
</script>

<style scoped></style>
