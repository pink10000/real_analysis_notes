#Lecture #140A
- [[Ordered Sets]]
- [[Fields]]
- The Real Field

# Notation
- Set of integers:
$$\mathbb{Z} : = \{0, \pm 1, \pm2, \pm 3, \cdots\}$$
- $$\mathbb{N} := \{1, 2, 3, 4, \cdots \}$$
- Rationals
$$\mathbb{Q} := \{p / q : p, \in \mathbb{Z}, q \in \mathbb{N} \}$$
- Real numbers that are not rational
$$\mathbb{Q}^{c} := \mathbb{R} \backslash \mathbb{Q} $$

# Lemma 
The equation $x^{2}= 2$ does not have any rational solutions. 
#### Proof:
Suppose by contradiction that there is a rational solution. That is, 
$$\exists \frac{p}{q}\in \mathbb{Q} $$ such that $$\left( \frac{p}{q} \right)^{2}= 2$$
WLOG, we can assume that not both $p,q$ are even (otherwise you could reduce it WLOG). Consider
$$\left( \frac{p}{q} \right)^{2}= 2 \iff \frac{p^{2}}{q^{2}} = 2 \iff p^{2}= 2q^{2}$$
Which implies that $p^{2}$ is even (since we multiply by $2$) and thus $p$ is even (by contrapositive, $p \text{ odd} \implies p^{2}\text{ odd}$). So,
$$\begin{aligned}
p^{2} = 2q^{2} 
&\iff (2k)^{2} = 2q^{2} \\
&\iff 2k^{2} = q^{2}\\
&\implies q^{2} \text{ is even} \\
&\implies q \text{ is even}
\end{aligned}$$
which is a contradiction. 

### [[Supremum]]
### [[Ordered Sets]]

