import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_recoveryWhereUniqueInput } from "../../../inputs/User_recoveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUser_recoveryOrThrowArgs {
  @TypeGraphQL.Field(_type => User_recoveryWhereUniqueInput, {
    nullable: false
  })
  where!: User_recoveryWhereUniqueInput;
}
