import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Directus_flowsCreateManyDirectus_usersInput", {})
export class Directus_flowsCreateManyDirectus_usersInput {
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
}
