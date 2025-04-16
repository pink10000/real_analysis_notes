---
tags:
  - 140B
  - ch5
---
# L'Hopital's Rule
Suppose $f,g$ are real and differentiable in $(a,b)$ and $g'(x) \neq 0$ for all $x \in (a, b)$, where $-\infty \leq a < b \leq + \infty$. Suppose 
$$
\frac{f'(x)}{g'(x)} \to A \text{ as } x \to a
$$
If 
$$
f(x) \to 0 \text{ and } g(x) \to 0 \text{ as } x \to a 
$$
or if 
$$
g(x) \to \infty \text{ as } x \to a
$$
then
$$
\frac{f(x)}{g(x)} \to A \text{ as } x \to a
$$
The proof relies on two cases:
## Case 1: $A$ is a finite real number
We consider the case in which $- \infty \leq A < \infty$. Assume the indeterminate form is true. 

Choose $r,q$ such that $A < r < q$. 
> This is because as the ratio approaches $A$, if $A < r < q$, then the ratio is strictly less that $r,q$. 

Since $\lim_{x\to a} \frac{f'(x)}{g'(x)} = A$, then there must be some point $c$ where $a < c \leq b$ such that $\forall x \in (a, c)$, the inequality 
$$
\frac{f'(x)}{g'(x)} < r
$$
holds. We select $x,y$ such that $a < x < y <c$. Visually,
```
   <---(-----[----]--)---------)--->
       a     x    y  c         b
```
By the [[Derivative#Theorem (Cauchy Mean Value Theorem)]], we have:
$$
[f(x) - f(y)] g(t) = [g(x) - g(y)]f(t) 
\iff
\frac{f(x) - f(y)}{g(x) - g(y)} = \frac{f'(t)}{g'(t)}
$$
for some $t \in (x, y)$. Indeed, we see $f'(t)/g'(t) < r$. Now, we can rely on the assumption that 
$$
f(x) \to 0 \quad\quad\quad g(x) \to 0 \quad\quad\quad \text{as } x \to a 
$$
So, we get (and recall that $y$ is fixed, and that $a < x$, so technically we are doing $x \to a^+$): 
$$
\lim_{x \to a} \frac{f(x) - f(y)}{g(x) - g()} = \frac{0 - f(y)}{0 - g(y)} = \frac{f(y)}{g(y)}
$$
for $a < y < c$ (see visual aid). Thus, we are done. 

## Case 2: $A$ is of indeterminate form
Now, consider the case where $\frac{f(x)}{g(x)} = \frac{\infty}{\infty}$. In particular, this is the case where $g(x) \to \infty$ as $x \to a$.  We use the same equation as before:
$$
\frac{f(x) - f(y)}{g(x) - g(y)} < r
$$
with the same visual aid and $A < r < q$ and the same $c$ (recall that it was used to bound the limit by $r$). Since $g(x) \to \infty$, we find some $c_1$ where 
$$a < c_{1} < y$$ such that $\forall x \in (a, c_{1}) , g(x) > g(y)$ and $0 < g(x)$. Visually,
```
           x
    <---(-----)---------)--->
        a    c1         b
```
In particular, $g(x) - g(y) > 0$. So, 
$$
\begin{aligned}
\frac{f(x) - f(y)}{g(x) - g(y)} &< r \\
f(x) - f(y) &< r[g(x) - g(y)] \\
\frac{f(x) - f(y)}{g(x)} &< \frac{r[g(x) - g(y)]}{g(x)} \\
\frac{f(x)}{g(x)} - \frac{f(y)}{g(x)} &< r - r\frac{g(y)}{g(x)} \\
\frac{f(x)}{g(x)} &< r - r\frac{g(y)}{g(x)} + \frac{f(y)}{g(x)} \\
\end{aligned}
$$
which is valid for $a < x < c_{1}$. Indeed, if we take the limit superior, 
$$
\limsup_{x \to a} \frac{f(x)}{g(x)} 
< r - \limsup_{x \to a} \left(  r\frac{g(y)}{g(x)} + \frac{f(y)}{g(x)} \right) \leq r < q
$$
Again using the fact that $\lim_{x \to a} g(x) = \infty$. 
> I am pretty sure that you cannot take the limit directly. In particular, we do not know if the limit exists. So, we have to take the limit superior. But because of this, we must use $q$ as the upper bound. 

So, by this definition, there is some $c_{2}\in (a, c_{1})$ such that 
$$
\frac{f(x)}{g(x)} < q \quad\quad\quad (a < x < c_{2})
$$
So, for any $q$ where $A < q$, there is a point $c_{2}$ such that the above holds if $a < x < c_{2}$. 
> Rudin doesn't really go into detail (if any at all) as to how he obtains this $c_{2}$. But it seems that as we consider points closer to $a$, there must be some $c_{2}$ where $\forall x \in (a, c_{2})$, the inequality holds. 

Indeed, if $A < \infty$, then we can choose a $p$ such that $p < A$ and find a $c_{3}$ where 
$$
p < \frac{f(x)}{g(x)} \quad\quad\quad (a < x < c_{3})
$$
and so $p < A < q$. Indeed, as it is bounded above and below by $q, p$ respectively, $A$ must be finite (and thus the limit exists). Indeed, 
$$
\lim_{x \to a} \frac{f(x)}{g(x)} = A
$$
> If you don't find $c_{2}$ convincing, [this](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=1d134cb4f8b01bad4e45a88b9adfe9d6e47fb0d3) might help. It helped me wrap my head around the proof. 