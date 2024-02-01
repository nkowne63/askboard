const Tag = Symbol("Tag");
const AssistantId = Symbol("AssistantId");
const FunctionsId = Symbol("FunctionsId");
const ThreadId = Symbol("ThreadId");
const OrganizationId = Symbol("AccountId");
const ApiKey = Symbol("ApiKey");
const Path = Symbol("Path");

const PrimitiveSymbols = {
	Tag,
	AssistantId,
	FunctionsId,
	ThreadId,
	OrganizationId,
	ApiKey,
	Path,
} as const;
type PrimitiveSymbols = typeof PrimitiveSymbols;

type PrimitiveRawTypes = {
	Tag: string;
	AssistantId: string;
	FunctionsId: string;
	ThreadId: string;
	OrganizationId: string;
	ApiKey: string;
	Path: string;
};

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
