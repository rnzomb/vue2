<script> 
import TextInput from "@/components/input/TextInput"
export default {
  name: "PhoneInput",
  extends: TextInput,
  props: {
    type: {
      type: String,
      required: false,
      default: 'tel'      
    }
  }
}
</script>