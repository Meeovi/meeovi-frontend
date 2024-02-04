import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsScalarWhereInput } from "../inputs/Directus_collectionsScalarWhereInput";
import { Directus_collectionsUpdateManyMutationInput } from "../inputs/Directus_collectionsUpdateManyMutationInput";

@TypeGraphQL.InputType("Directus_collectionsUpdateManyWithWhereWithoutDirectus_collectionsInput", {})
export class Directus_collectionsUpdateManyWithWhereWithoutDirectus_collectionsInput {
  @TypeGraphQL.Field(_type => Directus_collectionsScalarWhereInput, {
    nullable: false
  })
  where!: Directus_collectionsScalarWhereInput;

  @TypeGraphQL.Field(_type => Directus_collectionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_collectionsUpdateManyMutationInput;
}
