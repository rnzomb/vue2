<script> 
import TextInput from "@/components/input/TextInput"
export default {
  name: "EmailInput",
  extends: TextInput,
  props: {
    type: {
      type: String,
      required: false,
      default: 'email'      
    }
  }
}
</script>