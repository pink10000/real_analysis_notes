---
tags:
  - 140A
  - ch3
---
# Sequence 
A **sequence** is a function $p : \N \to X$. 

# Convergence
A sequence $\{p_{n}\}$ in a [[Metric Space]] $X$ is said to **converge** if there is a point $p \in X$ with the following property: 
- For every $\varepsilon > 0$ there is an integer $N$ such that $n \geq N$ implies that $d(p_{n}, p) < \varepsilon$. (Here $d$ denotes the distance in $X$.)  
- $\forall \varepsilon > 0,\exists N \in \N, n \geq N, d(p_{n}, p) < \varepsilon$

In this case, $\{p_n\}$ converges to $p$, or that $p$ is the limit of $\{p_n\}$, and we write $p_{n}\to p$ or

$$
\lim_{n \to \infty} p_{n} = p
$$

If $\{p_n\}$ does not converge, then it must diverge.  This sequence depends on the ambient space $X$. 

## Range
The set of all the points $p_{n}$ for $(n = 1, 2, 3, \cdots)$ is the **range** of $\{p_{n}\}$. The range of a sequence may be a finite set, or it may be infinite. 

$$
\{p_{n} \mid n \in \N \} \subset X
$$


The sequence $\{p_n\}_{n \in \N}$ is **bounded** if its range is bounded. 

# Theorem 
Let $\{p_{n}\}$ be a sequence in a [[Metric Space]] $X$. 
1. $\{p_{n}\}$ converges to $p \in X$ if and only if every neighborhood of $p$ contains $p_n$ for all but finitely many $n$. 
2. If $p \in X, p' \in X$ and if $\{p_n\}$ converges to $p$ and to $p'$, then $p = p'$. 
3. If $\{p_{n}\}$ converges, then $\{p_{n}\}$ is bounded
4. If $E \subset X$ and if $p$ is a limit point of $E$, then there is a sequence $\{p_{n}\}$ in $E$ such that 

$$
p = \lim_{n \to \infty} p_{n}
$$


Proof:
$(1)$
Suppose $p_{n}\to p$. Then, 

