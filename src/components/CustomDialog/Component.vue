<template>
  <el-dialog
    class="custom-dialog"
    top="0"
    :class="{ 'hidden-title': hiddenTitle }"
    :visible="showVar"
    :width="width"
    :show-close="showClose"
    :center="center"
    @close="handleDialogClose"
  >
    <!-- 头部 -->
    <slot slot="title" name="title">
      <div class="custom-dialog-title" v-if="!hiddenTitle">123</div>
    </slot>
    <!-- 主体 -->
    <slot>
      <div class="custom-dialog-body">
        <i class="icon el-icon-warning" :style="{ color: confirmIconColor }" />
        <div v-html="message" class="message"></div>
      </div>
    </slot>
    <!-- 底部 -->
    <slot name="footer" slot="footer">
      <div slot="footer" class="custom-dialog-footer">
        <el-button size="small" @click.stop="handleClickCancel">取消</el-button>
        <el-button size="small" :type="confirmType" :plain="confirmPlain" @click.stop="handleClickConfirm">
          {{ confirmText }}
        </el-button>
      </div>
    </slot>
  </el-dialog>
</template>

<script>
export default {
  name: 'CustomDialog',
  props: {
    // 宽度
    width: { type: String },
    // 组件形式控制是否显示
    visible: { type: Boolean },
    // 类型
    type: { type: String, default: 'delete' },
    // 内容, 支持html
    message: { type: String },
    // 隐藏title
    hiddenTitle: { type: Boolean },
    // 显示关闭icon
    showClose: { type: Boolean, default: true },
    // 是否采用中间布局
    center: { type: Boolean, default: false },
    // 确认框感叹号图标颜色
    confirmIconColor: { type: String, default: '' },
    // 确定按钮变量
    confirmPlain: { type: Boolean, default: false }, // 是否镂空
    confirmType: { type: String, default: 'primary' }, // 按钮类型
    confirmText: { type: String, default: '确定' } // 按钮文字
  },
  data () {
    return {
      resolve: null,
      reject: null,
      selfVisible: false,
      isTag: true
    }
  },
  computed: {
    showVar () {
      return this.isTag ? this.visible : this.selfVisible
    }
  },
  methods: {
    handleDialogClose (confirm = false) {
      if (this.isTag) {
        return this.$emit('update:visible', false)
      }
      this.close(confirm)
    },
    handleClickCancel () {
      this.handleDialogClose()
    },
    handleClickConfirm () {
      this.handleDialogClose(true)
    },
    close (confirm) {
      this.selfVisible = false
      if (confirm) {
        this.resolve && this.resolve()
      } else {
        this.reject && this.reject('dialog已取消')
      }
    },
    show () {
      this.selfVisible = true
    }
  }
}
</script>
<style lang='scss' scoped>
.custom-dialog {
  display: flex;
  align-items: center;
  justify-content: center;

  &.hidden-title {
    ::v-deep .el-dialog__header {
      display: none;
    }
  }

  .custom-dialog-title {
    font-size: 16px;
    font-weight: 500;
    padding-left: 40px;
    line-height: 60px;
    text-align: left;
    color: rgba(0, 0, 0, 0.85);
  }

  .custom-dialog-body {
    padding: 37px 40px 18px;
    text-align: center;

    > .icon {
      font-size: 54px;
      margin-bottom: 29px;
    }

    > .message {
      line-height: 22px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
    }
  }

  .custom-dialog-footer {
    height: 100%;
    padding-right: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>

<style lang="scss">
.custom-dialog {
  text-align: left;
  margin: 0 auto;

  .el-dialog__body {
    background-color: #f8f8f8;
    padding: 0;
  }

  .el-dialog__header,
  .el-dialog__footer {
    background-color: #fff;
    padding: 0;
    height: 60px;
  }
}
</style>
