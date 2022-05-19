import { useRouter } from 'next/router'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import React, { Children } from 'react'

type ActiveLinkProps = LinkProps & {
  children: React.ReactElement;
  activeClassName: string
}

const ActiveLink = ({ children, activeClassName, ...props }: ActiveLinkProps) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link href={props.href} {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default ActiveLink