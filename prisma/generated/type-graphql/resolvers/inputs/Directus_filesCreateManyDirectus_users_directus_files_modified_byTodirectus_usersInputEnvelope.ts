import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInput";

@TypeGraphQL.InputType("Directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInputEnvelope", {})
export class Directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInputEnvelope {
  @TypeGraphQL.Field(_type => [Directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInput], {
    nullable: false
  })
  data!: Directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
