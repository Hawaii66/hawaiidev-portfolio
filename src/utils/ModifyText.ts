import Sleep from "./Sleep";

type WriteOptions = Partial<{
  delay: number;
  initialText: string;
}>;

export const DeleteText = async (
  startText: string,
  setText: SetText,
  options?: WriteOptions
) => {
  var text = startText;
  while (text.length > 1) {
    await Sleep(options?.delay ?? 150);
    text = `${text.slice(0, text.length - 2)}_`;
    setText(text);
  }

  await Sleep(200);
  setText("");

  return "";
};

export const WriteText = async (
  endText: string,
  setText: SetText,
  options?: WriteOptions
) => {
  endText = `${options?.initialText ?? ""}${endText}`;
  var text = options?.initialText ?? "";
  setText(text);
  while (text.length < endText.length) {
    await Sleep(options?.delay ?? 200);
    text = `${endText.slice(0, text.length)}_`;
    setText(text);
  }

  await Sleep(200);

  text = endText;
  setText(text);

  return text;
};

type SetText = (text: string) => void;

export class TextModifyBuilder {
  private steps: ((previous: string) => Promise<string | void>)[] = [];
  private setText: SetText;

  constructor(setText: SetText) {
    this.setText = setText;
    return this;
  }

  public WriteText = (text: string, options?: WriteOptions) => {
    this.steps.push(() => WriteText(text, this.setText, options));
    return this;
  };
  public DeleteText = (text: string, options?: WriteOptions) => {
    this.steps.push(() => DeleteText(text, this.setText, options));
    return this;
  };
  public DeletePrevious = (options?: WriteOptions) => {
    this.steps.push((previous) => DeleteText(previous, this.setText, options));
    return this;
  };
  public AppendText = (text: string, options?: WriteOptions) => {
    this.steps.push((previous) =>
      WriteText(text, this.setText, { ...options, initialText: previous })
    );
    return this;
  };
  public Action = (action: () => void) => {
    this.steps.push(async (previous) => {
      action();
      return previous;
    });
    return this;
  };
  public Sleep = (time: number) => {
    this.steps.push(() => Sleep(time));
    return this;
  };

  public Animate = async () => {
    var text = "";
    for (var i = 0; i < this.steps.length; i++) {
      const result = await this.steps[i](text);
      if (typeof result === "string") {
        text = result;
      }
    }
  };
}
