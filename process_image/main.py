# from src.getLatLon import *
from sqlalchemy.sql.sqltypes import BLOB, Date, String
from src.preProcess import *
import sqlalchemy as db
import base64

engine = db.create_engine(
    'mysql+pymysql://root:root@localhost/photolog', echo=False)

connection = engine.connect()


def create_table():
    metadata = db.MetaData()
    users = db.Table('image', metadata,
                     db.Column('id', String(30), primary_key=True),
                     db.Column('image_data', BLOB),
                     db.Column('date', Date),
                     )

    metadata.create_all(engine)


table = db.Table('image', db.MetaData(), autoload=True, autoload_with=engine)

# TODO: 테이블에 데이터 넣기 & 날자정보도 추출해서 추가하기.

print(table.columns.keys())
# pre_process()

# Lat, Lon = getData()

# filename = os.path.splitext('./test.zip')[1]

# print(Lat, Lon)
