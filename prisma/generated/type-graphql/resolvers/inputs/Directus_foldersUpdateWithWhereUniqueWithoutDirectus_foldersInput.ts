import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersUpdateWithoutDirectus_foldersInput } from "../inputs/Directus_foldersUpdateWithoutDirectus_foldersInput";
import { Directus_foldersWhereUniqueInput } from "../inputs/Directus_foldersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_foldersUpdateWithWhereUniqueWithoutDirectus_foldersInput", {})
export class Directus_foldersUpdateWithWhereUniqueWithoutDirectus_foldersInput {
  @TypeGraphQL.Field(_type => Directus_foldersWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_foldersWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_foldersUpdateWithoutDirectus_foldersInput, {
    nullable: false
  })
  data!: Directus_foldersUpdateWithoutDirectus_foldersInput;
}
