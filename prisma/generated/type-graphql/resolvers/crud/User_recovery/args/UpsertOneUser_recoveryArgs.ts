import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_recoveryCreateInput } from "../../../inputs/User_recoveryCreateInput";
import { User_recoveryUpdateInput } from "../../../inputs/User_recoveryUpdateInput";
import { User_recoveryWhereUniqueInput } from "../../../inputs/User_recoveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUser_recoveryArgs {
  @TypeGraphQL.Field(_type => User_recoveryWhereUniqueInput, {
    nullable: false
  })
  where!: User_recoveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => User_recoveryCreateInput, {
    nullable: false
  })
  create!: User_recoveryCreateInput;

  @TypeGraphQL.Field(_type => User_recoveryUpdateInput, {
    nullable: false
  })
  update!: User_recoveryUpdateInput;
}
