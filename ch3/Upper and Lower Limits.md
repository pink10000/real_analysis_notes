#ch3 #140A
# Definition 
Let $\{s_{n}\}$ be a [[Sequences|sequence]] of real numbers with the following property: 

For every real number $M$ there is an integer $N$ such that $n \geq N$ implies $s_{n}\geq M$. We then write
$$s_{n} \to +\infty$$
and likewise, for every real $M$ there is an integer $N$ such that $n \geq N$ implies $s_{n}\leq M$, we write
$$s_{n}\to - \infty$$
Let $E$ be the set of numbers $x$ such that $s_{n_{k}} \to x$ for some subsequence $\{s_{n_{k}}\}$. This set $E$ contains all subsequential limits, and maybe $+\infty, - \infty$. Then, 
$$s^{*}= \sup E \quad\quad\quad s_{*}= \inf E$$
These are the **upper** and **lower** limits of $\{s_{n}\}$, with the notation 
$$\limsup_{n \to\infty} s_{n} = s^{*} \quad\quad\quad \liminf_{n\to \infty} s_{n} = s_{*}$$
# Lemma (Closed)
Let $\{p_{n}\}$ be a [[Sequences|sequence]] in $X$. Let $\mathcal{A}$ be the set of subsequence limits of $\{p_{n}\}$. Then $\mathcal{A}$ is closed. 

Proof:
Let $q \in \mathcal{A}'$. The goal is to show that $q \in \mathcal{A}$. That is, there exists subsequence $\{p_{n_{i}}\}$ such that $p_{n_{i}} \to q$. We split on the number of occurrences of $q$: infinitely, or finitely. 

Case 1: Infinite
Suppose there exist indices $n_{1}< n_{2}< \cdots$ such that $p_{n_{i}} = q$ for $i \in \mathbb{N}$. Then certainly $p_{n_{i}} = q \to q$ so $q \in \mathcal{A}$. 

Case 2: Finite
We have the case where the sequence stops hitting $q$. Then $\exists N \in \N, \forall n \geq N, p_{n}\neq q$. We will find some $n_{1}< n_{2}< \cdots$ that are greater than $N$ such that 
$$d(p_{n_{i}}, q) < \frac{2}{i}$$
Consider $r = 1$ (where $i = 1$) and $N_{r}(q)$. Since $q \in \mathcal{A}'$, then $\exists x_{1}\in \mathcal{A}$ such that $x_{1}\in N_{1}(q)$ where $x_{1} = q$. Now, 
$$\begin{aligned}
x_{1} \in \mathcal{A} 
&\implies \exists p_{n_{i_{j}}} \to_{j \to \infty} x_{1} \\
&\implies \exists n_{1} > N \text{ such that } p_{n_{1}} \in N_{1}(x_{1}) \\
&\implies d(p_{n_{1}}, q) \leq d(p_{n_{1}}, x_{1}) + d(x_{1}, q) \leq 1 + 1 = 2
\end{aligned}$$
Now that we have our first index $n_{1}$ and thus point, we can repeat for smaller radii. Suppose 
$$\exists n_{1}< n_{2} < \cdots < n_{i}$$
such that $\exists x_{i}\in \mathcal{A}, x_{i} \neq q$ with $x_{i}\in N_{1/i}(q)$ and $d(p_{n_{i}}, q) < 2/i$. Now we can show the inductive step:

Consider $N_{1/{i + 1}}(q)$. Then $\exists x_{i+1} \in \mathcal{A}$ such that $x_{i+1}\neq q, x_{i+1} \in N_{1/{i+1}}(q)$ since $x_{i+1}\in \mathcal{A}$, so $\exists n_{i+1} > n_{i}$ such that $p_{n_{i+1}} \in N_{1/(i+1)}(q)$. This implies that 
$$d(p_{n_{i}}, q)\leq d(p_{n_{i}}, x_{i+1}) + d(x_{i+1}, q) \leq \frac{1}{i + 1} + \frac{1}{i + 1} = \frac{2}{i + 1}$$
Thus we may find 
$$n_{1}< n_{2} < \cdots$$
such that $d(p_{n_{i}}, q) < \frac{2}{i}$. Let $\varepsilon > 0$. By [[Archimedean Property]], $\exists I \in \mathbb{N}$ such that 
$$\frac{2}{\varepsilon} < I \iff \frac{2}{I} < \varepsilon$$
so $\forall i \geq I, d(p_{n_{i}}, q) < 2/i \leq 2/I < \varepsilon$. Thus $p_{n_{i}} \to q$ so $q \in \mathcal{A}$. 

# Lemma (Checkability)
Let $\{p_{n}\}$ be a sequence in $\R$. Define $p^*$and $p_*$ as before. 
1. $p^{*}, p_{*} \in \mathcal{A}$. They are limits of subsequence of $p_{n}$
2. (Checkable criterion for upper/lower limits): If $x > p^{*}$, then $\exists N \in \N$ such that $p_{n}< x$, $\forall n \geq N$. Similarly, $y < p_{*}$, then $\exists N \in \N$ such that $y < p_{n},\forall n \geq N, y$. 

Proof:
We will only consider the case $p^{*}, p_{*}\in \R$. (i.e, it is a finite real, and $-\infty, \infty$ from [[Extended Real Numbers]]).

Case 1:
Suppose so, then $\mathcal{A}$ is bounded. From [[Upper and Lower Limits#Lemma (Closed)|closedness]], we have that $\sup(\mathcal{A}), \inf(\mathcal{A}) \in \ovl{\mathcal{A}}$, so $\ovl{\cA} = \cA$ 
Case 2:
We prove by contradiction. Say $x > p^{*}$. Then WTS $\exists N \in \N, \forall n \geq N, p_{n}< x$. Then the contradiction is that $\forall N \in \N, \exists n \geq N, p_{n}\geq x$. 
- when $N = 1, \exists n_{1} \geq 1, p_{n_{1}}\geq x$
- when $N = n_{1} + 1$, $\exists n_{2}> n_{1}, p_{n_{2}} \geq x$ and so on.
Indeed, we have
$$n < n_{2} < n_{3} < \cdots$$
such that $p_{n_{i}} \geq x$. This implies $\exists \alpha \geq x$ which is a subsequence limit of $p_{n_{i}}$. So $\exists$ a subsequence of $\{p_{n}\}$ which has $\alpha$ as a limit. Indeed, we have 2 cases:
3. $\{p_{n_{i}}\}$ diverges to $\infty$ and this implies $p^{*}= \infty$ which is a contradiction.
4. $\{p_{n_{i}}\}$ is bounded above, say by $b$. Then $\forall i \in \N$, $x \leq p_{n_{i}} \leq b$ implies that by [[Sequences#Lemma (Bolzano-Weierstrass Theorem)|BW]] there is a convergent subsequence. But then the subsequence is this one, which is a contradiction.
Thus $\alpha \geq x > p^{*} = \sup(\cA)$. 
> It is a [[Supremum]] after all. So the proof strategy is similar.

# Lemma 
Let $(p_{n}), (q_{n})$ be a [[Sequences|sequence]]. Assume $\exists N \in \N$, $p_{n} \leq q_{n}, \forall n \geq N$. Then 
$$\begin{aligned}
\ovl{\lim}p_{n} &\leq \ovl{\lim}q_{n}\\
\underline{\lim}p_{n} &\leq \underline{\lim}q_{n} 
\end{aligned}$$
Proof: From homework. 

