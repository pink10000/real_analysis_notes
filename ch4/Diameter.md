---
tags:
  - 140A
  - ch4
---
# Definition 
Let $A \subset X$. Then 

$$
\diam(A) := \sup\{d(x, y) \mid x,y \in A\}
$$

## Remark 
This generalizes the diagonal from [[Heine-Borel Theorem]]. 

## Remark (Boundedness)
We have that $\forall x,y \in A, d(x,y) \in \R$. So, 

$$
B = \{d(x, y \mid x,y \in A\}\subset \R
$$

If it is **unbounded**, then 

$$
\diam(A) = \sup\{d(x,y) \mid x,y \in A\} = + \infty
$$

## Remark ([[Cauchy Sequences]])
Let $(p_{n})$ be a [[Cauchy Sequences|Cauchy Sequence]]. Let $\varepsilon > 0$. Then $\exists N \in \N$ such that $\forall n \geq N$, $d(p_{n},p_{m})< \varepsilon$. That is, if

$$
A_{N} := \{p_{n}\mid n \geq N\} = \{p_{N+1}, p_{N+2}, \cdots\}
$$

If $x,y \in A_{N}$, then $d(x,y) < \varepsilon$, such that it is an upper bound. Then

$$
\diam(A_{N}) \leq \varepsilon
$$

We note that 

$$
A_{1}\supset A_{2} \supset A_{3} \supset \cdots
$$

and $\forall \varepsilon > 0, \exists N \in \N$ such that $\diam(A_{N}) \leq \varepsilon$. Indeed, this implies

$$
\inf_{N\in\N} \diam(A_{N}) = 0
$$

### Lemma (Cauchy - Diameter)
$(p_{n})$ is [[Cauchy Sequences|Cauchy]] $\iff$ $\inf_{N}\diam(A_{N}) = 0$. This is proven from before.

# Lemma 
Let $A \subset X$ be nonempty. 
1. $\diam(A) = \diam(\ovl{A})$
2. Let $K_{1} \supset K_{2} \supset \cdots$, be nonempty nested [[Compact Sets]]. Assume $\diam(K_{n})\to_{n\to\infty} 0$. Then 
$$
\bigcap_{n=1}^{\infty}K_{n} = \{p\}
$$


Proof:
Note that since $A \subset \ovl{A}$ we have 

$$
\{d(x, y) \mid x,y \in A\} \subset \{d(x,y) \mid x,y \in \ovl{A}\}
$$

which implies $\diam(A) \leq \diam(\ovl{A})$. More generally, $A \subset B \implies \diam(A) \leq \diam(B)$. In particular, $\diam(A) = \infty \implies \diam(\ovl{A}) = \infty$ and so suppose $\diam(A) < \infty$. 

Then we want to show that $\forall \varepsilon > 0,$

$$
\diam(\ovl{A}) \leq \varepsilon + \diam(A)
$$

To see this, let $\varepsilon > 0$. By definition of $\ovl{A}$, we have that $\forall p, q \in \ovl{A}, \exists p', q' \in A$ such that 

$$
d(p, p') < \varepsilon/2 \quad\quad\quad d(q, q') < \varepsilon / 2
$$

then that implies 

$$
\begin{aligned}
d(p, q) 
&\leq d(p, p') + d(p', q') + d(q', q) \\ 
&\leq \varepsilon + d(p', q') \\
&\leq \varepsilon + \diam(A)
\end{aligned}
$$

Then by the [[Supremum]], we get

$$
\diam(\ovl{A}) \leq \varepsilon + \diam(A)
$$

Therefore $\diam(A) = \diam(\ovl{A})$. 

For the *second part*, suppose $(k_{n})$ are decreasing nonempty [[Compact Sets]] where

$$
\bigcap_{n \in \N} k_{N} \neq \emptyset
$$

For contradiction, suppose there are at least two points. That is, we have $q,p$ and $q \neq p$. Then $p,q \in k_{n}$ for some $n \in \N$. We see that 

$$
\diam(k_{n}) \geq d(p, q) > 0
$$

We use the fact that $\diam(k_{N}) \to 0$ since each $k$ is a subset, so the [[Diameter]] must be decreasing. Let $\varepsilon = d(p, q) > 0$ since $p \neq q$. Then $\exists N \in \N$ where 

$$
d(p, q) = \varepsilon > \diam(k_{N}) \geq d(p, q)
$$

and so we have a contradiction. 