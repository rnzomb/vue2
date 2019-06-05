<script> 
import TextInput from "@/components/input/TextInput"
export default {
  name: "DateInput",
  extends: TextInput,
  props: {
    type: {
      type: String,
      required: false,
      default: 'date'      
    }
  }
}
</script>