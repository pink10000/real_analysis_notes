---
tags:
  - 140B
  - ch7
---

# Theorem (Uniform Convergence and Integration)
Let $E = [a,b]$ and $\alpha : [a,b] \to \R$ be increasing. Let $f_{n} \in \mathscr{C}(B)$ such that $f_{n} \in \sR(\alpha)$. If $f_{n} \rrarrow f$ then $f \in \sR(\alpha)$ and 
$$
\int_{a}^{b}f d\alpha = \lim_{n\to\infty} \int_{a}^{b} f_{n} d \alpha = 0
$$

Proof:
We see that $\forall \vepsi > 0, \exists N \in \N$ such that $|f_{n} - f| < \vepsi$ for all $x \in [a,b]$. So, 
$$
f_{n}(x) - \vepsi \leq f(x) \leq f_{n}(x) + \vepsi  
\quad\quad\quad \forall x \in [a, b]
$$
Then we can compare the LHS and the RHS by  
$$
\int_{a}^{b} (f_{n}(x) - \vepsi) d\alpha 
\leq 
\unl{\int_{a}^{b}} 
\leq 
\ovl{\int_{a}^{b}} 
\leq 
\int_{a}^{b} (f_{n}(x) + \vepsi) d\alpha
$$
such that RHS - LHS = $2 \vepsi (\alpha(b) - \alpha(a))$. 

# Guarantees on Pointwise Convergence
We are guaranteed to have pointwise convergence on a subsequence if the domain $K$ is [[Cardinality#Lemma (Countability)|countable]]. 

Proof:
WLOG, let us assume that all the functions in the sequence are distinct. Since $K$ is countable, we can write 
$$
K = \{ x_1, x_2, x_3, \ldots  \}
$$
For $x_1$, since $\{ f_{n}(x_1) \}$ is bounded by [[Sequences#Lemma (Bolzano-Weierstrass Theorem)|Bolzano-Weierstrass]], then we have the subsequence
$$
f_{1, 1}, f_{1,2}, f_{1, 3}, \cdots
$$
converges. Using Bolzano-Weierstrass again, we have the following subsequence
$$
f_{2, 1}, f_{2, 2}, f_{2,3}, \cdots
$$
which also converges. By repeating this theorem $n$ times, we have a convergent subsequence by Cantor's Diagonal Argument.
> I am not sure why we need Cantor's Diagonal Argument here. 

# Definition (Equicontinuous)
Let $\mathscr{F}$ be a collection of functions on $E \to \C$. This collection is **equicontinuous** if for any $\vepsi > 0, \exists \delta > 0$ such that if 
$|x - y| < \delta$, then $|f(x) - f(y)| < \vepsi$ for all $x, y \in E$ and $f \in \mathscr{f}$. 

> Intuitively, for any inputs that are "close" to one another, the outputs are also "close" to one another.

In particular, this guarantees that any $f \in \mathscr{F}$ is uniformly continuous. 

# Proposition
Let $f_n \in \mathscr{C}(K, \C)$ with $K$ compact. If $f_n \rrarrow f$, then $\{ f_n \}$ is equicontinuous. 

Proof:
By [[Sequence & Series of Functions#Uniform Convergence and Continuity|theorem]], $f$ is continuous. For $\vepsi > 0, \exists N$ such that $|f_{n}(x) - f(x)| < \vepsi/3$ for any $n > N, \forall x \in K$. Now, since $f_1, f_2, \ldots, f_N, f$ are uniformly continuous, then we need to find some $\delta$ that satisfies all of the functions. So we can examine a few functions. 

We know the functions are all uniformly continuous, because they are all continuous functions on a compact metric space. Boundedness is a consequence of [[Heine-Borel Theorem]].

Examining finitely many functions, we can select the minimum of all $\delta_i$ for each function $f_i$. So, let $\delta$ be this minimum. Then $\exists \delta > 0$ for $f$ such that if $d(x, y) < \delta$ then $|f(x) - f(y)| < \vepsi/3$. So, for $n > N$,
$$
|f_{n}(x) - f_{n}(y)| < 
|f_{n}(x) - f(x)| + |f(x) - f(y)| + |f(y) - f_{n}(y)| <
\vepsi/3 + \vepsi/3 + \vepsi/3 =
\vepsi
$$
and we are done. 

> For this proposition, the motivation comes from how we proved that converging sequences are bounded. So, if $a_n \to A$, then 
$\exists N$ such that if $n > N$/ then $|a_n - A| < \vepsi$. Then $\{a_n\}$ is bounded by 
>$$
> \max{ |a_1|, |a_2|, \ldots, |a_n|, |A| + \vepsi }
> $$

# Theorem (Arzecla - Angoli Theorem)
Let $f_n $ be a sequence of continuous functions on compact set $K$. Then if the $\{f_n\}$ is boudned and equicontinuous, then 
$\exists$ a uniformly convergent subsequence.

