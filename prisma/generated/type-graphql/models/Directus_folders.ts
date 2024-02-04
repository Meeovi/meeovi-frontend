import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Directus_files } from "../models/Directus_files";
import { Directus_foldersCount } from "../resolvers/outputs/Directus_foldersCount";

@TypeGraphQL.ObjectType("Directus_folders", {})
export class Directus_folders {
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
  parent?: string | null;

  directus_files?: Directus_files[];

  directus_folders?: Directus_folders | null;

  other_directus_folders?: Directus_folders[];

  @TypeGraphQL.Field(_type => Directus_foldersCount, {
    nullable: true
  })
  _count?: Directus_foldersCount | null;
}
