import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_eventCreateManyInput } from "../../../inputs/App_flow_eventCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_flow_eventArgs {
  @TypeGraphQL.Field(_type => [App_flow_eventCreateManyInput], {
    nullable: false
  })
  data!: App_flow_eventCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
