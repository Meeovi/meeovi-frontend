import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesCreateWithoutDirectus_foldersInput } from "../inputs/Directus_filesCreateWithoutDirectus_foldersInput";
import { Directus_filesWhereUniqueInput } from "../inputs/Directus_filesWhereUniqueInput";

@TypeGraphQL.InputType("Directus_filesCreateOrConnectWithoutDirectus_foldersInput", {})
export class Directus_filesCreateOrConnectWithoutDirectus_foldersInput {
  @TypeGraphQL.Field(_type => Directus_filesWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_filesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_filesCreateWithoutDirectus_foldersInput, {
    nullable: false
  })
  create!: Directus_filesCreateWithoutDirectus_foldersInput;
}
