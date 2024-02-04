import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_user_roleCreateInput } from "../../../inputs/Acl_user_roleCreateInput";
import { Acl_user_roleUpdateInput } from "../../../inputs/Acl_user_roleUpdateInput";
import { Acl_user_roleWhereUniqueInput } from "../../../inputs/Acl_user_roleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAcl_user_roleArgs {
  @TypeGraphQL.Field(_type => Acl_user_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Acl_user_roleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Acl_user_roleCreateInput, {
    nullable: false
  })
  create!: Acl_user_roleCreateInput;

  @TypeGraphQL.Field(_type => Acl_user_roleUpdateInput, {
    nullable: false
  })
  update!: Acl_user_roleUpdateInput;
}
