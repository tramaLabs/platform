#Entities

###name

>description

name has:

- field (source)
- entity
- [list of something]

name can have:

- field (source)
- entity
- [lista de algo]

name can:

- action entity
- action [list of entities]

----------



###user

> A user "actor" vinculated to a facebook account.

A user has:

- Photo (facebook)
- name (facebook)
- [interest]
- [initiative] 
- [events] #not in mvp
- [resource] #not in mvp
    
A user can:

- create an initiative
- join an initiative
- contribute, offering a resource 

----------

###interest 
    
> An interest is a tag used to search entities that have relation with it

----------
###event

> An event of an initiative, vinculated to an event of facebook

An event has:

- name (facebook)
- description (facebook)
- [interest] #not in mvp
- initiative 
- [user] that participates
- [resource] that it needs

An event can have:

- place (facebook)    

An event can:


----------
###initiative

> An initative creates events and is composed by users without any hierarchy.


An initiative has:

- Picture 
- name 
- [interest]
- [user] that participates
- [events] that organizes
- [resource]  that it needs
An initiative can:

- create an event
- modify its events
- modify your resources

----------
###resource 

> An resource is a tag used to search entities that have relation with it





