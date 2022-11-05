
import { 
  Create,
  SimpleForm,
  
TextInput,
} from "react-admin";

// ------------------------------------------------

export default function CreatePostMo2men(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="body" variant="outlined"   />
<TextInput source="title" variant="outlined"   />

        </SimpleForm>
      </Create>
    );
  }
