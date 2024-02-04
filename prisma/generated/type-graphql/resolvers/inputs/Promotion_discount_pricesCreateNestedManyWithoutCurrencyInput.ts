import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_pricesCreateManyCurrencyInputEnvelope } from "../inputs/Promotion_discount_pricesCreateManyCurrencyInputEnvelope";
import { Promotion_discount_pricesCreateOrConnectWithoutCurrencyInput } from "../inputs/Promotion_discount_pricesCreateOrConnectWithoutCurrencyInput";
import { Promotion_discount_pricesCreateWithoutCurrencyInput } from "../inputs/Promotion_discount_pricesCreateWithoutCurrencyInput";
import { Promotion_discount_pricesWhereUniqueInput } from "../inputs/Promotion_discount_pricesWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_pricesCreateNestedManyWithoutCurrencyInput", {})
export class Promotion_discount_pricesCreateNestedManyWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => [Promotion_discount_pricesCreateWithoutCurrencyInput], {
    nullable: true
  })
  create?: Promotion_discount_pricesCreateWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesCreateOrConnectWithoutCurrencyInput], {
    nullable: true
  })
  connectOrCreate?: Promotion_discount_pricesCreateOrConnectWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesCreateManyCurrencyInputEnvelope, {
    nullable: true
  })
  createMany?: Promotion_discount_pricesCreateManyCurrencyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesWhereUniqueInput], {
    nullable: true
  })
  connect?: Promotion_discount_pricesWhereUniqueInput[] | undefined;
}
