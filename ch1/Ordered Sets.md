---
tags:
  - 140A
  - ch1
---
Let $A$ be a nonempty set. Then $A$ is an ordered set if there is a relation on $A$ denoted by "<" that satisfies:
1. (*Trichotomy*) $\forall x,y \in a$ exactly one of the following holds:
	1. $x < y$ or $x > y$ or $x = y$
2. (*Transitivity*) $\forall x,y,z \in A, x < y \wedge y < z \implies x <z$

#### Examples:
An ordered set $A$ need not be $A \subset \mathbb{R}$. 
- $(\mathbb{Z}, <)$ 
- $(\mathbb{Q}, <)$
- $(\mathbb{Z}^{2}, <)$ where "<" is the dictionary ordering. 
	- $(m,n) < (m',n') \iff$ either $m < m' \vee (m = m' \wedge n < n')$. Check first position, then second position. 
	- Thus, $(0, 1) < (0, 2)$. 

# Notation
$$
x \leq y
$$
means $x < y \vee x = y$. 
$$
x > y
$$
means $y < x$. 


# Bounded Above
Let $A$ be an ordered set. Let $B \subset A, B = \emptyset$. Then we say $B$ is **bounded above** if $\exists a \in A$ such that $\forall b \in B, b \leq a$. 

If $B \subset A, B \neq \emptyset$ is bounded above, then every $a \in A$ satisfies the definition, and is called an **upper bound** for $B$. 
```
                a------)
<-----(-----(---)------)---->
      A     B   B      A
```

