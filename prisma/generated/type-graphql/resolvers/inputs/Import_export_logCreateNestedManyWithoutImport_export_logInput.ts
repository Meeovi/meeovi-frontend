import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateManyImport_export_logInputEnvelope } from "../inputs/Import_export_logCreateManyImport_export_logInputEnvelope";
import { Import_export_logCreateOrConnectWithoutImport_export_logInput } from "../inputs/Import_export_logCreateOrConnectWithoutImport_export_logInput";
import { Import_export_logCreateWithoutImport_export_logInput } from "../inputs/Import_export_logCreateWithoutImport_export_logInput";
import { Import_export_logWhereUniqueInput } from "../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_logCreateNestedManyWithoutImport_export_logInput", {})
export class Import_export_logCreateNestedManyWithoutImport_export_logInput {
  @TypeGraphQL.Field(_type => [Import_export_logCreateWithoutImport_export_logInput], {
    nullable: true
  })
  create?: Import_export_logCreateWithoutImport_export_logInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logCreateOrConnectWithoutImport_export_logInput], {
    nullable: true
  })
  connectOrCreate?: Import_export_logCreateOrConnectWithoutImport_export_logInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_logCreateManyImport_export_logInputEnvelope, {
    nullable: true
  })
  createMany?: Import_export_logCreateManyImport_export_logInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logWhereUniqueInput], {
    nullable: true
  })
  connect?: Import_export_logWhereUniqueInput[] | undefined;
}
