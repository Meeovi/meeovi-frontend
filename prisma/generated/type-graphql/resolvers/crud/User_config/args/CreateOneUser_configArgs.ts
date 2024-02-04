import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_configCreateInput } from "../../../inputs/User_configCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUser_configArgs {
  @TypeGraphQL.Field(_type => User_configCreateInput, {
    nullable: false
  })
  data!: User_configCreateInput;
}
