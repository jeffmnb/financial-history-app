import * as zod from "zod"
import { formSearchSchema } from "./SearchForm.utils"

export type SearchFormProps = {
  onSubmit: ({ query }: FormSearchType) => Promise<void>
}

export type FormSearchType = zod.infer<typeof formSearchSchema>
