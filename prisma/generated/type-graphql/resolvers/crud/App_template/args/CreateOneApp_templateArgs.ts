import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_templateCreateInput } from "../../../inputs/App_templateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_templateArgs {
  @TypeGraphQL.Field(_type => App_templateCreateInput, {
    nullable: false
  })
  data!: App_templateCreateInput;
}
