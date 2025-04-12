#ch2 #140A
# Open Cover
The **open cover** of a set $E$ in a [[Metric Space]] $X$ is the collection $\{G_{\alpha}\}$ of open subsets of $X$ such that $E \subset \bigcup_{\alpha} G_{\alpha}$ 
- think of it as "covering" a set with open subsets
### Example:
Let $A = (1/2, 1]$, then
$$
\left\{ \left(-45, \frac{3}{4}\right), \left(\frac{1}{2}, 2\right) \right\}
$$
is a collection of open sets and each element is open, and $A = (1/2, 1] \subset (-45, 3/4) \cup (1/2, 2)$. 
# Compact
A subset $K$ of a [[Metric Space]] $X$ is said to be **compact** if every open cover of $K$ contains a *finite* subcover.

More explicitly, if $\{G_{\alpha}\}$ is an open cover of $K$, then there are finitely many indices $\alpha_{1}, \cdots \alpha_{n}$ such that 
$$
K \subset G_{\alpha_{1}} \cup \cdots \cup G_{\alpha_{n}}
$$

## Corollary
Every finite set is compact since they all have open covers that have finitely many indices. 

## Lemma (Compact Implies Bounded)
Suppose $K \subset X$ is compact, nonempty. Then $K$ is bounded. 

Let $x \in X$. Now, for every $p \in K, r_{p}:= d(x, p)$ let $r_{p} := d(x, p) + 1 > 0$. Note that $p \in N_{r_{p}}(x) = \{y \in X \mid d(y, x) < r_{p}\}$ by construction. Now, $\{ N_{r_{p}}(x) \mid p \in K \}$ is a cover of $K$. 

Since $K$ is compact, there exists a finite subcover such that there is a finite $p_{1}, \cdots p_{n} \in K$ such that 
$$
K \subset \bigcup_{i=1}^{n} N_{r_{p_{i}}}(x)
$$
Let $R = \max\{ r_{p_{i}} \mid i = 1, \cdots, n \} > 0$. Then $\forall i = 1, \cdots , n$. 
$$
N_{r_{p_{i}}}(x) \subset N_{R}(x)
$$
and so $K \subset N_{R}(x)$ and is bounded. Remember that **$x$ is fixed**.

## Lemma (Compact Implies Closed)
Suppose $K \subset X$ is compact, nonempty. Then $K$ is closed. 

Let $p \in K^{c}$. Then if $p$ is interior, then $K^{c}$ is open and $K$ is closed.  We first find neighborhoods which miss points in $K$. 

Let $q \in K$, then $d(p, q) > 0$. Let $r_{q} = \frac{1}{2}d(p, q)$. Then $N_{r_{q}}(p) \cap N_{r_{q}}(q) = \emptyset$. Indeed, if $x \in N_{r_{q}}(p) \cap N_{r_{q}}(q)$, then 
$$
2r_{q} = d(p, q) \leq d(p, x) + d(x, q) < 2r_{q}
$$
a contradiction. 

