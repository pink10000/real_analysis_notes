#ch2 #140A
# Definition
Let $X$ be a nonempty set. A **metric** on $X$ is a function 

$$
d : X \times X \to \R
$$

that satisfies the following:
1. (*Identity of the Indiscernibles*): $\forall p \neq q, d(p, q) > 0$ and $d(p, p) = 0$
2. (*Symmetry*): $\forall p, q \in X, d(p, q) = d(q, p)$
3. (*Triangle Inequality*): $\forall p, q, r \in X, d(p,q) \leq d(p, r) + d(r, q)$
	1. The distance between any two points is the shortest distance between them. 

We call $(X, d)$ a **metric space**. Sometimes $X$ is called a space and the elements are called **points**. 

## Corollary (Subsets of Metric Spaces)
- Subsets of metric spaces are metric spaces with the same distance function
- every subset of a [[Euclidean Space]] is a [[Metric Space]] 
	- all [[Euclidean Space|Euclidean Spaces]] are [[Metric Space|Metric Spaces]]

# Segments and Intervals
- A **segment** $(a,b)$ is a set of real numbers such that $a < x < b$ 
- An **interval** $[a,b]$ is the set of real numbers such that $a \leq x \leq b$
## Cells and Boxes
A **cell** or **box** in $\R^n$ is a Cartesian product of intervals in $\R^{n}$. Open cells come from open intervals and closed cells come from closed intervals.
## Convexity
Let $A \subset \R^{n}$ and $A \neq \emptyset$. We say $A$ is **convex** if the following holds: if $\forall p,q \in A$ the line segment $\ovl{pq} \subseteq A$ is entirely contained in $A$. That is, for all $t \in [0,1]$:

$$
(1 - t)p + tq \in A
$$

#  Open & Closed
A **open** ball $B$ is a set with center $x$ and radius $r$ where

$$
B := \{ y \in \R^{k} \mid |y - x| < r \}
$$

A **closed** ball $C$ is a set with a center $x$ and radius $r$ where

$$
C := \{y \in \R^{k} \mid |y - x| \leq r\}
$$

The set $E \subset \R^{k}$ is **convex** if 

$$
\lambda x + (1 - \lambda)y \in E
$$

whenever $x,y \in E$ and $0 < \lambda < 1$. For example, the *balls are convex*. For if $|y - x| <r, |z -x| < r$ and $\lambda \in (0, 1)$, we have

$$
\begin{aligned}
|\lambda x + (1 - \lambda)z - x| 
&= |\lambda(y - x) + (1 - \lambda)(z - x)| \\
&\leq \lambda|y - x| + (1 - \lambda)|z - x| \\
&< \lambda r + (1 - \lambda)r \\
&= r
\end{aligned}
$$

This is also true for closed balls. 

