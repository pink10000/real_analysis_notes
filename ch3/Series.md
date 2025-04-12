#ch3 #140A
# Definition 
Let $(a_{n})$ be a [[Sequences|sequence]] of [[Complex Numbers]]. Let 

$$
S_{n} := a_{1} + a_{2} + \cdots + a_{n} =: \sum_{k=1}^{n}a_{k}
$$

is called the **partial sums**. We denote by $a_{1} + a_{2} + a_{3} + \cdots$ the **formal sum** 

$$
\sum_{k=1}^{\infty} a_{k} 
\quad\text{ or }\quad \sum_{n\in\N}a_{k}
\quad\text{ or }\quad \sum_{k} a_{k}

$$

and call it a **series**. 
- The series **converges** if $s_{n} \to s$ for some $s \in \C$. We write $\sum_{k=1}^{\infty}a_{k} = s$.

# Lemma (Geometric Series)
Let $a \in \R \backslash\{0\}, r \in \R$. Then

$$
\sum_{n\in\N \cup \{0\}} ar^{n} \text{ converges } \iff |r| < 1
$$

In which case, 

$$
\sum_{n\in\N\cup\{0\}} ar^{n} = \frac{a}{1 - r}
$$

Proof:
If $r = 1$, then 

$$
\begin{aligned}
s_{n} 
&= ar^{0} + ar^{1}+ \cdots ar^{n-1} \\
&= a + \cdots + a \\
&= na
\end{aligned}
$$

so $s_{n}= na$, which diverges. 
If $r \neq 1$, 

$$
\begin{aligned}
s_{n}
&= a(1 + r + r^{2} + \cdots + r^{n-1}) \\
&= a\left( \frac{1 - r^{n}}{1 - r} \right)
\end{aligned}
$$

