export interface Typed {
    type: string | Typed[];
    subtype?: Typed | Typed[];
    nullable?: 1;
    overrideType?: string;
    additionalTypes?: string[];
}

export interface Param extends Typed {
    name: string;
    optional?: 1;
    variadic?: 1;
}

export interface Signature extends Typed {
    param?: Param[];
    deprecated?: 1;
    typeParameters?: TypeParameter[];
}

export interface Member extends Typed {
    name: string;
    default?: string;
    required?: 1;
    specs?: string;
    comment?: string;
}

export interface Property extends Typed {
    name: string;
    "event-handler"?: string;
    "read-only"?: 1;
    replaceable?: string;
    "put-forwards"?: string;
    stringifier?: 1;
    tags?: string;
    "property-descriptor-not-enumerable"?: string;
    "content-attribute"?: string;
    "content-attribute-reflects"?: string;
    "content-attribute-value-syntax"?: string;
    "content-attribute-enum-values"?: string;
    "content-attribute-aliases"?: string;
    "content-attribute-boolean"?: string;
    "css-property"?: string;
    "css-property-enum-values"?: string;
    "css-property-initial"?: string;
    "css-property-value-syntax"?: string;
    "css-property-shorthand"?: string;
    "css-property-subproperties"?: string;
    "css-property-animatable"?: string;
    "css-property-aliases"?: string;
    "lenient-this"?: string;
    "treat-null-as"?: string;
    "event-handler-map-to-window"?: string;
    static?: 1;
    comment?: string;
    required?: 1;
    specs?: string;
    deprecated?: 1;
    interop?: 1;
    exposed?: string;
    constant?: 1;
}

export interface Event {
    name: string;
    type: string;
    dispatch?: string;
    "skips-window"?: string;
    bubbles?: 1;
    cancelable?: 1;
    follows?: string;
    precedes?: string;
    tags?: string;
    aliases?: string;
    specs?: string;
}

export interface AnonymousMethod {
    tags?: string;
    static?: 1;
    getter?: 1;
    stringifier?: 1;
    comment?: string;
    overrideSignatures?: string[];
    additionalSignatures?: string[];
    specs?: string;
    exposed?: string;
    deprecated?: 1;
    signature: Signature[];
}

export interface Method extends AnonymousMethod {
    name: string;
}

export interface CallbackFunction {
    name: string;
    callback: 1;
    signature: Signature[];
    tags?: string;
    overrideSignatures?: string[];
    specs?: string;
    typeParameters?: TypeParameter[];
}

export interface Constructor {
    signature: Signature[];
    comment?: string;
    specs?: string;
}

export interface NamedConstructor {
    name: string;
    signature: Signature[];
    specs?: string;
}

export interface Constant extends Typed {
    name: string;
    value: string;
    tags?: string
    exposed?: string;
    specs?: string;
    comment?: string;
}

export interface ParsedAttribute{
    "enum-values"?: string;
    name: string;
    "value-syntax"?: string;
}

export interface Element {
    name: string;
    namespace?: string;
    deprecated?: boolean;
    specs?: string;
}

export interface TypeParameter {
    name: string;
    extends?: string;
    default?: string;
}

export interface Interface {
    name: string;
    mixin?: boolean;
    extends?: string;
    comment?: string;
    constants?: {
        constant: Record<string, Constant>;
    }
    methods: {
        method: Record<string, Method>;
    }
    events?: {
        event: Event[];
    }
    attributelessEvents?: {
        event: Event[];
    }
    properties?: {
        property: Record<string, Property>;
        namesakes?: Record<string, Property[]>;
    }
    constructor?: Constructor;
    implements?: string[];
    static?: 1;
    anonymousMethods?: {
        method: AnonymousMethod[];
    }
    "anonymous-content-attributes"?: {
        parsedattribute: ParsedAttribute[];
    }
    element?: Element[];
    namedConstructor?: NamedConstructor;
    exposed?: string;
    overrideExposed?: string;
    tags?: string;
    "implicit-this"?: 1;
    noInterfaceObject?: boolean;
    global?: string;
    typeParameters?: TypeParameter[];
    overrideIndexSignatures?: string[];
    specs?: string;
    iterator?: Iterator;
    legacyWindowAlias?: string[];
    legacyNamespace?: string;
    nested?: {
        interfaces: Interface[];
        enums: Enum[];
        dictionaries: Dictionary[];
        typedefs: TypeDef[];
    },
    deprecated?: 1
}

export interface Iterator {
    kind: "iterable" | "setlike" | "maplike";
    readonly: boolean;
    type: Typed[];
    comments?: {
        comment: Record<string, string>
    };
}

export interface Enum {
    name: string;
    value: string[];
    specs?: string;
    legacyNamespace?: string;
}

export interface TypeDef extends Typed {
    "new-type": string;
    deprecated?: 1;
    legacyNamespace?: string;
    typeParameters?: TypeParameter[];
}

export interface Dictionary {
    name: string;
    extends?: string;
    members: {
        member: Record<string, Member>;
    }
    overrideIndexSignatures?: string[];
    specs?: string;
    typeParameters?: TypeParameter[];
    legacyNamespace?: string;
}

export interface WebIdl {
    callbackFunctions?: {
        callbackFunction: Record<string, CallbackFunction>;
    },
    callbackInterfaces?: {
        interface: Record<string, Interface>;
    }
    dictionaries?: {
        dictionary: Record<string, Dictionary>;
    }
    enums?: {
        enum: Record<string, Enum>;
    }
    interfaces?: {
        interface: Record<string, Interface>;
    }
    mixins?: {
        mixin: Record<string, Interface>;
    }
    typedefs?: {
        typedef: TypeDef[];
    },
    namespaces?: Interface[];
}