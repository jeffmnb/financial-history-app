import * as zod from "zod"

export const formSearchSchema = zod.object({
  query: zod.string().min(2, "Busca muito curta."),
})
