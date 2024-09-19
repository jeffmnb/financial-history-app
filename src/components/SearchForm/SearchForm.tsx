import { useDevice } from "../../hooks/useDevice"
import { Button } from "../Button"
import { Input } from "../Input"
import { S } from "./SearchForm.styles"
import { FormSearchType, SearchFormProps } from "./SearchForm.types"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSearchSchema } from "./SearchForm.utils"

export const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const { isMobile } = useDevice()

  const {
    handleSubmit,
    formState: {
      isValid,
      isSubmitting,
      isSubmitted,
      errors: { query },
    },
    getValues,
    reset,
    control,
  } = useForm<FormSearchType>({
    resolver: zodResolver(formSearchSchema),
  })

  const handleSearch = async () => {
    onSubmit({ query: getValues().query }).finally(() => {
      reset()
    })
  }

  return (
    <S.Container>
      <Controller
        name="query"
        control={control}
        render={({ field }) => {
          const { ref, ...restField } = field
          return (
            <Input
              {...restField}
              messageError={isSubmitted ? query?.message : ""}
              disabled={isSubmitting}
              itemRef={ref.name}
              value={field.value || ""}
              onChange={({ target }) =>
                field.onChange((target as HTMLInputElement).value)
              }
              placeholder="Busque uma transação"
            />
          )
        }}
      />
      <Button
        variant="secondary"
        iconOnly={isMobile}
        text="Buscar"
        onClick={handleSubmit(handleSearch)}
        disabled={isSubmitting || !!query?.message || !isValid}
      />
    </S.Container>
  )
}
