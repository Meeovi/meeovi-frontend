import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_conditionCreateManyInput } from "../../../inputs/Rule_conditionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRule_conditionArgs {
  @TypeGraphQL.Field(_type => [Rule_conditionCreateManyInput], {
    nullable: false
  })
  data!: Rule_conditionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
