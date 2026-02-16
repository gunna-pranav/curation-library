export function handleError(error: any): string {
  if (error?.message) {
    return error.message
  }
  
  if (error?.response?.data?.message) {
    return error.response.data.message
  }
  
  return 'An unexpected error occurred'
}

export function logError(context: string, error: any) {
  console.error(`[${context}]`, error)
}
