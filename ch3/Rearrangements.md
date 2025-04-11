#ch3 #140A
# Definition 
Let $\{k_{n}\}$ be a sequence in which every positive integer appears once and only once. Suppose $r : \mathbb{N}\to \mathbb{N}$, a bijection. Putting
$$a_{n}' = a_{r(n)}$$
for $n = 1, 2, 3, \cdots$, we say that $\sum a_{n}'$ is a **rearrangement** of $\sum a_{n}$. 
> Quite literally, we are just moving around the values of $a_{n}$. 

# Theorem (Convergence)
Let $\sum a_{n}$ be [[Series#Definition (Absolute Convergence)|absolutely convergent]]. Then every rearrangement $\sum a_{n}'$ also converges to the same limit as $\sum a_{n}$.

Proof:
Let 
1. $A_{n} = a_{1}+ \cdots + a_{n}$ 
2. $A_{n}' = a_{1}' + \cdots + a_{n}'$
Since $\sum a_{n}$ converges, then $\sum_{n=1}^{\infty} a_{n} = \lim_{n\to\infty} A_{n}$. We will show that 
$$\forall \vepsi > 0, \exists N \in \N, \forall n \geq N, |A_{n} - A_{n}'| < \vepsi$$
This implies $(A_{n}')$ converges to $\lim_{n} A_{n}$ with an $\vepsi/2$ proof. Since $\sum |a_{n}|$ converges, $\exists N \in \N$ such that $\forall m, \ell \geq N$, 
$$\begin{aligned}
\sum_{k=\ell}^{m} |a_{k}| < \vepsi/2
\xRightarrow{m\to\infty} \sum_{k=\ell}^{\infty} |a_{k}| \leq \vepsi/2 < \vepsi
\implies \sum_{k=\ell}^{\infty} |a_{k}| < \vepsi 
\end{aligned}$$
Since $r$ is a bijection, then $\exists m \in \mathbb{N}$ such that 
$$
\{1, 2, \dots, N - 1\} \subset \{r(1), r(2), \dots, r(m)\}
$$
Indeed, $r$ is surjective, so $M$ exists and $r$ is injective, so $M \geq N- 1$. Let $n > M$. Then
$$\begin{aligned}
|A_{n} - A_{n}'| 
&= |a_{1}+ a_{2} + \cdots + a_{n} - a_{1}' - a_{2}' - \cdots - a_{n}' | \\
&\leq \sum_{k=N_{1}}^{\infty} |a_{k}| < \vepsi
\end{aligned}$$
and so it converges. 
> Since we remove some terms, it's sum will be bounded by the absolute convergence, and this will imply convergence.

