import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_button_translationCreateManyInput } from "../../../inputs/App_action_button_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_action_button_translationArgs {
  @TypeGraphQL.Field(_type => [App_action_button_translationCreateManyInput], {
    nullable: false
  })
  data!: App_action_button_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
