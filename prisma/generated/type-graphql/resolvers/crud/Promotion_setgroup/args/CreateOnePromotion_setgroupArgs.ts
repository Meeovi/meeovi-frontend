import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroupCreateInput } from "../../../inputs/Promotion_setgroupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePromotion_setgroupArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroupCreateInput, {
    nullable: false
  })
  data!: Promotion_setgroupCreateInput;
}
