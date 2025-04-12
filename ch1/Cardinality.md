---
tags:
  - ch1
  - 140A
---

# Functions
If $A,B$ are non empty sets, then a function is an association of $A$ to $B$ denoted as 
$$f : A \to B$$
- $f$ is **injective** if $f(a_{1}) = f(a_{2}) \implies a_{1} = a_{2}$
- $f$ is **surjective** if $\forall b \in B, \exists a \in A, f(a) = b$ 
- $f$ is **bijective** if both of these properties are held. 

# Notation
If $\exists$ bijection $f : A \to B$, then we write $A \sim B$ (or $|A| = |B|$) and we say $A,B$ have the same **cardinality**. 

# Finite Sets
A **finite set** is a set $A$ such that $A \sim \{1, 2, \cdots, n\}$ for some $n \in \N$. 
- If a set $A$ is not finite, then it is called **infinite**. 
- If $A \sim \N$ then $A$ is called **countable**.
- $A$ is **uncountable** if it is neither finite nor countable. 
- $A$ is at **most countable** if $A$ is finite or countable. 

# Sequence
A **sequence** in set $X$ is a function $f: \N \to X$. Typically, we write $a_{n}$ or $x_{n}$ or $f_{n}$ for the $a(n), x(n), f(n)$ item in the sequence. 

## Lemma (Countability)
Let $A$ be an infinite set. The following are equivalent:
1. $A \sim \N$
2. $\exists f: A \to \N$ where $f$ is injective
3. $\exists g : \mathbb{N}\to A$ where $g$ is surjective

## Corollary (Structure in Subsets)
Any subset of a countable set is countable (Rudin 2.8).
- We have that $\N$ is countable. $f: \N\to \N$ is bijective, the identity map. 
- $\Z$ is countable. 
  $$
  f(n) = \begin{cases}n/2 & n \text{ even} \\ -(n-1)/2 & n \text{ is odd}\end{cases}
  $$
- $\Q = \{m/n \mid m,n \in \Z, n > 0, \gcd(n,m) = 1\}$  is countable. 
	- We find an injection from $\Q \to \Z$. Let $h : \Q \to \Z$ where
	  $$
	  h(m/n) = \begin{cases} 2^{m}3^{m} & m > 0 \\ 0 & m = 0 \\ -2^{-m}3^{n} & m < 0\end{cases}
	  $$
	- Check $h$ is injective. Then, by the previous example, $\exists g : \Z \to \N$ is injective. We then have our function, $g \circ h$ which is an injection, so $\Q$ is countable, by the [[Cardinality#Lemma (Countability)|Lemma]].  

# Operations on Sets
Recall, $n \in \N$ and $A_{1 \leq i \leq n}$ then 
$$
\bigcup_{i = 1}^{n} A_{i} := A_{1}\cup A_{2}\cup \cdots \cup A_{n}
$$
$$
\bigcap_{i=1}^{n} A_{i} := A_{1}\cap A_{2}\cap \cdots \cap A_{n}
$$
We can extend this to countably infinite sets:
$$
\bigcup_{i=1}^{\infty}A_{i} := \{x \in X \mid \exists i \in \mathbb{N}, x \in A_{i}\}
$$
$$
\bigcap_{i=1}^{\infty} A_{i} := \{x \in X \mid \forall i \in \N, x \in A_{i}\}
$$
More generally, if $I$ is a set and $\alpha \in I$, then
$$
\bigcap_{\alpha \in I } A_{\alpha} := \{x \in X \mid \exists \alpha \in I, x \in A_{\alpha}\}
$$
$$
\bigcap_{\alpha \in I} A_{\alpha} := \{x \in X \mid \forall \alpha \in I, x \in A_{\alpha}\}
$$
## Example
Let $I = (0, 1)$ be the indexing set. For each $\alpha \in (0, 1)$ consider:
$$
A_{\alpha}= \{x \in \R \mid 0 < x < \alpha\}
$$
Then, $\bigcap_{\alpha \in I} A_{\alpha} = \bigcap_{\alpha \in (0, 1)}A_{\alpha} = \{x \in \R \mid x\in A_{\alpha}, \alpha\ \in (0, 1)\}$, which is really just
$$
\{x \in \R \mid 0 < x < 1\} = (0, 1)
$$

## Theorem (Countable Union)
- A countable (or finite) union of countable sets is countable.
- The union of countable (infinite or finite) countable sets is countable. 
# Theorem (Countable Products)
Let $A_{1}, A_{2}, \cdots A_{n}$ be countable. Then $A_{1}\times A_{2}\times \cdots \times A_{n}$ is countable. In particular, if $A$ is countable, then 
$$
A^{n}:= \{(a_{1}, \cdots a_{n} \mid a_{i}\in A, \forall i = 1, \cdots, n\}
$$ 
is countable. 

Indeed by this theorem and [[Cardinality#Corollary (Structure in Subsets)]], $\Q^{n}$ is countable. 


# Theorem ($\R$ is uncountable)
$$
\{0, 1\}^{\N} := \{(a_{1}, a_{2}, \cdots \mid a \in \{0, 1\}\}
$$
is uncountable. Hence $\R$ is uncountable. 
## Remark 
Recall, $\mathcal{P}(\N)$ is the power set of $\N$ given by the subsets of $\N$. Generally, this is uncountable. More generally, $\forall X$ where $X$ is a set, 
$$
X \not\sim \mathcal{P}(X)
$$
i.e. there is no bijection $f : X \to \mathcal{P}(X)$ for any set $X$. 
