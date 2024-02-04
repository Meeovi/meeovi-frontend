import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_roleWhereInput } from "../../../inputs/Acl_roleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAcl_roleArgs {
  @TypeGraphQL.Field(_type => Acl_roleWhereInput, {
    nullable: true
  })
  where?: Acl_roleWhereInput | undefined;
}
