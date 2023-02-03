from flask_sqlalchemy import SQLAlchemy
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields
from enum import Enum

db = SQLAlchemy()


class Categoria(Enum):
    CONFERENCIA = 1
    SEMINARIO = 2
    CONGRESO = 3
    CURSO = 4

class Tipo(Enum):
    VIRTUAL = 1
    PRESENCIAL = 2

class Evento(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(128))
    categoria = db.Column(db.Enum(Categoria))
    lugar = db.Column(db.String(256))
    direccion = db.Column(db.String(256))
    fecha_inicio = db.Column(db.String(64))
    fecha_fin = db.Column(db.String(64))
    tipo = db.Column(db.Enum(Tipo))
    
    # Columna con la llave foranea
    usuario = db.Column(db.Integer, db.ForeignKey('usuario.id'))
    # relacion con eventos
    #canciones = db.relationship('Cancion', secondary='album_cancion', back_populates='albumes')
    # Evitar que títulos de los albums se dupliquen / Coma del final indica que es una tupla
    #__table_args__ = (db.UniqueConstraint('usuario', 'nombre', name='titulo_unico_evento'),)

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(64))
    contrasena = db.Column(db.String(32))

    # Creando relacion uno a muchos: un usuario tiene muchos eventos pero un evento
    # puede pertenecer solamente a un usuario
    eventos = db.relationship('Evento', cascade='all, delete, delete-orphan')

# Serializar
# Declaraciones de los equemas después de haber hecho las declaraciones de las calses

# Clase intermediaria que le dirá a Marshmallow como convertir una enumeración en un diccionario
# para que pueda hacer la serialización automáticamente
class EnumADiccionario(fields.Field):
    # Método de la clase
    def _serialize(self, value, attr, obj, **kwargs):
        if value is None:
            return None
        return {'llave':value.name, 'valor':value.value}

class EventoSchema(SQLAlchemyAutoSchema):
    categoria = EnumADiccionario(attribute=('categoria'))
    tipo = EnumADiccionario(attribute=('tipo'))

    class Meta:
        model = Evento
        include_relationships = True
        load_instance = True

class UsuarioSchema(SQLAlchemyAutoSchema):
    class Meta:
         model = Usuario
         include_relationships = True
         load_instance = True