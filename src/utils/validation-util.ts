import { Schema, ValidationOptions } from 'joi';

const validateRequest = (schema: Schema, request: any) => {
  const validationOptions: ValidationOptions = {
    abortEarly: false,
    allowUnknown: false,
    errors: {
      wrap: {
        label: false,
      },
    },
  };

  const validationResult = schema.validate(request, validationOptions);

  if (validationResult.error) {
    throw validationResult.error;
  } else {
    return validationResult.value;
  }
};

export { validateRequest };
