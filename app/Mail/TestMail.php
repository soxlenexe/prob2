<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;



class TestMail extends Mailable
{
    public $msg;

    public function __construct($msg)
    {
        $this->msg = $msg;
    }

    public function build(){
        return $this->view('emails.msg.sended');
    }
}
