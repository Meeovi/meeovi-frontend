import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_condition_translationCreateManyInput } from "../../../inputs/App_script_condition_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_script_condition_translationArgs {
  @TypeGraphQL.Field(_type => [App_script_condition_translationCreateManyInput], {
    nullable: false
  })
  data!: App_script_condition_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
