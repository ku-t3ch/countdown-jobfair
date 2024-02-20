from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/set_date")
def set_date():
    with open("saved_date.txt", "w") as f:
      f.write(str(datetime.now() + timedelta(days=3)))


@app.get("/is_started")
def is_started():
    with open("saved_date.txt", "r") as f:
        return {"status": f.read() != ""}



@app.get("/date_target")
def date_target():
    with open("saved_date.txt", "r") as f:
        return {"status" : str(f.read())}


@app.get("/reset_date")
def reset():
    with open("saved_date.txt", "w") as f:
        f.write("")