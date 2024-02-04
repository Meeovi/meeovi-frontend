import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logScalarWhereInput } from "../inputs/Import_export_logScalarWhereInput";
import { Import_export_logUpdateManyMutationInput } from "../inputs/Import_export_logUpdateManyMutationInput";

@TypeGraphQL.InputType("Import_export_logUpdateManyWithWhereWithoutImport_export_logInput", {})
export class Import_export_logUpdateManyWithWhereWithoutImport_export_logInput {
  @TypeGraphQL.Field(_type => Import_export_logScalarWhereInput, {
    nullable: false
  })
  where!: Import_export_logScalarWhereInput;

  @TypeGraphQL.Field(_type => Import_export_logUpdateManyMutationInput, {
    nullable: false
  })
  data!: Import_export_logUpdateManyMutationInput;
}
