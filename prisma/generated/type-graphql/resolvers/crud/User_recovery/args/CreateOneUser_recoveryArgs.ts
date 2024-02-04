import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_recoveryCreateInput } from "../../../inputs/User_recoveryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUser_recoveryArgs {
  @TypeGraphQL.Field(_type => User_recoveryCreateInput, {
    nullable: false
  })
  data!: User_recoveryCreateInput;
}
