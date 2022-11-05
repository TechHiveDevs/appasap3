
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
} from "react-admin";

// ------------------------------------------------

export default function ShowPostMo2men(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="body" />
<TextField source="title" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}