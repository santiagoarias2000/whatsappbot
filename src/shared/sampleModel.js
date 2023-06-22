"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleLocation = exports.sampleList = exports.sampleButtons = exports.sampleDocument = exports.sampleVideo = exports.sampleAudio = exports.sampleImage = exports.sampleTExt = void 0;
function sampleTExt(textResponse, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `whatsapp:${number}`,
        "text": {
            "body": textResponse,
        },
        "type": "text",
    });
    return data;
}
exports.sampleTExt = sampleTExt;
function sampleImage(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `whatsapp:${number}`,
        "type": "image",
        "image": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png",
        },
    });
    return data;
}
exports.sampleImage = sampleImage;
function sampleAudio(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `whatsapp:${number}`,
        "type": "audio",
        "audio": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3",
        },
    });
    return data;
}
exports.sampleAudio = sampleAudio;
function sampleVideo(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `whatsapp:${number}`,
        "type": "video",
        "video": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4",
        },
    });
    return data;
}
exports.sampleVideo = sampleVideo;
function sampleDocument(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `whatsapp:${number}`,
        "type": "document",
        "document": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf",
        },
    });
    return data;
}
exports.sampleDocument = sampleDocument;
function sampleButtons(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `whatsapp:${number}`,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Confimas tu registro?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Si"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "No"
                        }
                    }
                ]
            }
        }
    });
    return data;
}
exports.sampleButtons = sampleButtons;
function sampleList(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `whatsapp:${number}`,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "tengo estas opciones"
            },
            "footer": {
                "text": "selecciona una de las opciones para poder atenderte"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-comprar",
                                "title": "Vender",
                                "description": "Vende tus productos"
                            },
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
exports.sampleList = sampleList;
function sampleLocation(number) {
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
exports.sampleLocation = sampleLocation;
