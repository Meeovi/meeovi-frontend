import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroup_ruleUpdateManyMutationInput } from "../../../inputs/Promotion_setgroup_ruleUpdateManyMutationInput";
import { Promotion_setgroup_ruleWhereInput } from "../../../inputs/Promotion_setgroup_ruleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPromotion_setgroup_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_setgroup_ruleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_setgroup_ruleWhereInput | undefined;
}
