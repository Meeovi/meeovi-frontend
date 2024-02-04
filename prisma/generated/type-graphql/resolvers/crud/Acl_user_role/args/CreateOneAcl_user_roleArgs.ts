import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_user_roleCreateInput } from "../../../inputs/Acl_user_roleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAcl_user_roleArgs {
  @TypeGraphQL.Field(_type => Acl_user_roleCreateInput, {
    nullable: false
  })
  data!: Acl_user_roleCreateInput;
}