Now $\{N_{r_{q}}(q) \mid q \in K\}$ is an open cover of $K$. Since $K$ is compact, $\exists$ a finite subcover $\exists q_{1} \cdots q_{n} \in K$ such that 
$$
K \subset \bigcup_{i=1}^{n}N_{r_{q_{i}}}(q_{i})
$$
Let $r = \min\{ r_{q_{i}} \mid i =1, \cdots , n \} > 0$.  Then $N_{r}(p) \subset N_{r_{q_{i}}}(p), \forall i$ 
- and $N_{r_{q_{i}}}(p) \cap N_{r_{q_{i}}}(q_{i}) = \emptyset$ 
- and $N_{r}(p) \cap N_{r_{q_{i}}}(q_{i}) = \emptyset, \forall i$
Now since $K \subset \bigcup_{i=1}^{n}N_{r_{q_{i}}}(q_{i})$ an $N_{r}(p) \cap K = \emptyset$, $p$ has a neighborhood that misses $K$, and is an interior point. Therefore $K^{c}$ is open and by [[Metric Space#Lemma (Open Complement Closed)|lemma]], $K$ is closed. 

## Example 
Let 
$$
A = \left\{ \frac{1}{n} \;\bigg|\; n \in \N \right\}
$$

This is not compact. We need to find one open cover with no finite subcover. We will find $I_{1}, I_{2}, \cdots$ so that 
1. $1/n \in I_{n}$ and $I_{n}$ is open 
2. $I_{n}\cap I_{m} = \emptyset, \forall n \neq m$
3. $A \subset \bigcup_{m\in \N} I_{m}$

Define $I_{n}:= (1/n - r_{n}, 1/n + r_{n}) = N_{r_{n}}(1/n)$. 
```
<--(|)----(|)----(|)-- ... --(|)----(|)----(|)--->
  1/n+1   1/n    1/n-1       1/3    1/2     1 
```
Then we can let $r_{n} = \frac{1}{2}(1/n - 1/(n-1))$ such that $I_{n}\cap I_{m}= \emptyset$ and $A \subset \bigcup_{n\in\N}I_{n}$. 

---
# Theorem (Relative Compactness)
Suppose $K \subset Y \subset X$. Then $K$ is *compact relative* to $Y$ if and only if $K$ is *compact* in $X$. 

#### Proof: 
$(\implies):$
Suppose $K$ is compact relative to $X$, and let $\{O_{\alpha}\}$ be a collection of sets, open relative to $X$, and an open cover of $K$. 

We need to find $O_{\alpha_{1}},\cdots O_{\alpha_{n}}$ such that 
$$
K \subset \bigcup_{\alpha \in I} O_{\alpha}
$$
Let $V_{\alpha} = O_{\alpha} \cap Y$ for $\alpha \in I$. Then $V_{\alpha}$ is open relative $Y$ by the [[Induced Metric Space#Lemma (Open/Closed by Above)|lemma]]. Note that  $K \subset Y$ so 
$$
\begin{aligned}
K 
&\subset \left( \bigcup_{\alpha \in I}O_{\alpha} \right) \cap Y \\
&= \bigcup_{\alpha \in I} (O_{\alpha} \cap Y) \\
&= \bigcup_{\alpha \in I} V_{\alpha}
\end{aligned}
$$

Since $K$ is compact relative $Y$ an $\{V_{\alpha} \mid \alpha \in I\}$ is an open relative $Y$ cover of $K$. Then $\exists \alpha_{1}, \cdots, \alpha_{n}$ such that 

$$
K \subset \bigcup_{i=1}^{n} V_{\alpha_{i}} \implies K \subset \bigcup_{i=1}^{n} O_{\alpha_{i}}
$$

$(\impliedby):$
Suppose $K$ is compact in $X$. 

Suppose $\{V_{\alpha} \mid \alpha \in I \}$ is an open relative $Y$ cover of $K$. We need to extract a finite subcover. Note that by [[Induced Metric Space#Lemma (Open/Closed by Above)|lemma]] we have that 

$$
V_{\alpha} = O_{\alpha} \cap Y
$$
 for some $O_{\alpha}$. Then 

$$
K 
\subset \bigcup_{\alpha \in I}V_{\alpha} 
= \left(\bigcup_{\alpha \in I}O_{\alpha}\cap Y \right)
\subset \bigcup_{\alpha \in I}O_{\alpha}
$$

so $K$ has an open cover $\{O_{\alpha} \mid \alpha \in I\}$ since $K$ is compact then $\exists$ finite subcover, say $\alpha_{1}\cdots \alpha_{n}$ such that 

$$
K \subset \bigcup_{i=1}^{n} O_{\alpha}
$$

Recall $K \subset Y$ so take the intersection of the above with $Y$. So, 

$$
\begin{aligned}
K
&= K \cap Y \\
&\subset \left(\bigcup_{i=1}^{n} O_{\alpha_{i}} \right) \cap Y \\
&= \bigcup_{i=1}^{n} (O_{\alpha_{i}} \cap Y) \\
&= \bigcup_{i=1}^{n} V_{\alpha_{i}} \\
\end{aligned}
$$

As we found a finite subcover, we are done. 

# Lemma (Closed x Compact)
- Let $K \subset X$ be compact and $F$ be closed. Then $F \cap X$ is compact. 
- In particular, if $K$ is compact, then for $A \subset X$,  $A \cap K \subset K$ is compact. 

We prove the second statement. Let $A \subset X$ be closed, and by the [[Compact Sets#Lemma (Compact Implies Closed)|lemma]], $K$ is closed and $A \cap K$ is closed. hence $A \cap K \subset K$ and some $K$ compact. We have $A \cap K$ is compact.

Now the first claim. WTS $F$ is compact. Let $\{O_{\alpha} \mid \alpha \in I\}$ be an open cover of $F$. $F$ is closed, so $F^{c}$ is open. Consider
$$
\{ O_{\alpha} \mid \alpha \in I\} \cup \{ F^{c} \}
$$
Note $K \subset F^{c} \cup \bigcup_{\alpha \in I}$, which covers $K$ and some extra elements. Since $K$ is compact we can extract finite indices $\alpha_{1}, \cdots, \alpha_{n} \in I$ such that
$$
 K \subset O_{\alpha_{1}} \cup \cdots \cup O_{\alpha_{n}} \cup F^{c} 
$$
Since $F \subset K \subset F^{c} \cup \bigcup_{i=1}^{n} O_{\alpha_{i}}$. Then as $F \cap F^{c}= \emptyset$, then $F = \bigcup_{i=1}^{n}O_{\alpha_{i}}$ and $F$ is compact. 

# Corollary (Chain of Inclusion)
Let 

$$
K_{1}\supset K_{2}\supset K_{3}\supset \cdots
$$

be a collection of *nonempty* compact sets. Then $\bigcap_{n \in \N}K_{n}$ is *nonempty*. 

Suppose not. Then $\bigcap_{n \in \N}K_{n} = \emptyset$. Then [[Compact Sets#Lemma (Intersection of Compact)|lemma]] says $\exists n_{1}< n_{2}< \cdots < n_{\ell}$ such that 

$$
\bigcap_{i=1}^{\ell} K_{n_{i}} = \emptyset
$$

Note that $K_{n_{1}} \supset K_{n_{2}} \supset \cdots \supset K_{n_{\ell}}$. But then 

$$
K_{n_{\ell}} = \bigcap_{i=1}^{\ell}K_{n_{i}} = \emptyset
$$

which is a contradiction. 


# Lemma (Intersection of Compact)
Suppose $\{K_{\alpha}\}_{\alpha \in I}$ is a collection of compact subsets of $X$. Assume that 

$$
\bigcap_{\alpha \in I} K_{\alpha}= \emptyset
$$

Then $\exists$ finite subcollection whose intersection is $\emptyset$. 

Proof: 
W will use compactness of one set and closedness of the rest. Fix some $K_{\alpha_{0}}$ in the collection. Because 

$$
\begin{aligned}
\bigcap_{\alpha} K_{\alpha} = \emptyset 
&\implies K_{\alpha_{0}} \cap \left( \bigcap_{\alpha \in I, \alpha \neq \alpha_{0}} \right) = \emptyset \\
&\iff K_{\alpha_{0}} \subset \left( \bigcap_{\alpha \in I, \alpha \neq \alpha_{0}} K_{\alpha} \right)^{c} = \bigcup_{\alpha \in I, \alpha \neq \alpha_{0}} K_{\alpha}^{c} \\
\end{aligned}
$$

Now this is an open cover of $K_{\alpha_{0}}$ since $K_{\alpha}$ closed for $\alpha \in I$.  Hence, $\exists \alpha_{1}\cdots \alpha_{n}\in I, \alpha_{i}\neq \alpha_{0}$ such that 

$$
K_{\alpha_{0}} \subset \bigcup_{i=1}^{n} K_{\alpha_{i}}^{c} 
= \left( \bigcap_{i=1}^{n} K_{\alpha_{i}} \right)^{c}
$$

which implies 

$$
K_{\alpha_{0}} \cap \left( \bigcap_{i = 1}^{n} K_{\alpha_{i}} \right) = \emptyset
$$

# Theorem (Criterion for Compactness)
Let $(X, d)$ be a metric space. Then $K \subset X$ is compact $\iff$ every infinite subset $A$ of $K$ has a limit point in $K$. 

Proof:
We only show the forward direction via contradiction. Assume $\exists A \subset K$ where $A$ is infinite such that no limit points are in $K$. Then $\forall p \in K, \exists r_{p} > 0$ such that 

$$
N_{r_{p}}(p) \cap K = \begin{cases}
\emptyset & p \in K - A \\
\{p\} & p \in A \\
\end{cases}
$$

(Every neighborhood on $p$ cannot intersect with $A$ at all.)

Now, $\{ N_{r_{p}} \mid p \in K \}$ is an open cover of $K$. Since $A$ is infinite, then we need infinitely many neighborhoods $N_{r_{p}}(p)$ to cover $A$. Namely, one for every $p \in A$. So, no finite subcover, and a contradiction. 

Backwards: From Homework 4.1

# Lemma ($\R$ is not Compact)
$\R$ is not compact. This is done by constructing a single open cover with no finite subcover. 

$$
\forall n \in \Z, I_{n} = (n, n + z) \ni n + 1 
$$

Note $\R \subset \bigcup_{n\in \Z} I_{n}$ but no finite sub cover exists. This is by consequence of [[Archimedean Property]]. 

# Theorem 2.34
Compact subsets of [[Metric Space|metric spaces]] are [[Metric Space#Open & Closed|closed]]. 

Let $K$ be a compact subset of metric space $X$. Proof follows from showing that $K^{c}$ is open relative to $X$.   

# Theorem 2.35
Closed subsets of compact sets are compact. 