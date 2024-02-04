import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersScalarWhereInput } from "../inputs/Directus_foldersScalarWhereInput";
import { Directus_foldersUpdateManyMutationInput } from "../inputs/Directus_foldersUpdateManyMutationInput";

@TypeGraphQL.InputType("Directus_foldersUpdateManyWithWhereWithoutDirectus_foldersInput", {})
export class Directus_foldersUpdateManyWithWhereWithoutDirectus_foldersInput {
  @TypeGraphQL.Field(_type => Directus_foldersScalarWhereInput, {
    nullable: false
  })
  where!: Directus_foldersScalarWhereInput;

  @TypeGraphQL.Field(_type => Directus_foldersUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_foldersUpdateManyMutationInput;
}
