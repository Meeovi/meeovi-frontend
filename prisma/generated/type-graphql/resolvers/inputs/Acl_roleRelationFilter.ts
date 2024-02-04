import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleWhereInput } from "../inputs/Acl_roleWhereInput";

@TypeGraphQL.InputType("Acl_roleRelationFilter", {})
export class Acl_roleRelationFilter {
  @TypeGraphQL.Field(_type => Acl_roleWhereInput, {
    nullable: true
  })
  is?: Acl_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleWhereInput, {
    nullable: true
  })
  isNot?: Acl_roleWhereInput | undefined;
}
