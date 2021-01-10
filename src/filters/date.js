import Vue from 'vue'
import { formatTimestamp } from '../utils/date'

Vue.filter(formatTimestamp.name, formatTimestamp)
