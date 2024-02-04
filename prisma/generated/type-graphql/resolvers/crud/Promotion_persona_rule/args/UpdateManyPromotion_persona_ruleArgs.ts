import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_ruleUpdateManyMutationInput } from "../../../inputs/Promotion_persona_ruleUpdateManyMutationInput";
import { Promotion_persona_ruleWhereInput } from "../../../inputs/Promotion_persona_ruleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPromotion_persona_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_persona_ruleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_persona_ruleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Promotion_persona_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_persona_ruleWhereInput | undefined;
}
