import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profile_translationScalarWhereInput } from "../inputs/Import_export_profile_translationScalarWhereInput";
import { Import_export_profile_translationUpdateManyMutationInput } from "../inputs/Import_export_profile_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Import_export_profile_translationUpdateManyWithWhereWithoutImport_export_profileInput", {})
export class Import_export_profile_translationUpdateManyWithWhereWithoutImport_export_profileInput {
  @TypeGraphQL.Field(_type => Import_export_profile_translationScalarWhereInput, {
    nullable: false
  })
  where!: Import_export_profile_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Import_export_profile_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Import_export_profile_translationUpdateManyMutationInput;
}
