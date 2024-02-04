import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersCreateWithoutOther_directus_foldersInput } from "../inputs/Directus_foldersCreateWithoutOther_directus_foldersInput";
import { Directus_foldersUpdateWithoutOther_directus_foldersInput } from "../inputs/Directus_foldersUpdateWithoutOther_directus_foldersInput";
import { Directus_foldersWhereInput } from "../inputs/Directus_foldersWhereInput";

@TypeGraphQL.InputType("Directus_foldersUpsertWithoutOther_directus_foldersInput", {})
export class Directus_foldersUpsertWithoutOther_directus_foldersInput {
  @TypeGraphQL.Field(_type => Directus_foldersUpdateWithoutOther_directus_foldersInput, {
    nullable: false
  })
  update!: Directus_foldersUpdateWithoutOther_directus_foldersInput;

  @TypeGraphQL.Field(_type => Directus_foldersCreateWithoutOther_directus_foldersInput, {
    nullable: false
  })
  create!: Directus_foldersCreateWithoutOther_directus_foldersInput;

  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  where?: Directus_foldersWhereInput | undefined;
}
