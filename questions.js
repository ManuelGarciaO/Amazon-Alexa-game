{
    "type": "APL",
    "version": "1.1",
    "settings": {},
    "theme": "dark",
    "import": [],
    "resources": [],
    "styles": {},
    "onMount": [],
    "graphics": {},
    "commands": {},
    "layouts": {},
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "items": [
            {
                "type": "Container",
                "width": "100%",
                "height": "100%",
                "alignItems": "center",
                "justifyContent": "center",
                "items": [
                    {
                        "type": "Frame",
                        "width": "70vw",
                        "height": "70vh",
                        "backgroundColor": "white",
                        "item": [
                            {
                                "type": "Container",
                                "width": "100%",
                                "height": "100%",
                                "alignItems": "center",
                                "justifyContent": "center",
                                "items": [
                                    {
                                        "type": "Text",
                                        "text": "${payload.docdata.question}",
                                        "width": "auto",
                                        "height": "auto",
                                        "textAlign": "center",
                                        "textAlignVertical": "center",
                                        "color": "black",
                                        "fontSize": "8vh"
                                    },
                                    {
                                        "type": "Text",
                                        "text": "${payload.docdata.answer}",
                                        "width": "auto",
                                        "height": "auto",
                                        "textAlign": "left",
                                        "textAlignVertical": "center",
                                        "color": "blue",
                                        "fontSize": "7vh"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
