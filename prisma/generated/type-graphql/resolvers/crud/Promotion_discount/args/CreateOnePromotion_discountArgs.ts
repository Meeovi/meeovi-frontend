import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discountCreateInput } from "../../../inputs/Promotion_discountCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePromotion_discountArgs {
  @TypeGraphQL.Field(_type => Promotion_discountCreateInput, {
    nullable: false
  })
  data!: Promotion_discountCreateInput;
}
