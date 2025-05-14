---
tags:
  - 140B
  - ch7
---
# Definition (Pointwise Bounded)
A sequence of functions $f_{n} : E \to \C$ is **pointwise bounded** if $\forall x \in E, \{f_{n}\}_{n \geq 1}$ is a bounded [[Sequences|sequence]] where $\exists M_{x}$ such that $|f_{n}(x)| \leq M_{x}$. 
> This is dependent on $x$. Meaning, there needs to be a particular $M$ for each $x \in E$. 

# Definition (Uniformly Bounded)
A sequence of functions $f_{n} : E \to \C$ is **uniformly bounded** if $\exists M$ such that $|f_{n}(x)| \leq M$ for any $x\in E$. 
> This $M$ must be true for all $x \in E$. 

## Corollary (Uniformly Bounded is Pointwise Bounded)
Uniformly bounded implies pointwise bounded, but not necessarily the converse. 

### Example 1
For example, let 
$$
f_{n}(x) = x \quad\quad\quad E = \R
$$
The sequence is pointwise bounded by $x + 1$ for each $n$, but not uniformly bounded. 
### Example 2 
Let $f_{n}(x) = n$ over $E = [0, 1]$. The sequence is not *pointwise bounded*, and so it is not *uniformly bounded*, but every $f_{n}$ is *bounded*. 
### Example 3 
Let $f_{n}(x) = \sin(nx)$ over $E = [0, 1]$. This sequence is uniformly bounded by $1$ and thus pointwise bounded by $1$. 



