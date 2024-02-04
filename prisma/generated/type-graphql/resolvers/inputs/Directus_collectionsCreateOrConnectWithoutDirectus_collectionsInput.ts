import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsCreateWithoutDirectus_collectionsInput } from "../inputs/Directus_collectionsCreateWithoutDirectus_collectionsInput";
import { Directus_collectionsWhereUniqueInput } from "../inputs/Directus_collectionsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput", {})
export class Directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput {
  @TypeGraphQL.Field(_type => Directus_collectionsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_collectionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_collectionsCreateWithoutDirectus_collectionsInput, {
    nullable: false
  })
  create!: Directus_collectionsCreateWithoutDirectus_collectionsInput;
}
