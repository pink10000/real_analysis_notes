#ch1 #140A
# Definition
A **field** is a set $F$ together with two operations, $(+)$ and $(\cdot)$. That is,
$$
\begin{aligned}
+ &: F \times F \to F && (a, b) \mapsto a + b \\
\cdot &: F \times F \to F && (a,b) \mapsto a \cdot b \\
\end{aligned}
$$
These operations satisfy
- Addition axioms
- Multiplication axioms
- Distribution axioms

# Ordered Field
An **ordered field** is a a pair $(F, <)$ where $F$ is a field and $<$ is an ordering such that $F$ becomes an [[Ordered Sets|Ordered Set]] and the following hold:
1. $(\forall a,b,c \in F)(a < b \implies a + c < b + c)$
2. $(\forall a,b \in F)(a,b >0 \implies ab > 0)$ 
#### Example:
- $(\mathbb{Q}, +, \cdot, <)$ is an ordered field. 
- $(\mathbb{Z}, +, \cdot, <)$ is not an ordered field. While there is an ordering, the issue is that $\mathbb{Z}$ is not a field because there are no multiplicative inverses. 
- Let $p$ be a prime. Then $\mathbb{F}_{p} := \{0, 1, 2, \cdots, p - 1\}$ with "clock" addition and multiplication. It is a field, but cannot be ordered. Indeed, since $1 \neq 0$ then $1 <0$ or $1 > 0$. Then, $2 < 1$. Inductively, by adding it $p$ times, we get $0 < 1$, which is a contradiction on the first case. Case 2 is similar. 

# Theorem (Completeness of $\mathbb{R}$)
There exists a ordered field which has the **least upper bound property**. We denote this by $\mathbb{R}$. Moreover, $\mathbb{Q} < \mathbb{R}$. In some places, $\mathbb{R}$ having the least upper bound property is called the Completeness of $\mathbb{R}$. 