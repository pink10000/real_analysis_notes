---
tags:
  - 140B
  - ch7
---
# Definition (Equicontinuous)
Let $\mathscr{F}$ be a collection of functions on $E \to \C$. This collection is **equicontinuous** if for any $\vepsi > 0, \exists \delta > 0$ such that if $|x - y| < \delta$, then $|f(x) - f(y)| < \vepsi$ for all $x, y \in E$ and $f \in \mathscr{F}$. 
$$
(\forall \vepsi > 0)(\exists \delta > 0)(\forall x,y \in E)(|x - y| < \delta \implies |f(x) - f(y)| < \vepsi)
$$
> Intuitively, for any inputs that are "close" to one another, the outputs are also "close" to one another.

In particular, this guarantees that any $f \in \mathscr{F}$ is uniformly continuous. 


# Arzela - Ascoli Theorem
We first start by defining an $\vepsi-$web or $\vepsi-$net. 
## Proposition (Compact Enforces Equicontinuous)
Let $f_n \in \mathscr{C}(K, \C)$ with $K$ compact. If $f_n \rrarrow f$, then $\{ f_n \}$ is equicontinuous. 

Proof:
By [[Pointwise and Uniform Convergence#Uniform Convergence and Continuity|theorem]], $f$ is continuous. For $\vepsi > 0, \exists N$ such that $|f_{n}(x) - f(x)| < \vepsi/3$ for any $n > N, \forall x \in K$. Now, since $f_1, f_2, \ldots, f_N, f$ are uniformly continuous, then we need to find some $\delta$ that satisfies all of the functions. So we can examine a few functions. 

We know the functions are all uniformly continuous, because they are all continuous functions on a compact metric space. Boundedness is a consequence of [[Heine-Borel Theorem]].

Examining finitely many functions, we can select the minimum of all $\delta_i$ for each function $f_i$. So, let $\delta$ be this minimum. Then $\exists \delta > 0$ for $f$ such that if $d(x, y) < \delta$ then $|f(x) - f(y)| < \vepsi/3$. So, for $n > N$,
$$
|f_{n}(x) - f_{n}(y)| < 
|f_{n}(x) - f(x)| + |f(x) - f(y)| + |f(y) - f_{n}(y)| <
\vepsi/3 + \vepsi/3 + \vepsi/3 =
\vepsi
$$
and we are done. 

> For this proposition, the motivation comes from how we proved that converging sequences are bounded. So, if $a_n \to A$, then $\exists N$ such that if $n > N$/ then $|a_n - A| < \vepsi$. Then $\{a_n\}$ is bounded by $\max{ |a_1|, |a_2|, \ldots, |a_n|, |A| + \vepsi }$.

## Proposition (Compact Enforces Total Boundedness)
If $K$ is [[Compact Sets|compact]], then $K$ is **totally bounded**. This means that $\forall \vepsi > 0, \exists$ finite $x_{1}, \ldots, x_{n} \in K$ such that $\forall y \in K, \exists 1 \leq i \leq n$ such that $d(x_{i}, y) < \vepsi$. This also means that $y \in \bigcup_{i=1}^{n} N_{\vepsi}(x_{i})$. 

Proof: 
Let $\vepsi > 0$ be arbitrary. We know 
$$
K \subseteq \bigcup_{x_{i} \in K} N_{\vepsi}(x_{i})  
$$
has a finite subcover (it is a finite union of neighborhoods). Thus $\{x_{1}, \ldots, x_{n}\}$ is an **$\vepsi-$web**.
> My professor defined an $\vepsi-$web as just a collection of neighborhoods of $\vepsi$ radius where its union is a compact metric space. 

## Proposition (Subsets of Compacts)
If $K$ is [[Compact Sets|compact]], then $\exists L \subseteq K$ such that 
1. $L$ is [[Metric Space#As subsets of a Metric Space $X$|dense]] in $K$. 
2. $L$ is [[Cardinality#Lemma (Countability)|countable]]. 

Proof:
For $\vepsi = 1, 1/2, 1/3, \ldots$, pick $\vepsi-$web and union them all together. Since we iterate over $\N$ for $\vepsi$, it is countable. By definition of an $\vepsi-$web, it is dense. 

---
Let $f_n$ be a sequence of continuous functions on compact set $K$. Then if $\{f_n\}$ is pointwise bounded and equicontinuous, then
- $\{f_{n}\}$ is uniformly bounded on $K$
- $\exists$ a uniformly convergent subsequence

Proof of [[#Theorem (Arzela - Ascoli Theorem)]]:
**Part 1:**
Fix $\vepsi > 0$. Since $\{f_{n}\}$ is equicontinuous, then $\exists \delta > 0$ such that if $d(x, y) < \delta$ then
$$
|f_{n}(x) - f_{n}(y) | < \vepsi/3
$$
for all $n \in \N$. Since $K$ is compact, there $\exists$ finite $x_{1}, \ldots, x_{n}\in K$ such that $\forall y \in K, \exists 1 \leq i \leq n$ where $d(y, x_{i}) <\delta$. So, $\forall y \in K$,
$$\begin{aligned}
|f_{n}(y)|
&\leq |f_{n}(x_{i})| + |f_{n}(x_{i}) - f_{n}(y)| \\
&\leq \sup|f_{n}(x_{i})| + \vepsi/3 \\ 
&\leq M + \vepsi/3
\end{aligned}$$
and so $\{f_{n}\}$ is uniformly bounded. 

**Part 2:**
We know that since $K$ is compact, it has a [[Cardinality|countable]] [[Metric Space#As subsets of a Metric Space $X$|dense]] subset $L$. 
> This should be linked to the right problem(s)/theorem(s) in Rudin. 

By [[#Theorem (Countable is Pointwise Convergence)]], there $\exists$ a subsequence that converges on $L$. Denote $f_{n_{1}} = g_{1}$. Since $L$ is dense, with the same $\delta$ from Part 1, pick 
$$
z_{1}, z_{2}, \ldots, z_{r} \in L
$$
such that $\forall x \in K, \exists i \in [1,r], d(x, z_{i}) < \delta$. This gives us a $\delta-$web. The subsequence $\{g_{i}\}$ converges pointwise on all points in $L$ by [[#Theorem (Countable is Pointwise Convergence)]]. In particular, it converges pointwise on $z_{1}, \ldots, z_{r}$ such that 
$$
(\forall \vepsi > 0)(\exists N_{i})(\forall n, m > N_{i})
(| g_{n}(z_{i}) - g_{m}(z_{i}) | < \vepsi/3)
$$
for $1 \leq i \leq r$. Since there are finite points $z_i$, let $N = \max_{1 \leq i \leq r} N_{i}$. We can repeat the same symbolic argument but with $N$ instead of $N_{i}$. 

Using our $\delta-$web, $\forall y \in K, \exists 1 \leq i \leq r$ such that $d(y, z_{i}) < \delta$ where
$$\begin{aligned}
|g_{n}(y) - g_{m}(y)|
&\leq 
\underbrace{|g_{n}(y) - g_{n}(z_{i})|}_{\text{by equicontinuity}}
+ \underbrace{|g_{n}(z_{i}) - g_{m}(z_{i})|}_{\text{by Cauchy}} 
+ \underbrace{|g_{m}(z_{i}) - g_{m}(y)|}_{\text{by equicontinuity}} \\
&\leq \vepsi/3 + \vepsi/3 + \vepsi \\
&= \vepsi
\end{aligned}$$
And so by the [[Pointwise and Uniform Convergence#Criterion 2 (Cauchy Criterion)|Cauchy Criterion]], $g_{n}$ uniformly converges. 

# Theorem (Polynomial Uniform Convergence)
Let $f: [a,b] \to \C$ be [[Continuity|continuous]]. Then $\exists$ polynomials $\{p_{n}\}$ such that $\{p_{n}\} \rrarrow f$ on $[a,b]$. Furthermore, if $f$ is real-valued, then each $p_{n}$ has real-valued coefficients.  