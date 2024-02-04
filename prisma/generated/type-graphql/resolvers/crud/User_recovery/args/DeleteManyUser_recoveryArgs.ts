import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_recoveryWhereInput } from "../../../inputs/User_recoveryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUser_recoveryArgs {
  @TypeGraphQL.Field(_type => User_recoveryWhereInput, {
    nullable: true
  })
  where?: User_recoveryWhereInput | undefined;
}
