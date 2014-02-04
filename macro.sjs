macro ?. {
  rule infix {
    $lhs:expr | $rhs:expr
  } => {
    $lhs && $lhs.$rhs 
  }
}

export ?.;