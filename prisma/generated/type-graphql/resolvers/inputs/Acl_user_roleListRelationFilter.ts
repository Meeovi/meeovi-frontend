import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleWhereInput } from "../inputs/Acl_user_roleWhereInput";

@TypeGraphQL.InputType("Acl_user_roleListRelationFilter", {})
export class Acl_user_roleListRelationFilter {
  @TypeGraphQL.Field(_type => Acl_user_roleWhereInput, {
    nullable: true
  })
  every?: Acl_user_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleWhereInput, {
    nullable: true
  })
  some?: Acl_user_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleWhereInput, {
    nullable: true
  })
  none?: Acl_user_roleWhereInput | undefined;
}
