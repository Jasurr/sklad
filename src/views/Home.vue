<template>
  <el-container>
    <el-main>
      <el-dialog width="40%" :title="title + ' good'" :visible.sync="visible">
        <div v-if="title === 'Edit'">
          <set-goods @visible="visible = false" :form="formData"></set-goods>
        </div>
        <div v-else>
          <create-good @visible="visible = false"></create-good>
        </div>
      </el-dialog>
      <el-card class="el-col-sm-offset-2 el-col-20">
        <el-table max-height="500" :data="getData">
          <el-table-column label="Date" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{
                $moment(scope.row.date).format("DD.MM.YYYY")
              }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Name" prop="name" />
          <el-table-column label="Price" prop="price" />
          <el-table-column label="Quantity" prop="quantity" />
          <el-table-column label="Amount" prop="amount" />
          <el-table-column align="right">
            <template slot="header">
              <el-button
                type="primary"
                icon="el-icon-plus"
                size="mini"
                circle
                @click="createGood()"
              ></el-button>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                icon="el-icon-edit"
                circle
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
              ></el-button>
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                circle
                @click="handleDelete(scope.$index, scope.row)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import SetGoods from "./UpdateGood";
import CreateGood from "./CreateGood";

export default {
  components: {
    SetGoods,
    CreateGood
  },
  data() {
    return {
      search: "",
      title: "Create",
      visible: false,
      formData: {}
    };
  },
  computed: {
    getData() {
      return this.$store.getters.getData;
    }
  },
  methods: {
    createGood() {
      this.formData = "";
      this.title = "Create";
      this.visible = true;
    },
    handleEdit(index, row) {
      this.title = "Edit";
      this.visible = true;
      this.formData = row;
    },
    handleDelete(index, row) {
      this.$store.dispatch("removeGood", row);
    }
  }
};
</script>

<style scoped>
el-table {
  width: 100%;
}
</style>