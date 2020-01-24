import { ModuleField, Registry } from './base'
import { Apply } from '../../../cast'

const kind = 'Bool'

interface Options {
  trueLabel: string;
  falseLabel: string;
}

const defaults: Options = {
  trueLabel: '',
  falseLabel: '',
}

export class ModuleFieldBool extends ModuleField {
  readonly kind = kind

  options: Options = defaults

  constructor (i?: Partial<ModuleFieldBool>) {
    super(i)
    this.applyOptions(i?.options)
  }

  applyOptions (o?: Partial<Options>): void {
    if (!o) return

    Apply(this.options, o, String, 'trueLabel', 'falseLabel')
  }
}

Registry.set(kind, ModuleFieldBool)
