---
tags:
  - 140A
  - ch4
---
# Complex Functions
In general, the definition of a [[Derivative]] holds for [[Complex Numbers|complex]] functions defined on $[a,b]$.
- [[Derivative#Theorem (Differentiable is Continuous)]]
- [[Derivative#Theorem (Derivative Rules)]]
also hold (with the same proofs). For complex function $f$, the real $f_1$ and imaginary $f_{2}$ parts can be described as:
$$
f(t) = f_{1}(t) + if_{2}(t)
$$
for $t \in [a, b]$ and as $f_{1}, f_{2}$ are real, 
$$
f'(x) = f_{1}'(x) + if_{2}'(x)
$$
$f$ is differentiable at $x$ iff $f_{1}, f_{2}$ are both differentiable at $x$. 
## Lagrange Mean Value Theorem Fails
The [[Derivative#Theorem (Lagrange Mean Value Theorem)]] does not hold. For some real $x$, 
$$
f(x) = e^{ix} = \cos x + i \sin x 
$$
Then $f(2\pi) = f(0) = 1 - 1 = 0$, but $f'(x) = ie^{ix}$ and $|f'(x)| = 1$ for all real $x$. So, 
$$
1 = f'(x) = \frac{f(2\pi) - f(0)}{2\pi - 0} = 0
$$
which is a contradiction. 

## L' Hopital's Rule Fails
On the segment $(0, 1)$, let $f(x) = x$ and
$$
g(x) = x + x^{2}e^{i/x^{2}}
$$
Since $|e^{it}| = 1$ for all real $t$, we see that 
$$
\lim_{x \to 0} \frac{f(x)}{g(x)} = 1
$$
But then 
$$
g'(x) = 1 + \left(2x - \frac{2i}{x} \right)e^{i/x^{2}}
$$
for $x \in (0, 1)$ and that 
$$
|g'(x)| \geq \left| 2x - \frac{2i}{x} \right| - 1 \geq \frac{2}{x} - 1 = \frac{2 - x}{x}
$$
Hence 
$$
\left| \frac{f'(x)}{g'(x)} \right| = \frac{1}{|g'(x)|} \leq \frac{x}{2 - x}
$$
and so 
$$
\lim_{x \to 0} \frac{f'(x)}{g'(x)} = 0
$$
