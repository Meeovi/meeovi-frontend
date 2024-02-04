import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateNestedOneWithoutDirectus_dashboardsInput } from "../inputs/Directus_usersCreateNestedOneWithoutDirectus_dashboardsInput";

@TypeGraphQL.InputType("Directus_dashboardsCreateInput", {})
export class Directus_dashboardsCreateInput {
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
  icon?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  note?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_created?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color?: string | undefined;

  @TypeGraphQL.Field(_type => Directus_usersCreateNestedOneWithoutDirectus_dashboardsInput, {
    nullable: true
  })
  directus_users?: Directus_usersCreateNestedOneWithoutDirectus_dashboardsInput | undefined;
}
