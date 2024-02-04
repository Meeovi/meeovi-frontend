import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_pricesWhereUniqueInput } from "../../../inputs/Promotion_discount_pricesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePromotion_discount_pricesArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_pricesWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discount_pricesWhereUniqueInput;
}