$$
\begin{aligned}
p_{n}\to p 
&\iff \forall \varepsilon > 0, \exists n \in \N, \forall n \geq \N, d(p_{n}, p) < \varepsilon \\
&\iff \forall \varepsilon > 0, \exists n \in \N, \forall n \geq \N, p_{n}\in N_\varepsilon(p) \\
&\iff \text{all but finitely many of the n's satisfy $p_{n} \in N_{r}(\varepsilon)$}
\end{aligned}
$$

$(2)$
Suppose $p_{n}\to p$ and $p_{n}\to q$. Suppose $p \neq q$. Then $d(p, q) > 0$. Let 

$$
\varepsilon = \frac{d(p, q)}{2}
$$

- Then since $p_{n}\to p$, then $\exists N_{1} \in \N, \forall n \geq N_{1}$ such that $d(p_{n}, p) < \varepsilon$ 
- Then since $p_{n}\to q$, then $\exists N_{2} \in \N, \forall n \geq N_{2}$ such that $d(p_{n}, q) < \varepsilon$ 
Let $N = \max\{N_{1} , N_{2}\}$. Then $\forall n \geq N$, 

$$
d(p, q) \leq d(p, p_{n}) + d(p_{n}, q) < \varepsilon + \varepsilon = 2 \varepsilon = d(p, q)
$$

which is a contradiction. 

$(3)$ Convergence $\implies$ bounded
Assume $p_{n}\to p$. Let $\varepsilon = \pi^{\sqrt{2}} > 0$. Then $\exists N \in \N$ such that $\forall n \geq N, d(p_{n}, p) < \pi^{\sqrt{2}}$. Let

$$
R_{1}= \max\{d(p_{m}, p) \mid m = 1, \cdots, N - 1\}
$$

Now let $R = \max\{R_{1}, \pi^{\sqrt{2}}\} + 1 > 0$ and $\forall n \in \N$, 

$$
\begin{aligned}
d(p_{n}, p) < R 
&\iff p_{n} \in N_{R}(p), \forall n \in \N \\ 
&\iff \{p_{n}\} \text{ boudned}
\end{aligned}
$$

$(4)$
Let $p \in A'$. Then $\forall n \in \N, \exists p_{n}\in N_{1/n}(p) \cap A$. I claim $p_{n}\to p$. Let $\varepsilon > 0$ and let $N \in \N$ be such that $\frac{1}{n} < \varepsilon$ by [[Archimedean Property]]. Then $\forall n \geq N$, 

$$

p_{n}\in N_{1/n}(p) \iff d(p_{n}, p) < \frac{1}{n} \leq \frac{1}{N} < \varepsilon 

$$

> Use the fact that $N_{1/n}(p)$ is nonempty, and so pick a point for all $n \in \N$ to build a sequence.

# Lemma (Algebra of Sequences)
Let $\{a_{n}\}, \{b_{n}\}$ be sequences in $\C$. Assume $a_{n}\to a, b_{n}\to b$. Then,
1. $\{a_{n} + b_{n}\} \to a + b$
2. $\{a_{n} \cdot b_{n}\} \to ab$
3. Suppose $b \neq 0$. $\frac{a_{n}}{b_{n}} \to \frac{a}{b}$ 

# Lemma (Convergence of Vectors)
Let $\{\vec{x}_{n}\}$ be a sequence in $\R^{d}$. Then $\{\vec{x}_{n}\}$ converges to $\vec{x}$ if and only if $x_{j, n} \to x_{j}$ for all $j = 1, 2, 3, \cdots, d$. 
>Component wise convergence.

# Subsequences
Let $\{p_n\}$ be a sequence. Suppose $n_{1}< n_{2}< n_{3}< \cdots$ be a set of natural numbers. Then we call $\{p_{n_{i}}\}_{i\in \N}$ a **subsequence** of $p_{n}$. 

Note that 

$$
p_{1}, \ovl p_{2}, \ovl p_{3}, p_{4}, p_{5}\cdots   \quad\implies p_{1}= p_{n_{1}}, \;\; p_{n_{2}} = p_{4},\;\; p_{n_{3}} = p_{5}
$$

## Subsequence Limits
Let $\{p_{n}\}$ be a sequence. A point $p \in X$ is called a **subsequential limit of $\{p_{n}\}$** if $\exists$ a subsequence $\{p_{n_{i}}\}$ such that 
$$
\lim_{i \to \infty} p_{n_{i}} \to p
$$

## Lemma (Structure of Subsequences)
Let $\{p_{n}\}$ be a sequence. Then 

$$
p_{n}\to p \iff \text{every subsequence converges to $p$}
$$

$(\impliedby)$
The full sequence is a subset of itself. Therefore $p_{n}\to p$.

$(\implies)$
Suppose $p_{n}\to p$. WTS every subsequence converges to $p$. Let $\{p_{n_{k}}\}_{k \in \N}$ be a subsequence of $\{p_{n}\}$. The goal is to show $p_{n_{k}} \to_{k \to \infty} p$. 

Let $\varepsilon > 0$. We want to find $K \in \N$ such that $\forall k\geq K$, we have $d(p_{n_{k}}, p) < \varepsilon$. Since $p_{n}\to p, \exists N \in\N$ such that $\forall n \geq \N$ we have $d(p_{n}, p) < \varepsilon$. 

### Lemma (Subsequences Stabilize)
For any subsequence $\{p_{n_{i}}\}$, there exists an index $K$ such that for all $k \geq K$ we have $n_{k} \geq N$. 

Proof:
- The subsequence indices are in increasing sequence $n_{1}< n_{2}< n_{3} < \cdots$ 
- Since $N$ exists for $d(p_{n},p) < \varepsilon$ for $n \geq N$ we can choose the first $k$ where $n_{k} \geq N$ and for all $k \geq K$, we have $n_{k} \geq N$. 
- This is by induction.
---
Thus, for sufficiently large $K$, we have $n_{K}\geq N$ where 

$$
n_{1}< n_{2} < \cdots < N < n_{K} < \cdots 
$$

now if $k \geq K$, then by [[Sequences#Lemma (Subsequences Stabilize)|stabilizing lemma]], 

$$
n_{k} \geq n_{K}\geq N
$$

so then $d(p_{n_{k}}, p) < \varepsilon$. 

# Lemma (Bolzano-Weierstrass Theorem)
1. Let $\{p_{n}\}$ be a sequence in a [[Compact Sets|compact set]] $K \subset (X, d)$. Then $\{p_{n}\}$ has a convergent subsequence. 
2. Every bounded sequence in $\R^{d}$ has a convergent subsequence. 
### Proof:
Part $(2)$ follows from $(1)$ and [[Heine-Borel Theorem]]. 

Part $(1)$:
**Case 1:** If the [[Sequences#Range|range]] of a sequence is finite, then $\exists n_{1}< n_{2}< n_{3} < \cdots$ and some $p \in K$ such that $p_{n_{i}}= p, \forall i \in \N$. Indeed, every point after $p_{n_{i}}$ is the same. Hence $p_{n_{i}} = p \to p$. 

**Case 2:** Let the [[Sequences#Range|range]] be infinite. Let $A = \{p_{n} \mid n \in \mathbb{N}\}$. Then by [[Heine-Borel Theorem#Corollary (Infinite Subsets)|corollary]] and $A$ is infinite, (and [[Compact Sets|compact]]) then $\exists$ a limit point $p \in A$. 

Hence you can construct $\{q_{i}\} \subset A$ from the range such that $q_{i}\to p$. But then $\{q_{i}\} \subset A$ is just a [[Sequences#Subsequences|subsequence]] of $\{p_{n}\}$ and it converges. 

# Theorem (Sequential Compactness Criterion)
A [[Metric Space]] $X$ is [[Compact Sets|compact]] $\iff$ every sequence in $X$ has a convergent subsequence.

### Proof:
$(\implies)$
Let $X$ be compact. Consider any sequence $\{p_{n}\}$ in $X$. It must be in a bounded set since it is compact then it is bounded by [[Compact Sets#Lemma (Compact Implies Bounded)]]. By [[Sequences#Lemma (Bolzano-Weierstrass Theorem)|Bolzano-Weierstrass Theorem]], $\{p_{n}\}$ has a convergent subsequence. 

$(\impliedby)$
Let every sequence in $X$ have a convergent subsequence. We can consider infinite set $E \subset X$. Since $E$ is infinite, then we can extract a sequence $\{x_{n}\}$ form this set. Since this has a limit point $x$ and $x \in E$, every infinite subset has a limit point in it. 

Then by Homework 5, Problem 26, it is [[Compact Sets|compact]].

# Lemma (Closure of Subsequent Limits)
Let $\{p_{n}\}$ be a sequence in $(X, d)$. Let $Q$ denote the set of subsequence limits of $\{p_{n}\}$. Then $Q$ is closed. 

# Special Sequences
1. Let $p > 0$. Then $\lim_{n \to\infty}\frac{1}{n^{p}} = 0$ 
2. If $|a| < 1$, then $\lim_{n\to\infty}a^{n} = 0$
3. $\lim_{n\to\infty} \sqrt[n]{n} = 1$ 
4. Let $a > 0$. Then $\lim_{n\to\infty} \sqrt[n]{a} = 1$
5. Let $p > 0, \alpha \in \R$. Then 
$$
\lim_{n\to\infty} \frac{n^{\alpha}}{(1 + p)^{\alpha}}
$$



