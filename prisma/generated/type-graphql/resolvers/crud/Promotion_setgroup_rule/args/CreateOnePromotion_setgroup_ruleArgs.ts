import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroup_ruleCreateInput } from "../../../inputs/Promotion_setgroup_ruleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePromotion_setgroup_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleCreateInput, {
    nullable: false
  })
  data!: Promotion_setgroup_ruleCreateInput;
}
