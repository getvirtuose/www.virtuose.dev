import { useEffect } from "react"
import lottie from "lottie-web"

export function useLottie(
  ref: React.RefObject<HTMLDivElement>,
  data: any
) {
  useEffect(() => {
    if (!ref.current?.hasChildNodes())
      lottie.loadAnimation({
        //@ts-ignore
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: data,
      })
  }, [])
}
