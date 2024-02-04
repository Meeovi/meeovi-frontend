import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Acl_role } from "../models/Acl_role";
import { Integration } from "../models/Integration";

@TypeGraphQL.ObjectType("Integration_role", {})
export class Integration_role {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  integration_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  acl_role_id!: Buffer;

  acl_role?: Acl_role;

  integration?: Integration;
}
