---
tags:
  - 140A
  - ch3
---
# Definition 
Let $(X, d)$ be a [[Metric Space]] and let $\emptyset \neq Y \subset X$. Then $(Y, d|_{Y})$ is a metric space. Indeed the axioms for a metric space hold in the subset.

# Definition (Open/Closed Relative)
A subset $A \subset Y$ is said to be **open relative to $Y$** if $A$ is open in the metric space $(Y, d)$. Similarly, $A \subset Y$ is said to be **closed relative to $Y$** if $A$ is closed in the [[Metric Space]]. 

## Example 1:
Open rel $Y$ could be different than open in $X$. 

Consider $\R$ with the standard metric, $Y = (0, 1] \neq \emptyset$, $A = (1/2, 1]$. $A$ is not open in $X$. However, $A$ is open relative to $(0, 1]$. Indeed, if $x \in (1/2, 1)$, then $\exists r>0$ such that 

$$
(x -r, x + r) \subset (1/2, 1) \subset (1/2, 1] = Y
$$

The remaining case is when $x = 1$. Then $(1/2, 1] = N_{1/2}(1)$ in $Y$ since the neighborhood only samples points in $Y$.  So, $\{y \in Y \mid |y - 1| < 1/2\} = N_{1/2}(1)$ and it is open. 
## Remark (Relative Neighborhood)
Indeed, 
$$
N_{1/2}(1) = (1/2, 1] = \{y \in Y \mid |y - 1| < 1/2\} = \{x \in X \mid |y - 1| < 1/2\} \cap X
$$

## Remark (More Generally)
Let $(X,d)$ be a [[Metric Space]]. Then $\emptyset \neq Y \subset X$ and $p \in Y$ and $r > 0$. So, 

$$
\begin{aligned}
N_{r}^{Y}(p) 
&:= \{y \in Y \mid d(y, p) < r \} \\
&= \{x \in X \mid d(x, p) < r\} \cap Y \\
&= N_{r}^{X}(p) \cap Y
\end{aligned}
$$

# Lemma (Open/Closed by Above) 
Let $\emptyset \neq Y \subset X$ and $A \subset Y$. 
1. $A$ is open rel $Y$ $\iff \exists O \subset X$ that is open such that $A = O \cap Y$.
2. $A$ is closed rel $Y \iff \exists F \subset X$ closed such that $A = F \cap Y$. 
### Proof (1):
Find $O$ that is open in $X$ such that $A = O \cap Y$. 
- If $A = \emptyset$, then we are done.
- If $A \neq \emptyset$, then $\forall p \in A, \exists r_{p}> 0$ such that 

$$
p \in N_{r_{p}}^{Y} = \{y \in Y \mid d(p, y) < r_{p}\} \subset A
$$

Recall that that this is equal to $N_{r_{p}}^{X}(p) \cap Y$ from the [[Induced Metric Space#Remark (More Generally)|remark]]. Now, let

$$
O = \bigcup_{p \in A}N_{r_{p}}^{X}(p)
$$

Note $O$ is a union of open sets in $X$ so it is open in $X$ by this [[Metric Space#Lemma (Openness and Closure)|lemma]]. Also note that $O \cap Y \subset A$
. Indeed, 

$$
\begin{aligned}
O \cap Y 
&= \left( \bigcup_{p \in A}N_{r_{p}}^{X}(p) \right) \cap Y \\
&= \bigcup_{p \in A} \left( N_{r_{p}}^{X}(p)\cap Y \right) \\
&= \bigcup_{p \in A} N_{r_{p}}^{Y}(p)
&\!\!\!\!\subset A
\end{aligned}
$$

The second inequality comes from DeMorgan's Law. 

For the reverse direction, we have that $A \subset O \cap Y$ because $\forall p \in A \subset Y, p \in N_{r_{p}}^{X}(p)$ such that $p \in O$. Thus, $O$ is open in $X$ and $O \cap Y = A$

### Proof (2):
TODO


# Lemma (Bounded)
Let $A \subset \R$ be nonempty and bounded. Then by the [[Fields#Theorem (Completeness of $ mathbb{R}$)|Axiom of Completeness]] we have that $\sup(A) \in \ovl{A}$ and $\inf(A) \in \ovl{A}$.
[[Supremum]] and [[Infimum]]

Proof:
If $\sup(A) \in A$, then $\sup A \in \ovl{A}$ as $\ovl{A} = A \cup A'$. Assume $\sup(A) \not\in A$. Let $\ell := \sup(A), r > 0$. 

Goal:
WTS $N_{r}(\ell) \backslash \{\ell\} \cap A \neq \emptyset$. But this is equivalent to $((\ell - r, \ell + r) \backslash \{\ell\}) \cap A = \emptyset$. Now, $\ell = \sup(A)$ where $\ell - r < \ell$. So $\ell - r$ cannot be an upper bound for $A$. So, $\exists a \in A$ such that $\ell - r < a< \ell$ because $\ell \not\in A, a \in A$  so $a < \ell$. 
```
 (-------|--o-----)
l-r      a  l    l+r
```
$\implies a \in (\ell - r, \ell + r)$ and as $a \in A$, really, $a \in (\ell - r, \ell + r)\cap A$ and $a \neq \ell$. 
$\implies \ell \in A' \implies \ell \in \ovl{A}$ 

If $\inf(A) \in A$ then $\inf(A) \in \ovl{A}$. Suppose otherwise, $\inf(A) \not\in A$. Let $\ell = \inf(A)$ for $r > 0$. Then 

$$
\ell < \ell + r
$$

so $\ell + r$ cannot be a lower bound for $A$. Indeed, $\exists a\in A$ where $\ell < a < \ell + r$. 
$\implies a \in (\ell - r, \ell + r) \cap A, a \neq \ell$ 
$\implies \ell \in A' \implies \ell \in \ovl{A}$ 

