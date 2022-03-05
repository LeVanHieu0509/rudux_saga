## Genaration function\*

    - Sẽ trả ra một genaration object
    - Phải .next để tiếp tục chạy tới các cái yield tiếp theo
    - Thay thế bằng effect creator call (cách test)
    - Test so sánh giá trị .next().value với giá trị mình gắn cố định vào để test

## Effect

    - là 1 javascript object có chứa thông tin để saga middleware biết cần phải làm gì

## Effect creator in redux saga

    - là một function trả về một Effect. Và không được thực thi cái effect này
    - người thực thi là sagamiddleware chú không phải là 1 Effect creator
    - Việc thực thi được hành động bời một phần mềm trung gian trong quá trình lặp đi lặp lại được mô tả ở trên.
    - Phần mềm trung gian kiểm tra từng mô tả Hiệu ứng và thực hiện hành động thích hợp

# takeEvery

takeEvery (pattenr, saga, ...args): chạy saga mỗi lần khi có action partern được dispatch, mình dispatch bao nhiêu lần thì sẽ chạy bấy nhiêu lần

## takeLastest

Chạy saga, nhưng khi có action pattern mới dược dispatch, thì cái saga trước đó sẽ bị cancel (Lây thắng mới nhất để chạy - ở cuối)

## takeLeading

Chạy saga khi action pattern được dispatch, nhưng action tiếp theo sẽ bị cancel cho đêns khi saga trước đó chạy xong (Láy thằng đầu tiên để chạy - ở đầu)

## put(action)

dispatch action từ saga lên trên store

## call (fn , ...args)

Gọi hàm fn và truyền tham số args vào hàm đó

## all([...effects])

## take(pattern) and fork (fn, ...args)

mô hình watcher ... worker, đợi dispatch action pattern thì sẽ thực hiện một cái task nào đó (lắng nghe và sau đó thực thi)

## throttle(ms,pattern,saga, ...args)

- Throttle cái action pattern, đảm bảo chỉ chạy saga 1 lần trong khoảng thời gian ms
- Khi dispath trong 1 khoảng ms thì đảm bảo chạy tối đa 1 lần, dù có dispath bao nhiêu lần đi nưã thì cũng chạy tối đa 1 lần

## debounce(ms,pattern,saga, ...args)

- Debounce 1 cái action pattern, đảm bảo chỉ chayj một lần sau khi đã đợi một khoảng thời gian ms
- Đợi sau một khoảng thời gian là , nếu như không có cái nào dispatch nữa thì nó sẽ chạy saga được truyền vào từ tham số này
- nếu như có dispatch thìtiếp đục đợi ms tiếp theo

## retry(maxtries,delay, fn, ...args)

Cố gắng gọi lại hàm fn nếu faild, sau mỗi delay ms và tối đa chỉ thử maxtries

## delay

Chặn các hiệu ứng thực thi trong vòng ms và trả về giá trị value

## fork và spawn

    - Tạo task để chạy ở phía dưới background
    - Và có 2 loại fork và spawn (non-blocking) [Không cần phải đợi mà chạy luôn]

    *Khác nhau:
    + fork: attached (Đính kèm và dính chung lại với nhau)
        - Nếu fork thằng con có bị lỗi gì đó thì đều báo lên thằng cha
        -Nếu 1 trong nhưng child efect bị lỗi thì sẽ cancel hết những cái effect khác và báo lỗi giống nhau
        - Không thể bắt lỗi được trong task forked (Phải handle err trong cái thằng cha của nó)


    + spawn: detached (Không có liên quan gì với nhau cả)
        - Là thằng độc lập riêng, nếu task có error thì không ảnh hưởng tới thằng cha
