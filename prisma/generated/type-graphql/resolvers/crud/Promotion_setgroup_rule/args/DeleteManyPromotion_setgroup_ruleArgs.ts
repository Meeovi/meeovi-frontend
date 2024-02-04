import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroup_ruleWhereInput } from "../../../inputs/Promotion_setgroup_ruleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPromotion_setgroup_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_setgroup_ruleWhereInput | undefined;
}
