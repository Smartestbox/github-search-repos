import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#fff"
      d="M17.5 8.002c0 4.687-7.5 8.665-7.5 8.665s-7.5-3.978-7.5-8.665c0-1.017.41-1.993 1.14-2.712a3.925 3.925 0 0 1 2.754-1.123c1.63 0 3.025.874 3.606 2.272.581-1.398 1.977-2.272 3.606-2.272 1.033 0 2.023.404 2.753 1.123.73.72 1.141 1.695 1.141 2.712Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo
