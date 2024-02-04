import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_pricesCreateInput } from "../../../inputs/Promotion_discount_pricesCreateInput";
import { Promotion_discount_pricesUpdateInput } from "../../../inputs/Promotion_discount_pricesUpdateInput";
import { Promotion_discount_pricesWhereUniqueInput } from "../../../inputs/Promotion_discount_pricesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePromotion_discount_pricesArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_pricesWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discount_pricesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesCreateInput, {
    nullable: false
  })
  create!: Promotion_discount_pricesCreateInput;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesUpdateInput, {
    nullable: false
  })
  update!: Promotion_discount_pricesUpdateInput;
}
