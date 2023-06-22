"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageLocation = exports.MessageButtons = exports.MessageList = exports.MessageText = void 0;
function MessageText(textResponse, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `whatsapp:${number}`,
        "text": {
            "preview_url": true,
            "body": textResponse,
        },
        "type": "text",
    });
    return data;
}
exports.MessageText = MessageText;
function MessageList(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `whatsapp:${number}`,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Tengo estas opciones"
            },
            "body": {
                "text": "Son:"
            },
            "footer": {
                "text": "Selecciona una de las opciones para poder atenderte"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar-header",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-comprar",
                                "title": "Vender",
                                "description": "Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "Centro de atencion",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "Puedes visitar nuestra agencia."
                            },
                            {
                                "id": "main-contacto",
                                "title": "Centro de contacto",
                                "description": "Te atenderá uno de nuestro agentes"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}
exports.MessageList = MessageList;
function MessageButtons(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `whatsapp:${number}`,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Selecciona uno de los productos?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-laptop",
                            "title": "Laptop"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-computadora",
                            "title": "Computadora"
                        }
                    }
                ]
            }
        }
    });
    return data;
}
exports.MessageButtons = MessageButtons;
function MessageLocation(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `whatsapp:${number}`,
        "type": "location",
        "location": {
            "latitude": "5.559455106648253 ",
            "longitude": "-73.34499717963602",
            "name": "Viva tunja",
            "address": "Av Universitaria, Tunja, Boyacá"
        }
    });
    return data;
}
exports.MessageLocation = MessageLocation;
