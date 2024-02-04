import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesCreateManyDirectus_foldersInput } from "../inputs/Directus_filesCreateManyDirectus_foldersInput";

@TypeGraphQL.InputType("Directus_filesCreateManyDirectus_foldersInputEnvelope", {})
export class Directus_filesCreateManyDirectus_foldersInputEnvelope {
  @TypeGraphQL.Field(_type => [Directus_filesCreateManyDirectus_foldersInput], {
    nullable: false
  })
  data!: Directus_filesCreateManyDirectus_foldersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
