import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_action_translationCreateManyInput } from "../../../inputs/App_flow_action_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_flow_action_translationArgs {
  @TypeGraphQL.Field(_type => [App_flow_action_translationCreateManyInput], {
    nullable: false
  })
  data!: App_flow_action_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
