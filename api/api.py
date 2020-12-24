import docker
client = docker.from_env()

def get_containers():
    containers = client.containers.list()
    list = []
    for x in containers:
        list.append(x.attrs)
    return list

def get_container(id):
    return client.containers.get(id)

def get_container_by_id(id):
    return get_container(id).attrs

def start_container(id):
    return client.containers.start(id)

def stop_container(id):
    return get_container(id).stop()

def restart_container(id):
    return get_container(id).restart()