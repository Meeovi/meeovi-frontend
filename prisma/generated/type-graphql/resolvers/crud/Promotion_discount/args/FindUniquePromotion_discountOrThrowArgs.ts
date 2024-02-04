import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discountWhereUniqueInput } from "../../../inputs/Promotion_discountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePromotion_discountOrThrowArgs {
  @TypeGraphQL.Field(_type => Promotion_discountWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discountWhereUniqueInput;
}
