import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsUpdateWithoutDirectus_collectionsInput } from "../inputs/Directus_collectionsUpdateWithoutDirectus_collectionsInput";
import { Directus_collectionsWhereUniqueInput } from "../inputs/Directus_collectionsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_collectionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput", {})
export class Directus_collectionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput {
  @TypeGraphQL.Field(_type => Directus_collectionsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_collectionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_collectionsUpdateWithoutDirectus_collectionsInput, {
    nullable: false
  })
  data!: Directus_collectionsUpdateWithoutDirectus_collectionsInput;
}
