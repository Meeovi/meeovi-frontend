import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_ruleWhereUniqueInput } from "../../../inputs/Promotion_persona_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePromotion_persona_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_persona_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_persona_ruleWhereUniqueInput;
}
