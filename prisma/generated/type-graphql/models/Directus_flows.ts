import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Directus_users } from "../models/Directus_users";

@TypeGraphQL.ObjectType("Directus_flows", {})
export class Directus_flows {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  trigger?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accountability?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  options?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  operation?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_created!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_created?: string | null;

  directus_users?: Directus_users | null;
}
