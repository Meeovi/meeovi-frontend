import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_configCreateManyInput } from "../../../inputs/App_configCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_configArgs {
  @TypeGraphQL.Field(_type => [App_configCreateManyInput], {
    nullable: false
  })
  data!: App_configCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
