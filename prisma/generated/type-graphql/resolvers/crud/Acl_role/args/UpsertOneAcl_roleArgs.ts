import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_roleCreateInput } from "../../../inputs/Acl_roleCreateInput";
import { Acl_roleUpdateInput } from "../../../inputs/Acl_roleUpdateInput";
import { Acl_roleWhereUniqueInput } from "../../../inputs/Acl_roleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAcl_roleArgs {
  @TypeGraphQL.Field(_type => Acl_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Acl_roleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Acl_roleCreateInput, {
    nullable: false
  })
  create!: Acl_roleCreateInput;

  @TypeGraphQL.Field(_type => Acl_roleUpdateInput, {
    nullable: false
  })
  update!: Acl_roleUpdateInput;
}
