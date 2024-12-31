# NodeStream

## Funcionalidades

1 - Upload de vídeos:
  * Endpoint para enviar arquivos de vídeo.
  * Salvar vídeos no servidor em um diretório específico.
    
2 - Transcodificação de vídeos:
  *  Converter os vídeos para formatos compatíveis com reprodução em diferentes navegadores (usando FFmpeg ou biblioteca similar).
  * Gerar versões em diferentes resoluções (240p, 480p, 720p, 1080p).

3 - Manipulação de frames:

* Extrair frames individuais.
* Adicionar filtros ou marcas d'água aos frames.
* Reexportar o vídeo processado.

4 - Streaming adaptativo (HLS):
  * Gerar fragmentos e playlists HLS para transmissão eficiente.
  * Servir vídeos adaptativos com base na velocidade da internet do cliente.

5 - Reprodução de vídeo:
  * Criar endpoints que permitem o cliente acessar os vídeos.
  * Implementar funcionalidades como pausa, retroceder e avançar.

6 - Visualização de miniaturas:
  * Gerar automaticamente miniaturas de vídeos enviados.
  * Criar um endpoint para recuperar essas miniaturas.

7 - Estatísticas do vídeo:
  * Adicionar monitoramento básico como número de visualizações, tempo assistido e popularidade.
