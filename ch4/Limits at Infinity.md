#ch4 #140A
# Definition
Let $f : \R \to \R$. 
1. $\lim_{x \to \infty} f(x) = \ell$ if $\exists \ell \in R$ such that $\exists \ell \in \R, \forall \vepsi > 0, \exists m \in \R$ such that $x > M$, then $|f(x) - \ell| < \vepsi$.
2. Let $p \in \R$. We say $\lim_{x \to p}f(x) = \infty$ if $\forall M \in \R, \exists \delta > 0$ such that $0 < |x - p| < \delta \implies f(x) > M$. 
3. $\lim_{x \to \infty}f(x) = \infty$ if $\forall M \in \R, \exists N \in \R$ such that $\forall x > N$, then $f(x) > M$.
These are all similar for $-\infty$. 

## Example 1 
$$\lim_{x \to 0}(1/x^{2}) = +\infty$$
Proof: 
Let $M \in \R$. Need to find $\delta > 0$ such that $0 < |x - 0| < \delta$ we have $1/x^{2} > 0$. 
1. $0 < |x| < \delta \implies 1/x^{2}> 1/\delta^{2}$
2. If $M \leq 0$, for $\delta = 1$, then $f(x) = 1/x^{2} \geq 0 \geq M$. 
3. If $M > 0$, let $M = 1/\delta^{2} \iff \delta = \sqrt{M}$. 

So if $0 < |x| <\delta$, then $f(x) = 1/x^{2} > 1/\delta^2 = M$. 
