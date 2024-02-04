import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_pricesScalarWhereInput } from "../inputs/Promotion_discount_pricesScalarWhereInput";
import { Promotion_discount_pricesUpdateManyMutationInput } from "../inputs/Promotion_discount_pricesUpdateManyMutationInput";

@TypeGraphQL.InputType("Promotion_discount_pricesUpdateManyWithWhereWithoutPromotion_discountInput", {})
export class Promotion_discount_pricesUpdateManyWithWhereWithoutPromotion_discountInput {
  @TypeGraphQL.Field(_type => Promotion_discount_pricesScalarWhereInput, {
    nullable: false
  })
  where!: Promotion_discount_pricesScalarWhereInput;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_discount_pricesUpdateManyMutationInput;
}
