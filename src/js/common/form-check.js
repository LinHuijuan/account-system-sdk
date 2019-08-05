const formatText = (key) => {
    return '您填写的' + key + '格式不正确'
};

const rules = {
    email: (v) => {
        if (!v.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
            return {
                type: 'email',
                message: formatText('邮箱')
            }
        }
    },

    mobile: (v) => {
        if (!v.match(/^1(3|4|5|7|8)\d{9}$/)) {
            return {
                type: 'mobile',
                message: formatText('手机号')
            }
        }
    },

    IDcard: (v) => {
        return {
            type: 'IDcard',
            message: formatText('身份证号')
        }
    },

    present: (v) => {
        if (!v.trim()) {
            return {
                type: 'present',
                message: '必填'
            }
        }
    }
}

class FormCheck {
    constructor (opts) {
        this.opts = opts;
    }

    check (form) {
        
        const elements = this.opts.form.elements || document.getElementById(this.opts.form).elements;
        
        let checkResults = [];

        Array.from(elements).filter( (item) => {
            return item.getAttribute('valid');
        }).map((item) => {
            const valids = item.getAttribute('valid').split(', ');
            const value = item.value;
            let errorArr = [];
            valids.forEach((valid) => {
                if (rules[valid]) {
                    let result = rules[valid](value);
                    result && errorArr.push(result);
                }
            })

            if (errorArr.length) {
                checkResults.push({
                    dom: item,
                    errorArr: errorArr,
                    name: item.name,
                    message: errorArr[0].message,
                    type: errorArr[0].type
                });
            }
        });

        return checkResults
    }

}

export default FormCheck