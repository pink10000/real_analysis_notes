#ch4 #140A
# Definition 
Let $(X, d_{X})$ and $(Y, d_{Y})$ be [[Metric Space|metric spaces]]. Let $A \subset X$ and 
$$f : A \to Y$$
Let $p \in X$ be a limit point of $A$ ($p$ need not be in $A$). Let $q \in Y$. We say 
$$\lim_{x\to p} f(x) = q 
\quad\text{ or }\quad 
f(x)\xrightarrow{x\to p} q
$$
if $\forall \vepsi > 0, \exists \delta > 0$ such that $0 < d_{X}(x, p) < \delta$ for all $x \in A$ with  $d_{Y}(f(x),q) < \vepsi$
> As we get closer to $p$ by $x$, we get closer to $q$ by $f(x)$.

## Example 1
Let $f : A = (0, 1) \subset \R \to \R = Y$ where $x \mapsto x$. Then $0$ is a [[Metric Space#Limit Point|limit point]] of $A$ but **not** in $A$. However, we can claim $\lim_{x\to0}f(x) = 0$. 

Proof:
Let $\vepsi > 0$. Choose $\delta = \vepsi$. If $x \in A = (0, 1)$ and $d(x, 0) = |x| < \delta$ then 
$$d(f(x), 0) = |f(x)| = |x| < \delta = \vepsi$$ and so we are done. 

## Example 2 
$$f: (0, 1) \to \R \quad\quad\quad f(x) = 1/x$$
then $\lim_{x\to0}f(x)$ does not exist. 

Proof:
Suppose by contradiction the limit is $M \in \R$. Let $\vepsi = 1/2$. Then $\exists \delta > 0$ such that 
$$\forall x \in A, 0 < d(x, 0) < \delta \implies d(f(x), M) < \vepsi = 1/2$$
By [[Archimedean Property]], $\exists n\in \N$ such that $1/\delta < n \implies 1/n < \delta$. By picking $n$ larger, we can get $M + 1 < n$. Then $x = 1/n$, note $1/n \neq 0$ and $1/n \in N_{\delta}(0)$, so 
$$d(f(1/n), M) = |n-m| = n - M < 1/2$$
which is a contradiction. 

# Lemma (Sequential Characterization of Limits)
Let $A \subset X,Y$ be [[Metric Space|metric spaces]]. Let $p \in A$ be a limit point, $f: A \to Y$. Then 
$$\lim_{x \to p} f(x) = q \iff (\forall (a_{n}) \subset A) ( a_{n} \neq p \wedge a \to p), f(a_{n}) \to q$$
Proof:
$(\implies)$
Suppose $\lim_{x\to p} f(x) = q$. Let $\vepsi > 0$. Then $\exists \delta  > 0$ such that $\forall x \in A, 0 < d(x, p) < \delta$. We have $d(f(x), q) < \vepsi$. 

> We've chosen some $\vepsi$, and rewrote the definition of function limits. The goal is that if $(a_{n}) \subset A$ and $a_{n}\neq p$, $a_{n} \to p$, then $f(a_{n}) \to q$. (Unfold definitions.)

Since $a_{n} \to p, \exists N \in \N$ such that $\forall n \geq N$, $d(a_{n}, p) < \delta$ and $0 < d(a_{n}, p)$ since $a_{n}\neq p$. Hence, by definition of $\lim_{x\to p} f(x) = q$, we have that $d(f(a_{n}), q) < \vepsi$. Then $\forall n \geq N, f(a_{n}) \to q$.  

$(\impliedby)$
Suppose $\forall (a_{n}) \subset A, a_{n}\neq p, a_{n} \to p$ and that $f(a_{n}) \to q$. 
> The goal is to show $\lim_{x\to p} f(x) = q$. We show by contradiction since the goal is static.

Suppose $\lim_{x\to p} f(x) \neq q$. Then 
$$(\exists \vepsi_{0} > 0)
(\forall \delta > 0)
(\exists x \in A, 0 < d(x, p) < \delta \wedge d(f(x), q) \geq \vepsi_{0})
$$
Apply for $n \in \mathbb{N}$, this negation to $\delta = 1/n$. Then $\forall n \in \N, \exists a_{n} \in A, 0 < d(a_{n}, p) < 1/n$ but $$d(f(a_{n}), q) \geq \vepsi_{0}$$Now we have $(a_{n}) \subset A$, since $d(a_{n}, p) > 0$ then $a_{n}\neq p$ and $a_{n} \to p$. So by assumption, $d(f(a_{n}), q) < \vepsi_{0}$. This is a contradiction. 

## Corollary (Uniqueness of Limits)
If $f$ has a limit at $p$, then the limit is unique. 

Proof:
We apply the previous [[Limits of Functions#Lemma (Sequential Characterization of Limits)|lemma]] and the uniqueness of of limits of [[Sequences]]. 

## Corollary (Algebra of Limits)
Let $A \subset X, f : A \to \C, g : A \to \C$. Suppose 
1. $\lim_{x \to p}f(x) = \ell_{1}$
2. $\lim_{x \to p} g(x) = \ell_{2}$
Then
1. $\lim_{x \to p}(f\pm g)(x) = \ell_{1}\pm \ell_{2}$
2. $\lim_{x\to p}(f\cdot g)(x) = \ell_{1} \cdot \ell_{2}$
3. If $\ell_{2}\neq 0$, $\lim_{x \to p}(f/g)(x) = \ell_{1}/\ell_{2}$

Proof: This follows from [[Limits of Functions#Lemma (Sequential Characterization of Limits)]] and [[Sequences#Lemma (Algebra of Sequences)]]. 

# Lemma (Continuity = Limits)
If $p \in A$ and $p$ is a limit point of $A$, then 
$$f \text{ is continuous at } p \iff \lim_{x\to p}f(x) = f(p)$$
Proof:
$(\implies)$
For every $\vepsi > 0, \exists \delta > 0$ such that $\forall x \in A$, if $d(x, p) < \delta$, then $d(f(x), f(p)) < \vepsi$. But then this is the definition of [[Limits of Functions#Definition|limits]] as the limit $L = f(p)$.

$(\impliedby)$ 
Let $\vepsi > 0$. Choose $\delta$ as in the definition of limit. Suppose now that $x \in A, d(x, p) < \delta$. We have 2 cases:
1. $x = p$. Then $d(x, p) < \delta$. Moreover, $d(f(x), f([])) = d(f(p), f(p)) = 0 < \delta$
2. $x \neq p$. Then $d(x, p) > 0$. By definition of limits, $d(f(x), f(p)) < \vepsi$. 

## Corollary (Sequential Characterization of Continuity) 
Let $f : A \to Y$, $p \in A$. Then $f$ is [[Continuity|continuous]] at $p$ $\iff \forall (a_{n}) \subset A, a_{n} \to p$ we have $f(a_{n}) \to f(p)$. 

## Corollary (Algebra of Continuous Functions)
Let $f,g : X \to \C$ where $X,Y$ are [[Metric Space|metric spaces]]. Then if $f,g$ are [[Continuity|continuous]] at $p \in X$, then 
1. $f + g$ is continuous at $p$. 
2. $f\cdot g$ is continuous at $p$.
3. $f/g$ is continuous at $p$ if $g(p) \neq 0$