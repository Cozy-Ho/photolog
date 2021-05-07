import os
import uuid


def pre_process():
    data_path = "./data/"
    dir_list = os.listdir(data_path)
    # 2 depth for get file_name
    # remove file if its not a jpg file
    for dir in dir_list:
        file_list = (os.listdir(data_path+dir))
        for file_name in file_list:
            full_file_name = os.path.splitext(data_path+dir+"/"+file_name)[1]
            if not full_file_name.endswith("jpg"):
                os.remove(data_path+dir+"/"+file_name)
            else:
                os.rename(data_path+dir+"/"+file_name,
                          data_path+dir+"/"+str(uuid.uuid4())+".jpg")
