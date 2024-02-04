import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_order_ruleUpdateManyMutationInput } from "../../../inputs/Promotion_order_ruleUpdateManyMutationInput";
import { Promotion_order_ruleWhereInput } from "../../../inputs/Promotion_order_ruleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPromotion_order_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_order_ruleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_order_ruleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Promotion_order_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_order_ruleWhereInput | undefined;
}
