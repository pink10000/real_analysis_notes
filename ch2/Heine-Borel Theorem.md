---
tags:
  - 140A
  - ch2
---
This is **compactness criterion for subsets of $\R^n$** . 

# Theorem 
Let $A \subset \R^{n}$ with the standard [[Metric Space|metric]]. Then the following are equivalent:
1. $A$ is [[Compact Sets|compact]].
2. $A$ is [[Metric Space#Open & Closed|closed]] and [[Metric Space#Open & Closed|bounded]].

# Example
$$
\left\{ \frac{1}{n} \;\bigg| \; n \in \N \right\} \cup \{0\}
$$
is compact. It is bounded by $(-1, 1203201)$ and closed. Therefore by [[Heine-Borel Theorem#Theorem|Heine-Borel]] it is compact in $\R^{n}$. 


# Lemma 
Let $I_{n} = [a_{m}, b_{m}] \subset \R$ be closed and bounded $\forall m \in \N$. Assume $I_{1}\supset I_{2}\supset \cdots$. Then
$$
\bigcap_{m \in \N} I_{m} = \emptyset
$$

```
[-----------[---------[--------------]----------]------------]
```
# Corollary (Infinite Subsets)
Since it is compact and closed, then every infinite subset has a limit point $p$ in it. 