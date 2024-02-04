import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyUpdateWithoutPromotion_discount_pricesInput } from "../inputs/CurrencyUpdateWithoutPromotion_discount_pricesInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpdateToOneWithWhereWithoutPromotion_discount_pricesInput", {})
export class CurrencyUpdateToOneWithWhereWithoutPromotion_discount_pricesInput {
  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutPromotion_discount_pricesInput, {
    nullable: false
  })
  data!: CurrencyUpdateWithoutPromotion_discount_pricesInput;
}
