import chalk from 'chalk';

interface Button {
    renderButton(): void;
    onClick(): void;
}

class WindowsButton implements Button {
    logBlueText(text) {
        console.log(chalk.blue(text));
    }
    renderButton() {
        this.logBlueText("加到畫面上")
    };
    onClick() {
        this.logBlueText('註冊點擊事件');
    };
}

class HTMLButton implements Button {
    logGreenText(text) {
        console.log(chalk.green(text));
    }
    renderButton() {
        this.logGreenText('加到畫面上');
    };
    onClick() {
        this.logGreenText('註冊點擊事件');
    };
}

abstract class Dialog {
    abstract createButton(): Button;

    renderDialog() {
        const button: Button = this.createButton();
        button.renderButton();
        button.onClick();
    };
}

class WindowsDialog extends Dialog {
    createButton() {
        return new WindowsButton();
    };
}

class WebDialog extends Dialog {
    createButton() {
        return new HTMLButton();
    };
}

class OSdiffer {
    CreateDialog(DialogType: string) {
        let dialog: Dialog;

        switch(DialogType) {
            case 'Windows':
                return dialog = new WindowsDialog();
            case 'Web':
                return dialog = new WebDialog();
            default:
                return null;
        }
    }
}

class Application {
    private _osdiffer: OSdiffer;

    constructor(OSdiffer: OSdiffer) {
        this._osdiffer = OSdiffer;
    }

    initialize(OS) {
        let dialog: Dialog;
        dialog = this._osdiffer.CreateDialog(OS);
        dialog.renderDialog();
    }
}

const app = new Application(new OSdiffer());
app.initialize("Windows");