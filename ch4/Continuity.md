---
tags:
  - 140A
  - ch4
---
# Definition (Point)
Let $A \subset X$ and $f : A \to Y$. Let $p \in A$. We say $f$ is **continuous** at $p$ if $\forall \vepsi > 0, \exists \delta > 0$ such that $\forall x \in A$ with $d_{X}(x,p) < \delta$ we have $d_{Y}(f(x), f(y)) < \vepsi$ 

$$

(\forall \vepsi > 0)(\exists \delta > 0)
(\forall x \in A, 0 < d_{X}(x, p) < \delta)
(d_{Y}(f(x), f(p)) < \vepsi)

$$


# Proposition (Isolated implies Continuity)
If $p$ is an [[Metric Space#Limit Point|isolated point]] of $A$, then any function $f: A \to Y$ is continuous at $p$. 

Proof:
$p$ is an isolated point $A$ means that $\exists \delta_{0}> 0$ such that $\forall x \in A, d(x,p)<\delta_{0} \implies x = p$. Indeed, for every neighborhood of $p$, it does intersect with $A$. 
> Since no neighborhoods intersect, there is some "minimal distance" $\delta_{0}$ where there are no points from $0$ to $\delta_{0}$. So, the only point must be itself. 

Let $\vepsi > 0$. Choose $\delta = \delta_{0}$. Then we have 

$$
d(f(x), f(p)) = d(f(p), f(p)) = 0 < \vepsi
$$

and so it is continuous. 

# Definition (Set)
Let $A \subset X, f: A \to Y$. Then $f$ is continuous on $A$ if $\forall p \in A$, $f$ is continuous at $p$. 

Examples:
1. Every polynomial $f(z) = \sum_{k=0}^{\C} a_{k}z^{k}$ is continuous on $\C$ when $a_{k}\in \C$. 
2. Let $f : X \to \R^{n}, f(x) = (f_{1}(x), f_{2}(x), \dots , f_{n}(x))$ where $f_{i}: X \to \R$ for $i = 1, \dots, n$. Then $X$ is continuous on $X$ iff $f_{i}$ is continuous on $X$ for $i = 1, \dots, n$. 

# Lemma ([[Continuity]] of Composition)
Let $A \subset X, f : A \to Y$. Let $g : f(A) \to Z$. Define $h := g \circ f : A \to Z$, where $h(a) = g(f(a))$.

Proof:
Suppose $(a_{n}) \subset A, a_{n} \to p$. WTS $h(a_{n}) \to h(p)$. 
1. Note since $a_{n}\to p$ and $f$ is continuous at $p$, then $f(a_{n}) \to f(p)$. 
Let $b_{n} := f(a_{n})$. Note $b_{n} \in f(A) = \text{dom}(g)$. 
1. Since $b_{n}\to f(p)$ by $(1.)$ and $g$ is [[Continuity|continuous]] at $f(p)$ then then $g(b_{n}) \to g(f(p))$.
Thus $h(a_{n}) = g(f(a_{n})) = g(b_{n}) \to g(f_{p}) = h(p)$ by $(2.)$. 

# Proposition (Topological Characterization of Continuity)
Let $f : X \to Y$. Then $f$ is continuous on $X$ iff $\forall$ open sets $O \subset Y$, the preimage $f^{-1}(O)$ is open in $X$. 

Proof:
$(\implies)$
Suppose $f$ is continuous on $X$ and let $O$ be an open set in $Y$. 
> The goal is that $f^{-1}(O)$ is open in $X$. That is, $\forall x \in f^{-1}(O)$, we need to find $r > 0$ such that $N_{r}(x) \subset f^{-1}(O)$. 

1. Since $x \in f^{-1}(O)$ then $f(x) \in O$. 
2. Since $O$ is open, $\exists \vepsi > 0$ such that $N_{\vepsi}(f(x)) \subset O$. 
3. Since $f$ is continuous at $X$, $\exists \delta > 0$ such that $\forall z \in X, d(x, z) < \delta \implies d(f(x), f(z)) < \vepsi$. 
   That is, $z \in N_{\delta}(x) \implies f(z) \in N_{\vepsi}(f(x))$. 
So, $f(N_{\delta}(x)) \subset N_{\vepsi}(f(x)) \subset O$. Let $r = \delta$ to get $N_{r}(x) \subset f^{-1}(O)$. So $x$ is an interior point of $f^{-1}(O)$ and $f^{-1}(O)$ is open. 

$(\impliedby)$
Assumption: for every $O$ open in $Y$, then $f^{-1}(O)$ is open in $X$. 
> Goal, $f$ is continuous at every $x \in X$. 

Let $x \in X$. Let $\vepsi > 0$. $N_{\vepsi}(f(x))$ is open in $Y$. So, by assumption, $f^{-1}(N_{\vepsi}(f(x)))$ is open in $X$. Note $x \in f^{-1}(N_{\vepsi}(f(x)))$. So $x$ is an interior point. 

This implies $\exists \delta > 0$ such that $N_{\delta}(x) \subset f^{-1}(N_{\vepsi}(f(x)))$. 
This implies $\forall z \in N_{\delta}(x)$, we have $f(z) \subset N_{\vepsi}(f(x))$.

So $\forall z$ with $d(x, z) < \delta$, we have $d(f(x), f(z)) < \vepsi$. 
# Proposition (Continuity Retains Compactness)
Let $f : X \to Y$ be continuous. Let $K \subset X$ be compact. Then $f(K)$ is [[Compact Sets|compact]].

Proof:
To show $f(K)$ is compact, let $\{O_{\alpha}\}$ be an open cover of $f(K)$. 
> Goal is to show there exists a finite subcover. 

Since we have a cover,

$$

f(K) \subset \bigcup_{\alpha \in I} O_{\alpha}

$$

Take the preimage of this containment. Then 

$$
\begin{aligned}
f^{-1}(f(K)) 
&\subset f^{-1}\left( \bigcup_{\alpha \in I} O_{\alpha} \right) \\
&= \bigcup_{\alpha \in I} f^{-1}(O_{\alpha})
\end{aligned}
$$

Note $K = f^{-1}(f(K))$. So 

$$

K \subset \bigcup_{\alpha \in I} f^{-1}(O_{\alpha})

$$

Since $f$ is continuous and $O_{\alpha}$ is open, then $f^{-1}(O_{\alpha})$ is *open* by [[Continuity#Proposition (Topological Characterization of Continuity)|lemma]]. So $\{f^{-1}(O_{\alpha}) \mid \alpha \in I\}$ is an open cover of $K$. Since $K$ is compact, $\exists \alpha_{1}, \dots \alpha_{n}$ such that 

$$
K \subset f^{-1}(O_{\alpha_{1}}) \cup \cdots \cup f^{-1}(O_{\alpha_{n}})
$$

Apply $f$ to this containment, 

$$
\begin{aligned}
f(K) 
&\subset f(f^{-1}(O_{\alpha_{1}})) \cup \cdots f(f^{-1}(O_{\alpha_{n}})) \\
&\subset O_{\alpha_{1}} \cup \cdots \cup O_{\alpha_{n}} 
\end{aligned}
$$

Thus $f(K)$ has a finite subcover and is [[Compact Sets|compact]] by definition. 

## Corollary (Extreme Value Theorem)
Let $X$ be a [[Metric Space|metric space]] that is [[Compact Sets|compact]]. Suppose $f : X \to \R$ is continuous. Then $f$ attains its $\max$ and $\min$. That is, $\exists p,q\in X$ such that 

$$
\begin{aligned}
f(p) &= \sup\{f(x) \mid x \in X\} = \max\{f(x) \mid x \in X\} \\
f(q) &= \inf\{f(x) \mid x \in X\} = \min\{f(x) \mid x \in X\}
\end{aligned}
$$

In particular, if $f:[a,b] \to \R$ is continuous, then $f$ has a $\max,\min$. 

Proof:
For the second claim, note $[a,b] \subset \R$ is [[Compact Sets|compact]] by [[Heine-Borel Theorem]] so it follows from the first. 

Note that $f(X) \subset \R$ is compact by [[Continuity#Proposition (Continuity Retains Compactness)|theorem]] and so by [[Heine-Borel Theorem]] $f(X)$ is closed and bounded. Then, 

$$
\begin{aligned}
\sup(f(X)) \in \ovl{f(X)} = f(X) \\
\inf(f(X)) \in \ovl{f(X)} = f(X) 
\end{aligned}
$$

So $\exists p, q \in X$ such that $f(p) = \sup f(X)$ and $f(q) = \inf f(X)$. Note that $\sup,\inf$ are in the closure by [[Induced Metric Space#Lemma (Bounded)]]. 

# Theorem (Inverse Continuity)
Suppose $f$ is an injective bijective continuous mapping of a [[Compact Sets|compact]] [[Metric Space|metric space]] $X$ onto a metric space $Y$. Then the inverse $f^{-1}$ defined on $Y$ by
$$
f^{-1}(f(x)) = x \quad\quad\quad (x \in X)
$$
is a *continuous* mapping of $Y$ onto $X$. 

Proof:
By [[Metric Space#Lemma (Open Complement Closed)]], it suffices to show $f(V)$ is an open set in $Y$ for every open set $V \subset X$. Let $V$ be such a set. Then the complement $V^{c}$ is closed, and thus compact by [[Compact Sets#Theorem (Closed in Compact is Compact)|theorem]]. Then $f(V^{c})$ is a compact subset of $Y$ by [[#Proposition (Continuity Retains Compactness)]] and is closed in $Y$. Since $f$ is bijective, $f(V) = (f(V^{c}))^{c}$ and so $f(V)$ is open.

# Definition (Uniformly Continuous)
Let $f : X \to Y$. We say $f$ is **Uniformly Continuous** if

$$

(\forall \vepsi > 0)(\exists \delta > 0)(\forall p, q \in X, d(p, q) < \delta) \implies (d(f(p), f(q)) < \vepsi)

$$

- Note that compared to the definition of [[Continuity#Definition (Point)|continuity]], we are saying there is a $\delta$ that "works" for all points in $X$. 
- In particular, uniformly continuous implies continuous.

## Example  1
Consider $f : \R \to \R$ with $f(x) = x^{2}$. We saw $f$ is continuous. However, $f$ is not uniformly continuous.

Proof: 
Assume by contradiction that $f$ is uniformly continuous. Let $\vepsi = 1$. Then by definition, $\exists \delta > 0$ such that $\forall x, y \in \R, |x - y| < \delta$ and so $|f(x) - f(g)| < 1$.

Fix $x\in \R, x > 0$. Let $y = x + \delta/2$. Then $(x - y) = |x - (x + \delta/2)| = \delta/2 < \delta$. So by uniform continuity, 

$$
|x^{2}- y^{2}| = |x^{2} - (x + \delta/2)^{2}| = |x^{2} - (x^{2}+ \delta x + \delta^{2}/4)| = |\delta x + \delta^{2}/4| = \delta x + \delta^{2}/4 < 1
$$

Let $x = 1/\delta$. Then 

$$
\delta x + \delta^{2}/4 = 1 + \delta^{2}/4 > 1
$$

which is a contradiction. 

## Example 2 
$f : \mathbb{R}\to \R$ where $x \mapsto x$ is uniformly continuous. 
## Example 3 
$f : \R \to \R$ where $x \mapsto \sqrt{x}$ is uniformly continuous.

Proof:
Let $\vepsi > 0$. Let $\delta = \vepsi^{2}$. 
$$
\begin{aligned}
|f(x) - f(y)|^{2} 
&= |\sqrt{x} - \sqrt{y}|^{2} \\
&= |\sqrt{x} - \sqrt{y}| \cdot |\sqrt{x} - \sqrt{y}| \\
&\leq |\sqrt{x} - \sqrt{y}|\cdot (\sqrt{x} - \sqrt{y}) \\
&=|\sqrt{x} - \sqrt{y}|\cdot |\sqrt{x} + \sqrt{y}| \\
&= |x - y|  \\
&< \delta \\ 
&= \vepsi^{2}
\end{aligned}
$$
Thus, $|f(x)-f(y)| < \vepsi$ . 
## Example 4 
$f : [-10, 10] \to \R$ where $x \mapsto x^{2}$ is uniformly continuous. 

Proof: 
Let $\vepsi > 0$. Then let $\delta = \vepsi/20$. Suppose $|x - y| < \delta$ for $x,y \in [-10, 10]$. Then 

$$
\begin{aligned}
|f(x) - f(y)|
&= |x^{2} - y^{2}| \\
&= |x - y|\cdot |x + y| \\
&< \delta (|x| + |y|) \\
&= \delta \cdot 20 \\ 
&< \vepsi \\
\end{aligned}
$$

Done.
# Theorem (Continuity + Compact = Uniform Continuity)
Let $X$ be a [[Compact Sets|compact]] metric space. Let $f : X \to Y$ continuous. Then $f$ is [[Continuity#Definition (Uniformly Continuous)|uniformly continuous]]. 

Proof:
Suppose by contradiction that $X$ is *not* uniformly continuous. Then 

$$

(\exists \vepsi_{0} > 0)(\forall \delta = 1/n, \forall n \in \N)(\exists p_{n},q_{n}\in X)(d(p_{n}, q_{n}) < 1/n) \text{ but } 
d(f(p_{n}), f(q_{n})) \geq \vepsi_{0}

$$

Now since $X$ is *compact*, $(p_{n}) \subset X$, there $\exists$ convergent subsequence $(p_{n_{k}}), p_{n_{k}} \to p$. 

> I claim $q_{n_{k}} \to p$. 
Proof:  
This is $\alpha/2$ argument. Let $\alpha > 0$. Choose $K$ large enough so that 
$$
d(p_{n_{k}}, p) < \alpha/2
$$

and 
$$
d(p_{n_{k}}, q_{n_{k}}) < 1/n_{k} < \alpha/2 
$$

for $k \geq K$ which we can do since $p_{n_{k}} \to p$ and by premise + [[Archimedean Property]]. Then $\forall k \geq K$, $d(q_{n_{k}}, p) \leq d(q_{n_{k}}, p_{n_{k}}) + d(p_{n_{k}}, p) < \alpha$ and so they converge to the same point.

Since $f$ is continuous on $X$ and $p \in X$. Then since $p_{n_{k}} \to p$, then 

$$
\lim_{k\to\infty} f(p_{n_{k}}) = f(p)
$$

by [[Limits of Functions#Lemma (Sequential Characterization of Limits)]]. Indeed, 

$$
q_{n_{k}} \to p \implies f(q_{n_{k}}) \to f(p)
$$

So for $K$ large, $d(f(p_{n_{k}}), f(q_{n_{k}})) < \vepsi_{0}$. This is a contradiction. 

# Lemma (Cauchy Test for Uniform Continuity)
Suppose $f : X \to Y$ is uniformly continuous. Then for every [[Cauchy Sequences|Cauchy Sequence]] $(p_{n})$ in $X$, we have $(f(p_{n})) \subset Y$ is Cauchy. 

Proof:
Let $\vepsi > 0$. Since $f$ is uniformly continuous, $\exists \delta > 0$ such that 

$$
\forall p,q \in X, d(p,q) < \delta \implies d(f(p), f(q)) < \vepsi
$$

Given that $(p_{n})\subset X$ is Cauchy, $\exists N \in \N$ such that $\forall n,m\geq N, d(p_{n},p_{m})<\delta$. So since $f$ is uniformly continuous, $\forall n,m \geq N, d(f(p_{n}), f(p_{m})) < \vepsi$ and so $(f(p_{n}))$ is Cauchy. 

## Example 5
$f: (0, 1] \to \R$ for $x \mapsto 1/x$ is not uniformly continuous. 

Proof:
Note $(1/n)$ is Cauchy. So suppose by contradiction that $f$ is uniformly continuous. Then by [[Continuity#Lemma (Cauchy Test for Uniform Continuity)|lemma]], $(f(1/n))$ is Cauchy. But $f(1/n) = n$ which is not Cauchy (the sequence becomes $(n)$), a contradiction. 

# Proposition (Noncompactness Properties)
Let $A \subset \R$ be *not compact*. 
1. There exists a continuous function on $A$ which is not bounded. 
2. There exists a bounded continuous function that has no max on $A$. 
3. If $A$ is bounded, then $\exists$ a continuous function on $A$ which is not uniformly continuous.
In general, boundedness is necessary in $(3)$. Indeed if $A = \N$, then every function on $A$ is uniformly continuous because $\forall \vepsi > 0, \delta = 1/2$, so $\forall x,y \in A$, if $|x-y| < \delta$ then $x = y$ so $|f(x) - f(y)| < \vepsi$. 

Proof:
Consider the case where $A$ is bounded but not [[Compact Sets|compact]]. Since $A \subset \R$, by [[Heine-Borel Theorem]], $A$ cannot be closed. 

Then $\exists b \in \R$ such that $b$ is a limit point, but $b \not\in A$. 

$(1)$
Consider $f(x) = 1/(x-b)$. Since $b \not\in A$, $f$ is defined and it is continuous on $A$ by [[Limits of Functions#Corollary (Algebra of Continuous Functions)|algebra of continuous functions]] and by [[Continuity#Example 2|Example 2]]. 
- But $f$ is not bounded. (Prove this)
- $f$ is not uniformly continuous. (Prove this)

$(2)$
Let 
$$
 g(x) = \frac{1}{1 + (x - b)^{2}}
$$

Note $1 + (x - b)^{2} > 1$. So $g(x) < 1, \forall x \in A$. However since $\exists x_{n} \to b$ we see $\sup\{g(x) \mid x \in A\}$. It is bounded, but max. 

$(3)$
Exercise.

# Theorem (Continuity Retains Connectedness)
If $f$ is a continuous mapping of a metric space $X$ into a metric space $Y$, and if $C$ is a [[Connected Sets|connected subset]] of $X$, then $f(C)$ is [[Connected Sets|connected]].  

Proof:
Suppose by contradiction that $f(C)$ is separated. Then $f(C) = A \cup B$ where both sets are nonempty. Then, we get 

$$
\begin{aligned}
f(C) &= A \cup B \\
C &= f^{-1}(A \cup B) \\
&= f^{-1} (A) \cup f^{-1}(B)
\end{aligned}
$$

Let $E = C \cap f^{-1}(A)$ and $F = C \cap f^{-1}(B)$. Note that $C = E \cup F$. Both $E,F$ are empty; otherwise, $f(C) \subset B$, and $A = \emptyset$ a contradiction. 

Since $B \subset \ovl{B}$, then $f^{-1}(B) \subset f^{-1}(\ovl{B})$. As $f$ is continuous and $\ovl{B}$ is closed, by [[Continuity#Proposition (Topological Characterization of Continuity)|theorem]], we have that $f^{-1}(\ovl{B})$ is closed. So 

$$

\ovl{f^{-1}(B)} \subset \ovl{f^{-1}(\ovl{B})} = f^{-1}(\ovl{B})

$$

Then, $F = C \cap f^{-1}(B) \implies F \subset f^{-1}(B)$. Thus, 

$$

\ovl{F} \subset \ovl{f^{-1}(B)} \subset f^{-1}(\ovl{B})

$$

OTOH, $E = C \cap f^{-1}(A) \subset f^{-1}({A})$. Indeed, 

$$
E \cap \ovl{F} \subset f^{-1}(A) \cap f^{-1}(\ovl{B}) = \emptyset
$$

and similarly for $\ovl{E}\cap F$. Thus, $E,F$ are separated, a contradiction, as $C$ is connected.  
# Theorem (Continuity + Compact = sup/inf)
Suppose $f$ is a continuous real function on a [[Compact Sets|compact metric space]] $X$, and 

$$

M = \sup_{p \in X}f(p) \quad\quad\quad m = \inf_{p \in X} f(p)

$$

Then there exists $p,q \in X$ such that $f(p) = M$ and $f(q) = m$. The proof uses [[Heine-Borel Theorem]]. 

# Intermediate Value Theorem
Let $f$ be a real valued continuous function on $[a,b]$. If for $r$, 
$$
f(a) < r < f(b)
$$
then $\exists c \in [a,b]$ such that $f(c) = r$. 

Proof: 
WLOG, suppose $f(a) < f(b)$. Let $r \in [f(a), f(b)]$. WLOG, suppose $r \in (f(a), f(b))$. By the [[Continuity#Theorem (Continuity Retains Connectedness)|theorem]], $f([a,b]) \subset \R$ is [[Connected Sets|connected]]. Let $I = f([a,b])$. Since $I$ is an interval, $f(a) \in I, f(b) \in I$ and $f(a) < r < f(b)$. then $r \in I = f([a,b]) \implies r = f(c)$ for some $c \in [a,b]$. 

# Definition (Directional Limits)
Let $f: (a,b) \to \R$. Let $p \in (a,b)$. We say the **limit from the right** at $p$ equals $\ell$ and write 

$$

\lim_{x \to p^{+}}f(x) = \ell

$$

if

$$

(\forall \vepsi > 0)(\exists \delta > 0)(x \in (a,b), 0 < x - p < \delta)
\implies (|f(x) - \ell| < \vepsi)

$$

Equivalently, we say $\lim_{x \to p^{+}f(x)}= \ell$ if $\forall (x_{n})$ in $(p,b)$ such that $x_{n}\to p$ we have $f(x_{n}) \to \ell$. This is denoted as $f(p+)$ and $f(p-)$ for the **limit from the left**. 

## Remark (Equivalent Limit Direction)
1. $f$ has a limit at $p$ $\iff$ $f(p+) = f(p-)$. In particular, both exist. 
2. $f$ is continuous at $p$ $\iff$ $f(p+) = f(p-) = f(p)$. 

# Definition (Discontinuity)
Let $f : (a,b) \to \R$. We say $f$ has a **discontinuity of the first kind at $p$** if $f$ is discontinuous at $p$ but $f(p+)$ and $f(p-)$ both exist. 

Otherwise, we say $f$ has a **discontinuity of the second kind**. 

