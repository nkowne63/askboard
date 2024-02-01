type PrimitiveRawTypes = {
	Tag: string;
	AssistantId: string;
	FunctionsId: string;
	ThreadId: string;
	OrganizationId: string;
	ApiKey: string;
	Path: string;
};

const PrimitiveSymbols = {
	Tag: Symbol("Tag"),
	AssistantId: Symbol("AssistantId"),
	FunctionsId: Symbol("FunctionsId"),
	ThreadId: Symbol("ThreadId"),
	OrganizationId: Symbol("AccountId"),
	ApiKey: Symbol("ApiKey"),
	Path: Symbol("Path"), // not the whole path, but one part of it
} as const satisfies { [k in keyof PrimitiveRawTypes]: symbol };
type PrimitiveSymbols = typeof PrimitiveSymbols;

type Nominal<S extends symbol, T> = T & { [k in S]: never };
export type Primitive = {
	[s in keyof PrimitiveSymbols]: Nominal<
		PrimitiveSymbols[s],
		PrimitiveRawTypes[s]
	>;
};

export const parse = <T extends keyof PrimitiveSymbols>(
	_target: T,
	str: PrimitiveRawTypes[T],
) => str as Primitive[T];
