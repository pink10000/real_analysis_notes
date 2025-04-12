---
tags:
  - 140A
  - ch2
---
# Separated Sets
Two subsets $A,B$ of [[Metric Space]] $X$ are said to be **separated** if both $A \cap \ovl{B}$ and $\ovl{A} \cap B$ are empty. 

# Connected Sets
A set $E \subset X$ is said to be **connected** if $E$ is *not* a union of two nonempty separated sets.

## Proposition (Connectedness in $\R$)
Let $C \subset (\R, d)$. Then $C$ is connected if and only if $\forall x, y \in C$ and $z \in (x, y)$, we have that $z \in C$, 
such that $C$ is an interval.
### Proof:
$(\implies)$
Suppose $C$ is connected. We want to show that $z \in C$. We prove by contradiction. Suppose $\exists x,y \in C$ and $x < z < y$ but $z \not \in C$. Then 

$$
C = (C \cap (- \infty, z)) \cup (C \cap (z, \infty))
$$

where LHS is $A$ and RHS is $B$. But then $C$ is not connected and thus a contradiction. 

$(\impliedby)$
TODO

# Remark 
$A,B$ separated $\implies$ $A,B$ are disjoint. The opposite need not happen. 