from flask import Flask

def create_app(config_name):
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///aplicacion_eventos.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    # Token seguridad
    # Determinar la validez de los tokens
    app.config['JWT_SECRET_KEY'] = 'frase-secreta'
    # Permitir la propagación de Excepciones
    app.config['PROPAGATE_EXCEPTIONS'] = True

    return app