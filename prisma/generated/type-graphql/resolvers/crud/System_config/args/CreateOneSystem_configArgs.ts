import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { System_configCreateInput } from "../../../inputs/System_configCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSystem_configArgs {
  @TypeGraphQL.Field(_type => System_configCreateInput, {
    nullable: false
  })
  data!: System_configCreateInput;
}
