import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_pricesWhereInput } from "../../../inputs/Promotion_discount_pricesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPromotion_discount_pricesArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_pricesWhereInput, {
    nullable: true
  })
  where?: Promotion_discount_pricesWhereInput | undefined;
}
