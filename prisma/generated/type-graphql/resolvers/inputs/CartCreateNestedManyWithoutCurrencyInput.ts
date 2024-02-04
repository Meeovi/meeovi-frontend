import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyCurrencyInputEnvelope } from "../inputs/CartCreateManyCurrencyInputEnvelope";
import { CartCreateOrConnectWithoutCurrencyInput } from "../inputs/CartCreateOrConnectWithoutCurrencyInput";
import { CartCreateWithoutCurrencyInput } from "../inputs/CartCreateWithoutCurrencyInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateNestedManyWithoutCurrencyInput", {})
export class CartCreateNestedManyWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutCurrencyInput], {
    nullable: true
  })
  create?: CartCreateWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutCurrencyInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManyCurrencyInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManyCurrencyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  connect?: CartWhereUniqueInput[] | undefined;
}
