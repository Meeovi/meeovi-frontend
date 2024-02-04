import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateNestedOneWithoutDirectus_flowsInput } from "../inputs/Directus_usersCreateNestedOneWithoutDirectus_flowsInput";

@TypeGraphQL.InputType("Directus_flowsCreateInput", {})
export class Directus_flowsCreateInput {
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
  color?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  trigger?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accountability?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  options?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  operation?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_created?: Date | undefined;

  @TypeGraphQL.Field(_type => Directus_usersCreateNestedOneWithoutDirectus_flowsInput, {
    nullable: true
  })
  directus_users?: Directus_usersCreateNestedOneWithoutDirectus_flowsInput | undefined;
}
