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



###collaborator

> A collaborator "actor" vinculated to a facebook account.

A collaborator has:

- Photo (facebook)
- name (facebook)
- [interest]
- [initiative] 
- [events] #not in mvp
- [resource] #not in mvp
    
A collaborator can:

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
- [collaborator] that participates
- [resource] that it needs

An event can have:

- place (facebook)    

An event can:


----------
###initiative

> An initative creates events and is composed by collaborators without any hierarchy.


An initiative has:

- Picture 
- name 
- [interest]
- [collaborator] that participates
- [events] that organizes
- [resource]  that it needs
An initiative can:

- create an event
- modify its events
- modify your resources

----------
###resource 

> An resource is a tag used to search entities that have relation with it





