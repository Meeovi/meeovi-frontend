import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_conditionCreateManyInput } from "../../../inputs/App_script_conditionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_script_conditionArgs {
  @TypeGraphQL.Field(_type => [App_script_conditionCreateManyInput], {
    nullable: false
  })
  data!: App_script_conditionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
