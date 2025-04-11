#ch1 #140A
$$\C := \{a + bi \mid a,b \in \R, \, i^{2} = -1\}$$
The **complex numbers** are a field of ordered pairs, in the sense that $(a, b) \neq (c, d)$ if $a \neq c$.  
# Definition 
If $z \in \C$ (and so $c = a + bi$ for $a,b \in \R$) then we denote by:
- **Complex Conjugate:** $\bar{z}$ and $\bar{z} := a - bi$
- **Modulus:** $|z|^{2}$ where $|z|^{2}:= (a + bi)(a - bi) = a^{2}+ b^{2} \in \R$ 
	- We note that $z \in \R, z = a + 0i$ for $a \in \R$. So, $|z| = \sqrt{a^{2}+ 0^{2}} = |a|$. 

## Notation 
If $z = a + bi$ then 
$$\begin{aligned}
\text{Re}(z) &:= a \\
\text{Im}(z) &:= b \\
\end{aligned}$$
# Proposition (Complex Facts)
Let $z,w \in \C$. Then,
- $\overline{z + w} = \bar{z} + \bar{w}$
	- 
- $\overline{zw} = \bar{z} \cdot \bar{w}$ 
- $z + \bar{z} = 2\text{Re}(z)$
- $z - \bar{z} = 2\text{Im}(z)\cdot i$
- $z\bar{z} = |z|^{2} = \text{Re}(z)^{2}+ \text{Im}(z)^{2}\in \R$
- $|z|>0$ if $z \neq 0$ and $|0| = 0$
- $|\bar{z}| = |z|$
- $|z\cdot w| = |z| \cdot |w|$
- $|\text{Re}(z)| \leq |z|$ 
- $|\text{Im}(z)| \leq |z|$
### Proof: (Prop 1)
$$\overline{z + w} = \bar{z} + \bar{w}$$
Let $z = a + bi$ and $w = c + di$. where $a,b,c,d \in \R$. 
$$\overline{z + w} = \overline{(a + bi) + (c + di)} = \overline{(a + c) + (b + d)i}$$
On the other hand, 
$$\bar{z} + \bar{w} = \overline{a + bi}+ \overline{c + di}  = (a + c) - (b + d)i$$

# Triangle Inequality
$$|z + w| \leq |z| + |w|$$
### Proof:
Since all terms are non negative, it suffices to show 
$$|z + w|^{2}\leq (|z| + |w|)^{2}$$
Then,
$$\begin{aligned}
|z + w|^{2}
&= (z + w) \cdot \overline{(z + w)} \\
&= (z + w) \cdot (\bar{z} + \bar{w}) \\
&= (z\bar{z}) + z\bar{w} + w\bar{z} + w\bar{w} \\
&= |z|^{2}+ z\bar{w} + \bar{\bar{w}z} + |w|^{2} \\
&= |z|^{2} + 2\Re(z\bar{w}) + |w|^{2} \\
\end{aligned}$$
We note $|\Re(z\bar{w})| \leq z\bar{w} = |z|\cdot |\bar{w}| = |z|\cdot |w|$. 

Continuing the inequality, 
$$\begin{aligned}
|z + w|^{2}
&= |z|^2 + 2\Re(z\bar{w}) + |w|^{2}\\
&\leq |z|^{2}+ 2|z|\cdot|w| + |w|^{2}\\
&= (|z| + |w|)^{2}
\end{aligned}$$
And so the inequality holds true. 

# Cauchy-Schwarz Inequality
If $a_{1}, \cdots a_n$ and $b_{1}, \cdots b_{n}$ are complex numbers, then 
$$\bigg| \sum_{j=1}^{n} a_{j}\overline{b_{j}} \bigg|^2
\leq
\sum_{j=1}^{n} |a_{j}|^{2}
\sum_{j=1}^{n} |b_{j}|^{2}
$$
where the proof follows from the idea that $B > 0$. and concludes at the inequality.  

Also recall that 
$$|\vec{u}\cdot \vec{v}| \leq ||\vec{u}|| \cdot ||\vec{v}||$$

### Proof:
$$
A = \sum_{j=1}^{n} |a_j|^2 \quad\quad B = \sum_{j=1}^{n} |b_j|^2 \quad\quad C = \sum_{j=1}^{n} a_j \ovl{b_j}
$$
Suppose $B = 0$. Then the proof is trivial. Suppose not, in which $B > 0$. Then, 
$$\begin{aligned}
\sum_{j=1}^{n} |Ba_{j}- Cb_{j}|^{2}
&= \sum_{j=1}^{n} (Ba_{j} - Cb_{j}) \cdot \ovl{(Ba_{j}- Cb_{j})} \\
&= \sum_{j=1}^{n} (Ba_{j} - Cb_{j})(B\ovl{a_{j}} - \ovl{C}\cdot\ovl{b_{j}}) \\
&= b^{2} \sum_{j=1}^{n} a_{j}\ovl{a_{j}} - B\ovl{C} \sum a_{j}\ovl{b_{j}} - CB \sum\ovl{a_{j}}b_{j} + C\ovl{C} \sum b_{j}\ovl{b_{j}} \\
&= B^{2}A - B\ovl{C}C - CB\ovl{C} + C\ovl{C} B \\
&= B^{2} - B|C|^{2} - |C|^{2}B + |C|^{2}B \\
&= AB^{2} - |C|^{2} B 
\end{aligned}$$
In which $AB^{2}- |C|^{2} B \geq 0$ because $B$ is positive. So, 
$$\begin{aligned}
&\iff AB^{2}\geq |C|^{2}B \\
&\iff AB \geq |C|^{2} \\ 
\end{aligned}$$
which is Cauchy-Schwarz. 