## As subsets of a Metric Space $X$
- Let $E \subset X$. Then $E$ is **closed** if every limit point of $E$ is a point of $E$. 
- $E$ is **open** if every point of $E$ is an [[Metric Space#Interior Point|interior point]] of $E$. 
	- $E$ is open $\iff E^{c}$ is closed 
- The **complement** of $E$ (denoted as $E^{c}$) is the set of all points $p \in X$ such that $p \neq E$. 
- $E$ is **perfect** if $E$ is closed and if every point of $E$ is a limit point of $E$.
	- In other words, $A = A'$. 
	- In particular, every perfect set is closed.
- $E$ is **bounded** if there is a real number $M$ and a point $q \in X$ such that $d(p,q)<M$ for all $p \in E$.
	- "You can draw a large circle that encompasses all of $E$."
- $E$ is **dense** in $X$ if every point of $X$ is a limit point of $E$, or a point of $E$ (or both).
# Neighborhood
A **neighborhood** of $p$ is a set $N_{r}(p)$ consisting of all $q$ such that $d(p, q)< r$ for some $r > 0$. The number $r$ is called the **radius** of $N_{r}(p)$.
## Theorem (Open Neighborhood)
Every neighborhood is an open set. Consider a neighborhood $E = N_{r}(p)$ and let $q$ be any point of $E$. Then there is a positive real number $h$ such that 

$$
d(p, q) = r - h
$$

For all points $s$ such that $d(p,q)<h$, we have then 

$$
d(p,s)\leq d(p,q) + d(q, s) < r - h + h = r
$$

so that $s \in E$. Thus $q$ is an interior point of $E$. 
- The second inequality is from the Triangle Inequality of it being a [[Metric Space]]. 

## Lemma (Infinite Neighborhoods)
Let $A \subset X$ and $p \in X$ be a limit point of $A$. Then $\forall r > 0, N_{r}(p) \cap A$ is infinite.
### Proof:
We prove by contradiction. Suppose there exists $r > 0$ such that $N_{r}(p) \cap A$ is finite. Let $\{q_{1}, \cdots q_{n}\}$ be this finite set except if $p \in A$. Now, $\forall i = 1, \cdots n$, $q_{i} \neq p$. So, 

$$
0 < d(p, q_{i}) < r
$$

for $q_{i}\in N_{r}(p)$ and $q_{i}\neq p$. Let $s = \min\{d(p, q_{i} \mid i = 1, \cdots n\} > 0$. Now we claim there does not exist $q \in A \cap N_{s}(p)$ with $q \neq p$. Indeed, $0 < s = \min\{d(p, q_{i}) \mid i = 1, \cdots n\} < r$. So $N_{s}(p) \subset N_{r}(p)$. However, 
$$
\{q_{1}, \cdots q_{n}\} = A \cap (N_{r}(p) \backslash \{p\})
$$

and $d(p, x) < s \implies x \neq q_{i}, \forall i$. Therefore $N_{s}(p) \cap A$ does not contain any $q \neq p$ and contradicts with the fact that $p$ is a limit point.  

## Corollary (No Limits in Finite Sets)
Let $A \subset X$ be finite. Then $A$ has no limit points. 

# Limit Point
A point $p$ is a **limit point** of the set $E$ if *every* neighborhood of $p$ contains a point $q \neq p$ such that $q \in E$. 

If $p \in E$ and $p$ is not a limit point of $E$, then $p$ is called an **isolated point** of $E$. 
# Interior Point
A point $p$ is an **interior** point of $E$ if there is a neighborhood $N$ of $p$ such that $N \subset E$.

# Lemma (Open Complement Closed)
Let $(X, d)$ be a metric space and $A \subset X$. $A$ is open $\iff$ $A^{c}$ is closed
### Proof:
Suppose $A$ is open. We want to show $A^{c}$ is closed. That is, $A^{c}$ contains all of its limit points. 

Since $X = A \cup A^{c}$, the above is the same as showing no point in $A$ is a limit point of $A^{c}$. 
- Indeed, if there was a limit point $p \in A$, then $A^{c}$ cannot be closed as $A, A^{c}$ are disjoint and $p \not \in A^{c}$.
- Precisely, $p \in X$ is a limit point of $A^{c}$ if $\forall r > 0, \exists q \in N_{r}(p), q = p, q \in A^{c}$. 

If $A = \emptyset$, then nothing to show. Suppose $A$ is nonempty so let $x \in A$. Since $A$ is open, $\exists s > 0$ such that $N_{s}(x) \subset A$. Thus $N_{s}(x) \cap A^{c} = \emptyset$ and so $x$ is not a limit point. 

Suppose $A^{c}$ is closed. Let $x \in A$. Then $x \not\in A^{c} \implies x$ is not a limit point of $A^{c}$. Then $\exists r > 0$ such that $N_{r}(x) \backslash \{x\} \cap A^{c} = \emptyset$ such that $N_{r}(x) \subset A$ an $x$ is an interior point of $A$ and $A$ is open as $x$ arbitrary. 

# Lemma (Openness and Closure)
1. $\emptyset$ and $X$ are both open and closed.
2. An arbitrary *union* of open sets is open.
3. An arbitrary *intersection* of closed sets is closed.
4. A finite *intersection* of open sets is open.
5. A finite *union* of closed sets is closed. 

### Proof:
1. Clear from definitions.
2. "Arbitrary" means we can have any kind of union (infinite, [[Cardinality|uncountably infinite]], 3) sets.
   
   Let $\{\theta_{\alpha} \mid \alpha \in I\}$ be a collection of open sets. Put 
   
$$
\theta = \bigcup_{\alpha \in I} \theta_{\alpha}
$$

   If $\theta$ is empty, then we are done. Suppose not. Let $p \in \theta$. We want to show that $p$ is an interior point such that $\exists r > 0, N_{r}(p) \subset \theta$. Since $p \in\theta$ then $\exists \alpha \in I$ such that $p \in \theta_{\alpha}$. But by assumption, $\theta_{\alpha}$ is open, such that $\exists r >0, N_{r}(p) \subset \theta_{\alpha} \subset \bigcup_{\alpha \in I}\theta_{\alpha} = \theta$. Indeed, $N_{r}(p) \subset \theta$ and $p$ is an interior point of $\theta$.
3. Consider $\{F_{\alpha}\mid \alpha \in I\}$ a collection of closed sets. We can show that $\bigcap_{\alpha \in I} F_{\alpha}$ is closed if the union is open. Indeed:
   
$$
\left( \bigcap_{\alpha \in I} F_{\alpha} \right)^{c} = \bigcup_{\alpha \in I}F_{\alpha}^{c}
$$

   by DeMorgan's Law. Note, $\forall \alpha \in I$, since $F_\alpha$ is closed, then $F_{\alpha}^{c}$ is open. Indeed, by $(2)$ then the complement is open and thus the intersection is closed. 
4. Suppose $(O_{i})^{n}_{i = 1}$ is a finite collection of open sets. We want to show:
   
$$
O := \bigcap_{i=1}^{n}O_{i}
$$

   is open. Let $x \in O$. We WTS $x$ is an interior point. So, $x \in O_{i}$ for all $i$. Hence, $O_{i}$ is open such that $\exists r_{i}> 0$ such that $N_{r_{i}}(X) \subset O_{i}$. 
   
   Let $r = \min\{r_{i} \mid i = 1, \cdots, n\}$. Because the set of radii is finite, $r > 0$. Then $\forall i = 1, \cdots n$ we have $N_{r}(x) \subset N_{r}(x) \subset \theta_{i}$. Thus $N_{r}(x) \subset \bigcap_{i=1}^{n} O_{i} = O$. 
5. Follows from $(4)$ and DeMorgan's Law. 

# Definition (Completeness)
From [[Cauchy Sequences#Definition (Completeness)]] 