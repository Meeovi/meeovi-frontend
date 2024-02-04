import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_recoveryUpdateInput } from "../../../inputs/User_recoveryUpdateInput";
import { User_recoveryWhereUniqueInput } from "../../../inputs/User_recoveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUser_recoveryArgs {
  @TypeGraphQL.Field(_type => User_recoveryUpdateInput, {
    nullable: false
  })
  data!: User_recoveryUpdateInput;

  @TypeGraphQL.Field(_type => User_recoveryWhereUniqueInput, {
    nullable: false
  })
  where!: User_recoveryWhereUniqueInput;
}
