import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_roleWhereUniqueInput } from "../../../inputs/Acl_roleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAcl_roleOrThrowArgs {
  @TypeGraphQL.Field(_type => Acl_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Acl_roleWhereUniqueInput;
}
