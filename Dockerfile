FROM continuumio/miniconda3

COPY environment/environment.yml .

RUN conda env create -f environment.yml

ENV PATH /opt/conda/envs/myenv/bin:$PATH

COPY . .

EXPOSE 8000

CMD ["python", "app.py"]