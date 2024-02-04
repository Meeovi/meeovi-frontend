import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionCreateInput } from "../../../inputs/PromotionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePromotionArgs {
  @TypeGraphQL.Field(_type => PromotionCreateInput, {
    nullable: false
  })
  data!: PromotionCreateInput;
}
