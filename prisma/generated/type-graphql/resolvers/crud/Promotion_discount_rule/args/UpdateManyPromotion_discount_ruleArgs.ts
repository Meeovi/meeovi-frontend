import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_ruleUpdateManyMutationInput } from "../../../inputs/Promotion_discount_ruleUpdateManyMutationInput";
import { Promotion_discount_ruleWhereInput } from "../../../inputs/Promotion_discount_ruleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPromotion_discount_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_discount_ruleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_discount_ruleWhereInput | undefined;
}
