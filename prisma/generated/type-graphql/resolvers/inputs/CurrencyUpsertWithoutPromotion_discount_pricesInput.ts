import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutPromotion_discount_pricesInput } from "../inputs/CurrencyCreateWithoutPromotion_discount_pricesInput";
import { CurrencyUpdateWithoutPromotion_discount_pricesInput } from "../inputs/CurrencyUpdateWithoutPromotion_discount_pricesInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpsertWithoutPromotion_discount_pricesInput", {})
export class CurrencyUpsertWithoutPromotion_discount_pricesInput {
  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutPromotion_discount_pricesInput, {
    nullable: false
  })
  update!: CurrencyUpdateWithoutPromotion_discount_pricesInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutPromotion_discount_pricesInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutPromotion_discount_pricesInput;

  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;
}
