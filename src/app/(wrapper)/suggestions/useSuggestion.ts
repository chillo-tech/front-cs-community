'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { suggestionSchema } from './suggestion-schema';

function useSuggestion() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(suggestionSchema),
  });


  const onSubmitHandler = (data: any) => {
    console.log({ data });
    //mutation.mutateAsync(tempObj);

    // reset();
  };

  const onInvalid = (errors: any) => console.error(errors);

  const handleSuggestionSubmit = handleSubmit(onSubmitHandler, onInvalid);

  return {
    register,
    handleSubmit,
    errors,
    handleSuggestionSubmit
  }
}

export default useSuggestion
