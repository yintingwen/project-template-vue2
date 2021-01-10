import Vue from 'vue'
import {
  Row,
  Col,
  Button,
  Dialog,
  Form,
  FormItem,
  Message,
  Input,
  Select,
  Option,
  Table,
  TableColumn,
  Pagination
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small' }
Vue.prototype.$message = Message
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Col)
