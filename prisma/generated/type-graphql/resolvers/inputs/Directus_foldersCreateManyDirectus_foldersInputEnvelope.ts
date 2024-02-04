import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersCreateManyDirectus_foldersInput } from "../inputs/Directus_foldersCreateManyDirectus_foldersInput";

@TypeGraphQL.InputType("Directus_foldersCreateManyDirectus_foldersInputEnvelope", {})
export class Directus_foldersCreateManyDirectus_foldersInputEnvelope {
  @TypeGraphQL.Field(_type => [Directus_foldersCreateManyDirectus_foldersInput], {
    nullable: false
  })
  data!: Directus_foldersCreateManyDirectus_foldersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
