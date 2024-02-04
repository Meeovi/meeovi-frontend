import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logUpdateWithoutUserInput } from "../inputs/Import_export_logUpdateWithoutUserInput";
import { Import_export_logWhereUniqueInput } from "../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_logUpdateWithWhereUniqueWithoutUserInput", {})
export class Import_export_logUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => Import_export_logWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_logWhereUniqueInput;

  @TypeGraphQL.Field(_type => Import_export_logUpdateWithoutUserInput, {
    nullable: false
  })
  data!: Import_export_logUpdateWithoutUserInput;
}
