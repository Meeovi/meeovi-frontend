import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_ruleCreateManyInput } from "../../../inputs/Promotion_persona_ruleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPromotion_persona_ruleArgs {
  @TypeGraphQL.Field(_type => [Promotion_persona_ruleCreateManyInput], {
    nullable: false
  })
  data!: Promotion_persona_ruleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
