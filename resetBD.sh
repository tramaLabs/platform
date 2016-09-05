sudo rm /srv/docker/postgresql/* -rf
docker kill postgresql 
docker rm -f postgresql
docker run -itd --restart always --publish 5433:5432 --name postgresql --volume /srv/docker/postgresql:/var/lib/postgresql postgresql
  
