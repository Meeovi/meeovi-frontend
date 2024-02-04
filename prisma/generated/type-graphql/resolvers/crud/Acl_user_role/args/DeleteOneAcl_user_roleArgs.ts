import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_user_roleWhereUniqueInput } from "../../../inputs/Acl_user_roleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneAcl_user_roleArgs {
  @TypeGraphQL.Field(_type => Acl_user_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Acl_user_roleWhereUniqueInput;
}
