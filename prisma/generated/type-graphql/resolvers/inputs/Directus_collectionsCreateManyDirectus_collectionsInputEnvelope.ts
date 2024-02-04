import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsCreateManyDirectus_collectionsInput } from "../inputs/Directus_collectionsCreateManyDirectus_collectionsInput";

@TypeGraphQL.InputType("Directus_collectionsCreateManyDirectus_collectionsInputEnvelope", {})
export class Directus_collectionsCreateManyDirectus_collectionsInputEnvelope {
  @TypeGraphQL.Field(_type => [Directus_collectionsCreateManyDirectus_collectionsInput], {
    nullable: false
  })
  data!: Directus_collectionsCreateManyDirectus_collectionsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
