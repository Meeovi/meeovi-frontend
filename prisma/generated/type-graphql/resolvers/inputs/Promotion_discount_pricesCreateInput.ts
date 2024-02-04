import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateNestedOneWithoutPromotion_discount_pricesInput } from "../inputs/CurrencyCreateNestedOneWithoutPromotion_discount_pricesInput";
import { Promotion_discountCreateNestedOneWithoutPromotion_discount_pricesInput } from "../inputs/Promotion_discountCreateNestedOneWithoutPromotion_discount_pricesInput";

@TypeGraphQL.InputType("Promotion_discount_pricesCreateInput", {})
export class Promotion_discount_pricesCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  price?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateNestedOneWithoutPromotion_discount_pricesInput, {
    nullable: false
  })
  currency!: CurrencyCreateNestedOneWithoutPromotion_discount_pricesInput;

  @TypeGraphQL.Field(_type => Promotion_discountCreateNestedOneWithoutPromotion_discount_pricesInput, {
    nullable: false
  })
  promotion_discount!: Promotion_discountCreateNestedOneWithoutPromotion_discount_pricesInput;
}
