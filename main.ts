function measureDistance () {
    // トリガーピンを安定させてからパルス送信
    pins.digitalWritePin(DigitalPin.P7, 0)
    basic.pause(2)
    pins.digitalWritePin(DigitalPin.P7, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P7, 0)
    // EchoピンがHIGHの間の時間を測る（マイクロ秒）
    duration = pins.pulseIn(DigitalPin.P8, PulseValue.High)
    // 距離 = 時間 × 音速（0.034cm/μs）÷ 2（往復）
    distance = duration * 0.034 / 2
    // 結果を表示
    basic.showNumber(Math.round(distance))
    basic.pause(500)
}
let distance = 0
let duration = 0
measureDistance()
