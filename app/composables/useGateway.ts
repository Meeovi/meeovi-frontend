
export function useGateway() {
  const content = useSdkContentAdapter()

  return {
    content,
  }
}

export default useGateway