Now, if $|r| < 1$ then $r^{n}\to_{n\to\infty} 0$ by [[Sequences#Special Sequences|special sequences]]. So by algebra of sequences, we have 

$$
s_{n}= a\left( \frac{1 - r^{n}}{1 - r} \right) \to \frac{a}{1 - r}
$$

If $|r| > 1$ then it does not converge (diverges to $\pm\infty$ or fluctuates to $\pm\infty$). If $|r|\ = 1$ then $r = 1, -1$ and clearly these do not work. Then it must converge.

# Cauchy Criterion for Sequences
We say a series $\sum a_{k}$ satisfies a **Cauchy Criterion** if the sequence of partial sums $(s_{n})$ is a [[Cauchy Sequences|Cauchy Sequence]]. 

## Remark
Recall that $(s_{n})$ is Cauchy if $\forall \varepsilon > 0, \exists N \in \N$ such that $\forall n\geq N, |s_{n} - s_{m}| < \varepsilon$. We note that 

$$
\begin{aligned}
s_{n} &= a_{1} + a_{2} + \cdots + a_{n} \\
s_{m} &= a_{1} + a_{2} + \cdots + a_{m} \\
\end{aligned}
$$

so if $m \geq n \geq N$, then 

$$
\begin{aligned}
s_{m} - s_{n}
&= a_{n+1} + a_{n+2} + \cdots + a_{m} \\
&= \sum_{k=n+1}^{m} a_{k}
\end{aligned}
$$

so a sum $\sum_{n}a_{n}$ satisfies a Cauchy Criterion $\iff$ $\forall \varepsilon > 0, \exists N \in \N$ such that $\forall m \geq n \geq N$, $|s_{m} - s_{n}| = \bigg|\sum_{k=n}^{m}a_{k} \bigg| < \varepsilon$. 

# Remark (Equivalent Convergence)

$$
\begin{aligned}
\sum a_{k} \text{ converges}
&\iff (s_{n}) \text{ converges} \\
&\iff (s_{n}) \text{ is Cauchy} \\
&\iff \sum a_{k} \text{ satisfies a Cauchy Criterion}
\end{aligned}
$$

# Corollary (Divergence Test)
Let $\sum a_{n}$ be a convergent series. Then $a_{n} \to_{n\to\infty} 0$. 

Proof:
Since $\sum a_{n}$ converges, then it satisfies a Cauchy Criterion. Let $\varepsilon > 0$. Then $\exists N \in \N, \forall m \geq n \geq N$,

$$

\bigg| \sum_{k=n}^{m}a_{k} \bigg| < \varepsilon

$$

Let $m = n \geq N$. Then 

$$
\bigg| \sum_{k=n}^{m}a_{k} \bigg| 
= \bigg| \sum_{k=n}^{n}a_{k} \bigg| = |a_{n}| < \varepsilon
$$

> The converse is not true. Consider the Harmonic Series.

# Lemma (Convergence, Boundness)
Let $a_{n}\geq 0$. Then $\sum a_{n}$ converges $\iff$ $(S_{n}) = (a_{1}+ a_{2}+ \cdots + a_{n})$ is bounded. 

Proof:
Since $a_{n} \geq 0$. Then

$$
S_{n} = a_{1} + a_{2} + \cdots + a_{n} \leq (a_{1}+ \cdots + a_{n}) + a_{n+1} = S_{n+1} 
$$

so $(S_n)$ is [[Monotonic|monotonically increasing]]. So by [[Monotonic#Lemma (Monotone Convergence Theorem for Sequences)|MCT]], $(S_{n})$ converges $\iff$ $(S_{n})$ is bounded.

# Lemma (Removal of Absolute)
Let $(z_{n})$ be a sequence of [[Complex Numbers]]. Assume

$$
\sum_{n\in\N} |z_{n}|
$$

converges. Then 

$$
\sum_{n}z_{n}
$$

converges. 

Proof: By Triangle Inequality. 
> The converse is not true. Consider $\sum \frac{(-1)^{n}}{n}$. 

# Definition (Absolute Convergence)
Let $(a_{n})$ be a sequence of $\C$ numbers. We say $\sum_{n}a_{n}$ is **absolutely convergent** if $\sum |a_{n}|$ converges. 

# Lemma (Comparison Test)
Let $(a_{n}), (b_{n}), (c_{n}) \subset \R$. Suppose $a_{n} \leq b_{n}\leq c_{n}$ for all $n \geq N_{0}$. If $\sum a_{n}$ and $\sum c_{n}$ converge, then $\sum b_{n}$ converge. 

Proof: 
We are given that for all $n \geq N_0$: 

$$
 a_n \leq b_n \leq c_n
$$

Since $\sum a_{n}, \sum c_{n}$ converges, then $\exists N_{1}, N_{2}\in\N$ such that $\forall m \geq n \geq N_{1,2}$

$$
\bigg|
\sum_{k=n}^{m}a_{k}
\bigg| < \varepsilon
\quad\quad\quad
\bigg|
\sum_{k=n}^{m}c_{k}
\bigg| < \varepsilon

$$

Let $N = \max\{N_{0}, N_{1}, N_{2}\}$. Then $\forall m \geq n \geq N$, for each $n \leq k \leq m$, that $a_{k}\leq b_{k}\leq c_{k}$. Thus, 

$$

-\varepsilon < \sum_{k=n}^{m} a_{k} \leq \sum_{k=n}^{m} b_{k} \leq \sum_{k=n}^{m} c_{k} < \varepsilon

$$

Indeed, 

$$
\bigg|\sum_{k=n}^{m} b_{k} \bigg| < \varepsilon
$$

## Corollary (Convergence by Above/Below)
- Suppose $0 \leq b_{n} \leq c_{n}$ for $n \geq N_{0}$. If $\sum c_{n}$ converges then $\sum b_{n}$ converges. 
- If $\sum b_{n}$ diverges, then $\sum c_{n}$ diverges. 

# Theorem (Cauchy Condensation)
Let $a_{1} \geq a_{2}\geq \cdots \geq 0$. Then the series 

$$

\sum_{n=1}^{\infty} a_{n} \text{ converges} \iff \sum_{k=0}^{\infty} 2^{k}a_{2^{k}} \text{ converges}

$$

Proof:
Assume $\sum_{n} a_{n}$ converges. 


## Corollary (P-Test)
1. $\sum 1/n^{p}$ converges $\iff$ $p>1$
2. $\sum_{n=2}^{\infty} 1/(2\log n)^{p}$ converges $\iff$ $p > 1$
Proof: Use Cauchy Condensation

# Proposition (Root Test)
Let $(a_{n})$ be a [[Sequences|sequence]]. Put $\alpha = \ovl{\lim}\sqrt[n]{|a_{n}|}$. 
1. If $\alpha < 1$, then $\sum a_{n}$ converges. 
2. If $\alpha > 1$, then $\sum a_{n}$ diverges.
3. If $\alpha = 1$, then no conclusion.

Proof (1):
Since $\alpha < 1$, by [[Upper and Lower Limits#Lemma (Checkability)|checkable criterion]] we have that $\exists N \in \N$ such that $\forall n\geq N$,

$$
\sqrt[n]{|a_{n}|} < r \implies |a_{n}| < r^{n} 
$$

for all $n \geq N$. Since $r < 1$ then $\sum r^{n}$ convergences by geometric series. So by [[Series#Lemma (Comparison Test)|comparison test]], $\sum a_{n}$ is absolutely convergent. Lastly, by [[Series#Remark (Equivalent Convergence)]] it is convergent. 

Proof (2):
Suppose $\alpha > 1$. Then by definition, $\alpha = \sup(\cA)$, then $\exists$ subsequence 

$$
n_{1} < n_{2} < \cdots 
$$

such that 

$$
\sqrt[n]{|a_{n_{i}}|} = \alpha > 1
$$

so infinitely many $n_{i}\in \N$ with $|a_{n_{i}}| > 1$ and so $|a_{n_{i}}| \not\to 0$ and $a_{n_{i}}\not\to 0$ and by divergence test, it must diverge. 

# Proposition (Ratio Test)
Let $(a_{n})$ be a sequence of nonzero real numbers. 
1. If 
$$
\beta := \ovl{\lim}\bigg| \frac{a_{n+1}}{a_{n}} \bigg|< 1
$$
 then $\sum a_{n}$ converges.
2. If $\exists n_{0}$ such that 
$$
\bigg| \frac{a_{n+1}}{a_{n}} \bigg| \geq 1
$$
, $\forall n \geq n_{0}$ then $\sum a_{n}$ diverges. 
## Remark (Ratio - Root Relationship)
The ratio test is not perfect. Indeed, If the ratio test shows convergence of a series, then the root test must also. The converse is not necessarily true (Rudin 3.35). 

Indeed, if the root test implies divergence, then the ratio test will also imply divergence. This is because for any sequence $\{c_n\}$ of positive numbers,

$$
\begin{aligned}
\liminf_{n\to\infty} \frac{c_{n+1}}{c_{n}} &\leq \liminf_{n\to\infty} \sqrt[n]{c_{n}} \\
\limsup_{n\to\infty} \sqrt[n]{c_{n}} &\leq \limsup_{n\to\infty} \frac{c_{n+1}}{c_{n}} \\
\end{aligned}
$$

Proof:
We prove the second inequality. Let $\alpha = \limsup_{n\to\infty} \frac{c_{n+1}}{c_n}$. If $\alpha = +\infty$, we are done. The $\alpha$ is finite, choose $\beta > \alpha$. By the [[Upper and Lower Limits#Lemma (Checkability)|checkability lemma]], $\exists N \in \Z$ such that 

$$

\frac{c_{n+1}}{c_{n}} \leq \beta 

$$

for $n \geq N$. In particular, for any $p > 0$, 

$$

c_{N+k+1} \leq \beta c_{N+k} \quad\quad\quad (k = 0, 1, \dots, p - 1)

$$

such that by inducting on $k$ to $p$, 

$$
c_{N+p} \leq \beta^{p}c_{N}
$$

As $n \geq N$ then for $n = N + p$, 

$$
\begin{aligned}
c_{n} &\leq c_{N} \beta^{n - N} \\
\sqrt[n]{c_{n}} &\leq \beta \sqrt[n]{c_{N} \beta^{-N}} \\
\limsup_{n\to\infty} \sqrt[n]{c_{n}} &\leq \beta \\
\end{aligned}
$$

The last line is by [[Sequences#Special Sequences|special sequences]]. Since this is true for every $\beta > \alpha$ then 

$$
\limsup_{n\to\infty} \sqrt[n]{c_{n}} \leq \alpha
$$

The proof is similar for $\liminf$. 

# Summation by Parts
Given two [[Sequences]] $\{a_{n}\}$ and $\{b_n\}$, put 

$$

A_{n} = \sum_{k=0}^{n} a_{k}

$$

if $n \geq 0$ put $A_{-1} = 0$. Then if $0 \leq p \leq q$, we have 

$$

\sum_{n=p}^{q}a_{n}b_{n} = A_{q}b_{q} - A_{p-1}b_{p} + \sum_{n=p}^{q-1} A_{n}(b_{n} - b_{n+1})

$$

this useful for:

## Theorem (Multiplicative Convergence)
Suppose
1. the partial sums $A_{n}$ of $\sum a_{n}$ form a bounded sequence
2. $b_{0}\geq b_{1} \geq b_{2}\geq  \cdots$
3. $\lim_{n\to\infty} b_{N}= 0$
Then $\sum a_{n}b_{n}$ converges. 

# Operations on Series
## Lemma 
If $A = \sum a_{n}, B = \sum b_{n}$ are convergent, then 
1. $\sum(a_{n}+ b_{n}) = A + B$
2. $\sum (ca_{n}) = cA, \forall c \in \R$
3. Adding, removing finitely many elements to $\sum a_{n}$ does not change convergence. 