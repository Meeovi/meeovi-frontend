import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Acl_user_role } from "../models/Acl_user_role";
import { App } from "../models/App";
import { Integration_role } from "../models/Integration_role";
import { Acl_roleCount } from "../resolvers/outputs/Acl_roleCount";

@TypeGraphQL.ObjectType("Acl_role", {})
export class Acl_role {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  privileges!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deleted_at?: Date | null;

  acl_user_role?: Acl_user_role[];

  app?: App[];

  integration_role?: Integration_role[];

  @TypeGraphQL.Field(_type => Acl_roleCount, {
    nullable: true
  })
  _count?: Acl_roleCount | null;
}
