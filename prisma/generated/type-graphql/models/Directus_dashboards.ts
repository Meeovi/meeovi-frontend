import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Directus_users } from "../models/Directus_users";

@TypeGraphQL.ObjectType("Directus_dashboards", {})
export class Directus_dashboards {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  icon!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  note?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_created!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_created?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color?: string | null;

  directus_users?: Directus_users | null;
}
