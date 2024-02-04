import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroup_ruleWhereUniqueInput } from "../../../inputs/Promotion_setgroup_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePromotion_setgroup_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_setgroup_ruleWhereUniqueInput;
}
