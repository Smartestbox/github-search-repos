import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    ref={ref}
    {...props}
  >
    <rect width={32} height={32} fill="#fff" fillOpacity={0.36} rx={8} />
    <path
      fill="#fff"
      d="M16 8.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0 8.333c5 0 7.5 2.72 7.5 4.792V23.1a.4.4 0 0 1-.4.4H8.9a.4.4 0 0 1-.4-.4v-1.475c0-2.072 2.5-4.792 7.5-4.792Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo
