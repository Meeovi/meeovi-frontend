import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationCreateManyCurrencyInputEnvelope } from "../inputs/Currency_translationCreateManyCurrencyInputEnvelope";
import { Currency_translationCreateOrConnectWithoutCurrencyInput } from "../inputs/Currency_translationCreateOrConnectWithoutCurrencyInput";
import { Currency_translationCreateWithoutCurrencyInput } from "../inputs/Currency_translationCreateWithoutCurrencyInput";
import { Currency_translationWhereUniqueInput } from "../inputs/Currency_translationWhereUniqueInput";

@TypeGraphQL.InputType("Currency_translationCreateNestedManyWithoutCurrencyInput", {})
export class Currency_translationCreateNestedManyWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => [Currency_translationCreateWithoutCurrencyInput], {
    nullable: true
  })
  create?: Currency_translationCreateWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationCreateOrConnectWithoutCurrencyInput], {
    nullable: true
  })
  connectOrCreate?: Currency_translationCreateOrConnectWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_translationCreateManyCurrencyInputEnvelope, {
    nullable: true
  })
  createMany?: Currency_translationCreateManyCurrencyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Currency_translationWhereUniqueInput[] | undefined;
}
