<script> 
import TextInput from "@/components/input/TextInput"
export default {
  name: "NumberInput",
  extends: TextInput,
  props: {
    type: {
      type: String,
      required: false,
      default: 'number'      
    }
  }
}
</script>