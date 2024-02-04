import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RuleCreateManyInput } from "../../../inputs/RuleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRuleArgs {
  @TypeGraphQL.Field(_type => [RuleCreateManyInput], {
    nullable: false
  })
  data!: RuleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
