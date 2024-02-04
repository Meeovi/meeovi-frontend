import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_actionCreateManyInput } from "../../../inputs/App_flow_actionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_flow_actionArgs {
  @TypeGraphQL.Field(_type => [App_flow_actionCreateManyInput], {
    nullable: false
  })
  data!: App_flow_actionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
