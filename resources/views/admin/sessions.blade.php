
@extends('layouts.app')

@section('content')

<div class="mt-3">.</div>
<div class="mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Sessions</div>

                <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Agent</th>
                          <th scope="col">IP</th>
                          <th scope="col">User</th>
                          <th scope="col">Last Activity</th>
                          <th scope="col">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                          @foreach($sessions as $session)
                          <tr>
                             <td>{{ $session->user_agent }}</td>
                              <td>{{ $session->ip_address }}</td>
                              <td>{{ $session->user_id }}</td>
                              <td>{{ \Carbon\Carbon::createFromTimeStamp($session->last_activity)->diffForhumans() }}</td>
                              <td class="text-center">
                                <button type="button" name="button" class="btn btn-danger delete-session" data-id="{{ $session->id }}">X</button>
                              </td>
                          </tr>
                          @endforeach
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
