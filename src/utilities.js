const getErrors = function getGraphQLInputErrors(response) {
  try {
    // eslint-disable-next-line no-unused-vars
    const { code, exception: _, ...errors } = response.graphQLErrors[0].extensions
    if (code !== 'BAD_USER_INPUT') return {}

    const err = [];
    const keys = Object.keys(errors);

    keys.forEach((key) => err[key] = errors[key][0]);

    return err;
  } catch (error) {
    return {};
  }
}

export { getErrors };
