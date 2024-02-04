import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_dashboardsCreateManyDirectus_usersInput } from "../inputs/Directus_dashboardsCreateManyDirectus_usersInput";

@TypeGraphQL.InputType("Directus_dashboardsCreateManyDirectus_usersInputEnvelope", {})
export class Directus_dashboardsCreateManyDirectus_usersInputEnvelope {
  @TypeGraphQL.Field(_type => [Directus_dashboardsCreateManyDirectus_usersInput], {
    nullable: false
  })
  data!: Directus_dashboardsCreateManyDirectus_usersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
