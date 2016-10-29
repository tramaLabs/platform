#Entidades

###nome

>descricao

nome tem:

- campo (fonte)
- entidade
- [lista de algo]

nome pode ter:

- campo (fonte)
- entidade
- [lista de algo]

nome pode:

- acao entidade
- acao [lista de entidade]

----------



###usuario

> Um usuario fisico "ator" (pessoa fisica ou juridica) vinculado a uma conta do facebook.

Um usuario tem:

- foto (facebook)
- nome (facebook)
- [interesse]
- [iniciativa] que participa
- [eventos] que participa
- [recurso]
    
Um usuario pode:

- criar uma iniciativa
- aderir a uma iniciativa
- contribuir com um evento, atraves de recursos 

----------

###interesse (n mvp)
    
> Um interesse eh uma tag usada para busca de entidades que a possuem

Um interesse tem:

- nome (facebook)
    
Um interesse pode:

----------
###evento

> Um evento de uma iniciativa, vinculado a um evento do facebook.

Um evento tem:

- nome (facebook)
- descricao (facebook)
- [interesse] #n mvp
- iniciativa que o organiza
- [usuario] que participa
- [recurso] que precisa

Um evento pode ter:

- local (facebook)    

Um evento pode:


----------
###iniciativa

> Uma iniciativa cria eventos e eh composta por usuarios, sem uma hierarquia. 

Uma iniciativa tem:

- foto (facebook)
- nome (facebook)
- [interesse]
- [usuario] que participa
- [eventos] que organiza
- [recurso]  que precisa

Uma iniciativa pode:

- criar um evento
- modificar seus eventos
- modificar seus recursos

----------
###recurso #mvp só hashtag 

> Um recurso eh algo fisico ou uma acao que usuarios podem dar para iniciativas ou para eventos

Um recurso tem:

- nome 
- [interesse]
- usuario dono
- evento que utiliza no momento
- iniciativa que utiliza no momento

Um recurso pode:

----------



