import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_ruleCreateInput } from "../../../inputs/Promotion_persona_ruleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePromotion_persona_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_persona_ruleCreateInput, {
    nullable: false
  })
  data!: Promotion_persona_ruleCreateInput;
}
