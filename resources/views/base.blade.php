<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@section('title') @show</title>

    <!-- Boostrap -->

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>

    <!-- CSS -->

    <link rel="stylesheet" href="{{asset('css/estilos.css')}}">

    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

   



</head>

<body class="">

    <div class="contenido ">
        <div id="menu" class="menu bgc-morado">
            <div class="d-flex justify-content-around p-2 m-2">
                <img src="{{asset('img/logo.png')}}" alt="" width="50%" class="m-auto">
                
            </div>
            <div class="text-center">
                <div class="linea"></div>
            </div>

            <a href="#" class="{{Request::is('') ? 'activo' : ''}} mt-2 position-relative">
                <div class="{{Request::is('') ? 'lineaA' : ''}}  position-absolute rounded"></div>
                <small class="f-18 c-blanco">Calendario</small>
            </a>
            <a href="#" class="{{Request::is('') ? 'activo' : ''}} mt-2 position-relative">
                <div class="{{Request::is('') ? 'lineaA' : ''}}  position-absolute rounded"></div>
                <small class="f-18 c-blanco">Productos</small>
            </a>
            <a href="#" class="{{Request::is('') ? 'activo' : ''}} mt-2 position-relative">
                <div class="{{Request::is('') ? 'lineaA' : ''}}  position-absolute rounded"></div>
                <small class="f-18 c-blanco">Administración</small>
            </a>
            <a href="#" class="{{Request::is('') ? 'activo' : ''}} mt-2 position-relative">
                <div class="{{Request::is('') ? 'lineaA' : ''}}  position-absolute rounded"></div>
                <small class="f-18 c-blanco">Cerrar sesión</small>
            </a>
            
        </div>

        <div class="contenidoBase">
            <div class="d-flex justify-content-between nav">
                <h2 class="fw-bold">@section('titulo') @show</h2>
                <div class="f-18 mt-auto mb-auto me-5">
                    <a href="#" class="me-4 c-grisO" data-bs-toggle="modal" data-bs-target="#modal-perfil"><small>Perfil</small></a>
                    <a href="#" class="me-4 c-grisO" data-bs-toggle="modal" data-bs-target="#modal-contrasena"><small>Contraseña</small></a>
                    <a href="{{url('')}}" class="c-grisO"><small>Salir</small></a>
                </div>
            </div>

            <div class="container">
                <div class="row p-0">
                    <div class="col-md-10">
                        @if(Session::has('alertBase'))
                        <div class="alert alert-{{session('alertBase.type')}} alert-dismissible fade show" role="alert">
                            <small>{{session('alertBase.msg')}}</small>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        @endif
                    </div>
                </div>

                @section('contenido')



                @show
            </div>
        </div>
    </div>

    <!-- Modal Perfil -->
    <div class="modal fade" id="modal-perfil" tabindex="-1" aria-labelledby="modal-perfil" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{url('')}}" method="post">
                    @csrf
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 mt-2">

                               

                                
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary border" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary bgc-verde border">Gurdar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Fin Modal Perfil -->

    <!-- Contraseña -->

    <div class="modal fade" id="modal-contrasena" tabindex="-1" aria-labelledby="modal-contrasena" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cambiar de contraseña</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{url('Cuenta/cambiar_contrasena')}}" id="form-contrasena" method="post">
                    @csrf
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">Contraseña actual</label>
                                <input class="bgc-gris rounded border" name="contrasena" id="contrasena" type="password" data-parsley-minlength="8" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">Contraseña nueva</label>
                                <input class="bgc-gris rounded border" name="contrasenaNueva" id="contrasenaNueva" type="password" data-parsley-minlength="8" required>
                            </div>
                            <div class="col-md-6">
                                <label for="">Confirmar contraseña</label>
                                <input class="bgc-gris rounded border" name="contrasenaConfirma" id="contrasenaConfirma" type="password" data-parsley-minlength="8" data-parsley-equalto="#contrasenaNueva" required>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary border" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary bgc-verde border">Cambiar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Fin Contraseña -->

    <script src="https://kit.fontawesome.com/e44ca10330.js" crossorigin="anonymous"></script>
    @section('JS')

    @show

    <script>
        $(document).ready(function() {



            $('#modal-perfil').on('hide.bs.modal', function(event) {
                $('#perfil').val('');
            });

            $('#modal-contrasena').on('hide.bs.modal', function(event) {
                $('#contrasena').val('');
                $('#contrasenaNueva').val('');
                $('#contrasenaConfirma').val('');
            });



        });
    </script>


</body>

</html>