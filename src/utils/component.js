export function parseChildrenStrings(children) {
  if (Array.isArray(children)) {
    return children.map(parseChildrenStrings).join(' ');
  }

  return children
    ? children.props
      ? children.props.children
        ? Array.isArray(children.props.children)
          ? children.props.children.map(parseChildrenStrings).join(' ')
          : typeof children.props.children === 'object'
          ? parseChildrenStrings(children.props.children)
          : children.props.children
        : ''
      : ''
    : '';
}
