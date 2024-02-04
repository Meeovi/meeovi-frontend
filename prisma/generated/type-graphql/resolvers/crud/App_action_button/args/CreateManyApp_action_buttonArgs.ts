import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_buttonCreateManyInput } from "../../../inputs/App_action_buttonCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_action_buttonArgs {
  @TypeGraphQL.Field(_type => [App_action_buttonCreateManyInput], {
    nullable: false
  })
  data!: App_action_buttonCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
