import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_pricesCreateInput } from "../../../inputs/Promotion_discount_pricesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePromotion_discount_pricesArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_pricesCreateInput, {
    nullable: false
  })
  data!: Promotion_discount_pricesCreateInput;
}
