import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesUpdateWithoutDirectus_foldersInput } from "../inputs/Directus_filesUpdateWithoutDirectus_foldersInput";
import { Directus_filesWhereUniqueInput } from "../inputs/Directus_filesWhereUniqueInput";

@TypeGraphQL.InputType("Directus_filesUpdateWithWhereUniqueWithoutDirectus_foldersInput", {})
export class Directus_filesUpdateWithWhereUniqueWithoutDirectus_foldersInput {
  @TypeGraphQL.Field(_type => Directus_filesWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_filesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_filesUpdateWithoutDirectus_foldersInput, {
    nullable: false
  })
  data!: Directus_filesUpdateWithoutDirectus_foldersInput;
}
