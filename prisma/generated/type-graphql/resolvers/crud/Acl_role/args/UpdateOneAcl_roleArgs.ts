import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_roleUpdateInput } from "../../../inputs/Acl_roleUpdateInput";
import { Acl_roleWhereUniqueInput } from "../../../inputs/Acl_roleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAcl_roleArgs {
  @TypeGraphQL.Field(_type => Acl_roleUpdateInput, {
    nullable: false
  })
  data!: Acl_roleUpdateInput;

  @TypeGraphQL.Field(_type => Acl_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Acl_roleWhereUniqueInput;
}
