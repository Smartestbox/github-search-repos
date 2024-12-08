import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
  props: SVGProps<SVGSVGElement> & { active?: boolean },
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
      fill={props.active ? '#D44333' : '#fff'}
      stroke={props.active ? '#D44333' : "#3A3A3A"}
      strokeWidth={1.5}
      d="M25 13.602C25 19.227 16 24 16 24s-9-4.773-9-10.398c0-1.22.492-2.39 1.369-3.254A4.71 4.71 0 0 1 11.673 9c1.955 0 3.63 1.05 4.327 2.727C16.698 10.05 18.372 9 20.327 9a4.71 4.71 0 0 1 3.304 1.348A4.567 4.567 0 0 1 25 13.602Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo
