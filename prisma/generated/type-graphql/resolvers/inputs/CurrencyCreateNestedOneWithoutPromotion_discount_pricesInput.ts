import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateOrConnectWithoutPromotion_discount_pricesInput } from "../inputs/CurrencyCreateOrConnectWithoutPromotion_discount_pricesInput";
import { CurrencyCreateWithoutPromotion_discount_pricesInput } from "../inputs/CurrencyCreateWithoutPromotion_discount_pricesInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateNestedOneWithoutPromotion_discount_pricesInput", {})
export class CurrencyCreateNestedOneWithoutPromotion_discount_pricesInput {
  @TypeGraphQL.Field(_type => CurrencyCreateWithoutPromotion_discount_pricesInput, {
    nullable: true
  })
  create?: CurrencyCreateWithoutPromotion_discount_pricesInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutPromotion_discount_pricesInput, {
    nullable: true
  })
  connectOrCreate?: CurrencyCreateOrConnectWithoutPromotion_discount_pricesInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  connect?: CurrencyWhereUniqueInput | undefined;
}
