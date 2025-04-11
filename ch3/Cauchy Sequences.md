#ch3 #140A
# Cauchy Sequences
Let $(X, d)$ be a [[Metric Space]]. A [[Sequences|sequence]] $\{p_{n}\}$ in $X$ is called a **Cauchy Sequence** if 
$$\forall\varepsilon > 0, \exists N \in \N, \forall n,m \geq N, d(p_{n}, p_{m}) < \varepsilon $$
# Proposition (Convergence is Cauchy)
Let $\{p_{n}\}$ be a convergence sequence. Then $\{p_{n}\}$ is Cauchy. 

### Proof:
Suppose $p_{n}\to p$. Let $\varepsilon > 0$. Since $p_{n} \to p, \exists N \in \N$. such that $\forall n\geq N, d(p_{n},p) < \varepsilon/2$. Let $m,n \geq N$. Then
$$\begin{aligned}
d(p_{n}, p_{m}) 
&\leq d(p_{n}, p) + d(p, q_{n}) \\
&< \varepsilon/2 + \varepsilon/2 \\
&= \varepsilon
\end{aligned}$$
And so we are done. 

# Definition (Completeness)
A [[Metric Space]] $(X, d)$ is called **complete** if every Cauchy Sequence in $X$ also converges in $X$
- $\Q$ is not complete. Consider $p_{n}\in \Q$ where $\sqrt{2} - 1/n < p_{n}< \sqrt{2}$. We see $p_{n}\to \sqrt{2} \not\in \Q$ so it does not converge in $\Q$, but it is Cauchy. 

# Lemma (Cauchy is Bounded)
Let $(X, d)$ be a [[Metric Space]]. Every Cauchy Sequence is [[Sequences#Range|bounded]]. 
# Lemma (Cauchy Subsequence Convergence)
Let $\{p_{n}\}$ be a Cauchy Sequence. Suppose $\exists$ a subsequence $\{p_{n_{i}}\}$ of $\{p_{n}\}$ that converges to $p$. Then $p_{n} \to p$. 

# Theorem (Compact in Complete)
1. Let $(X, d)$ be a [[Compact Sets|compact]] [[Metric Space|metric space]]. Then $X$ is [[Cauchy Sequences#Definition (Completeness)|complete]]. 
2. $\R^{d}$ with the standard metric is [[Cauchy Sequences#Definition (Completeness)|complete]]. 

### Proof:
1. Let $\{p_{n}\}$ be a Cauchy Sequence in a compact metric space $X$. Since $X$ is compact, $\exists$ a subsequence $\{p_{n_{i}}\}$ such that $\{p_{n_{i}}\}$ converges by [[Cauchy Sequences#Lemma (Cauchy Subsequence Convergence)]]. 
2. Let $\{p_{n}\}$ be a Cauchy Sequence in $\R^{d}$. Then by [[Cauchy Sequences#Lemma (Cauchy is Bounded)]], $\{p_{n}\}$ is bounded. This implies that $$\{p_{n} \mid n \in \N\} \subset \ovl{B_{m}(0)}$$for some $m > 0$. By [[Heine-Borel Theorem]], $\ovl{B_{m}(0)}$ is compact so by $(1)$, $\{p_{n}\}$ is convergent. Hence $\R^{d}$ is complete. 


