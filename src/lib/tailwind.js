// lib/tailwind.js
import { create } from 'twrnc'

const twrnc = create(require(`../../tailwind.config.js`))
const tw = twrnc.style
export default tw
