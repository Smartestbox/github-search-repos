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
    <rect
      width={31}
      height={31}
      x={0.5}
      y={0.5}
      stroke="#3A3A3A"
      strokeOpacity={0.12}
      rx={7.5}
    />
    <path
      stroke="#3A3A3A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17.348 21.017-1.878 1.878a4.5 4.5 0 0 1-6.364-6.364l1.836-1.837m3.752-3.751 1.836-1.837a4.5 4.5 0 1 1 6.364 6.364l-1.878 1.878m-7.897 1.534 5.829-5.83"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo
