import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsCreateWithoutOther_directus_collectionsInput } from "../inputs/Directus_collectionsCreateWithoutOther_directus_collectionsInput";
import { Directus_collectionsWhereUniqueInput } from "../inputs/Directus_collectionsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_collectionsCreateOrConnectWithoutOther_directus_collectionsInput", {})
export class Directus_collectionsCreateOrConnectWithoutOther_directus_collectionsInput {
  @TypeGraphQL.Field(_type => Directus_collectionsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_collectionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_collectionsCreateWithoutOther_directus_collectionsInput, {
    nullable: false
  })
  create!: Directus_collectionsCreateWithoutOther_directus_collectionsInput;
}
